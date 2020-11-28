/**
 * COB-CHA: CollaBorative CHeck tool for Accessibility
 * powered by Google Spreadsheet
 * @Author shibata@jidaikobo.com
 *         arimatsu@jidaikobo.com
 * @Licence MIT
 */

/**
 * onInstall
 * @param Object e
 * @return Void
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * onOpen
 * @param Object e
 * @return Void
 */
function onOpen (e) {
  if(e && e.authMode == 'NONE'){
    var menu = SpreadsheetApp.getUi().createAddonMenu();
    menu.addItem('Getting Started', 'askEnabled');
    menu.addToUi();
  } else {
    addShowControlPannel();
  }
}

/**
 * askEnabled
 * @param Object e
 * @return Void
 */
function askEnabled() {
  var title = 'COB-CHA';
  var msg = 'Script has been enabled.';
  var ui = SpreadsheetApp.getUi();
  ui.alert(title, msg, ui.ButtonSet.OK);
  var menu = SpreadsheetApp.getUi().createAddonMenu();
  addShowControlPannel(menu)
};

/**
 * add "Show Control Pannel" to menu
 * @return Void
 */
function addShowControlPannel() {
  var menu = SpreadsheetApp.getUi().createAddonMenu();
  menu.addItem(getUiLang('show-control-panel', 'Show Control Panel'), 'showControlPannel');
  menu.addItem(getUiLang('help', 'COB-CHA Help'), 'showHelp');
  menu.addToUi();
};

/**
 * show control pannel
 * @return Void
 */
function showControlPannel() {
  var ui = HtmlService.createTemplateFromFile('ui-control-pannel')
                      .evaluate()
                      .setTitle('COB-CHA'+getUiLang('control-panel-title', ' Control Panel'));
  SpreadsheetApp.getUi().showSidebar(ui);
}

/**
 * show help
 * @return Void
 */
function showHelp() {
  showDialog('ui-help', 500, 400, getUiLang('help', 'Help'));
}

/**
 * show dialog
 * @param String sheetname
 * @param Integer width
 * @param Integer height
 * @param String title
 * @param String html
 * @return Void
 */
function showDialog(sheetname, width, height, title, html) {
  var output = HtmlService.createTemplateFromFile(sheetname);
  var ss = getSpreadSheet();
  title = title == null ? '' : title;
  html = html == null ? '' : html;
  var html = output.evaluate()
                   .setSandboxMode(HtmlService.SandboxMode.IFRAME)
                   .setWidth(width)
                   .setHeight(height)
                   .setTitle(title)
                   .append(html);
  ss.show(html);
}

/**
 * Get First Column
 * @return String
 */
function getFirstColumn() {
  var activeSheet = getActiveSheet();
  var activeRow = activeSheet.getActiveCell().getRow();
  var criterion = activeSheet.getRange(activeRow, 1).getValue();
  criterion = criterion.match(/^\d\.\d\.\d+/) || criterion.match(/^\d+\.\w/) ? criterion : '';
  return criterion;
}

/**
 * Get Current Position
 * @return Array
 */
function getCurrentPos() {
  var activeSheet = getActiveSheet();
  var row = activeSheet.getActiveCell().getRow();
  var col = activeSheet.getActiveCell().getColumn();
  var val = activeSheet.getActiveCell().getValue().toString();
  return [row, col, val];
}

/**
 * Get URL from sheet
 * @param Object sheet
 * @return String
 */
function getUrlFromSheet(sheet) {
  return sheet.getRange(2, 2).getValue();
}

/**
 * Get sheet by URL
 * @param String url
 * @return Object
 */
function getSheetByUrl(url) {
  if (getSheetByUrl.vals && getSheetByUrl.vals[url]) return getSheetByUrl.vals[url];

  var vals = {};
  var allSheets = getAllSheets();
  for (var i = 0; i < allSheets.length; i++) {
    var url = getUrlFromSheet(allSheets[i]);
    vals[url] = allSheets[i];
  }
  getSheetByUrl.vals = vals;
  return getSheetByUrl.vals[url];
}

/**
 * Get Property
 * @param String prop [lang, type, level]
 * @return String
 */
function getProp(prop) {
  if (getProp.vals && getProp.vals[prop]) return getProp.vals[prop];

  var activeSheet = getActiveSheet();
  var rets = activeSheet.getRange(1, 2, 1, 7).getValues();
  var vals = {};
  var userLocale = Session.getActiveUserLocale();
  //  activeSheet.getRange(1,1).setValue(userLocale);
  
  userLocale    = ['en', 'ja'].indexOf(userLocale) > -1 ? userLocale : 'en';
  vals['lang']  = ['en', 'ja'].indexOf(rets[0][0]) > -1 ? rets[0][0] : userLocale;
  vals['type']  = ['wcag20', 'wcag21', 'tt20'].indexOf(rets[0][1]) > -1 ? rets[0][1] : 'wcag21';
  vals['level'] = ['A', 'AA', 'AAA'].indexOf(rets[0][2]) > -1 ? rets[0][2] : 'AA';
  vals['mark']  = rets[0][6].toString().charAt(0) == 'T' ? ['NT', 'DNA', 'T', 'F'] : ['?', '-', 'o', 'x'];
  //  vals['lang']  = 'en';
  getProp.vals = vals;
  
  return getProp.vals[prop];
}

/**
 * Get Language Set
 * this function is language hard coding
 * @param String setName
 * @return Array
 */
function getLangSet(setName) {
  // ja
  if (getProp('lang') == 'ja') {
    switch (setName) {
      case 'criteria':   return getCriteriaJa();
      case 'ttCriteria': return getTtCriteriaJa();
      case 'tech':       return getTechValJa();
      case 'ui':         return getUiJa();
      // ICL: Japanese Only
      case 'iclSituation': return getIclSituation();
      case 'iclTest':      return getIclTest();
    }
  }
  
  // fallback - en
  switch (setName) {
    case 'criteria':   return getCriteriaEn();
    case 'ttCriteria': return getTtCriteriaEn();
    case 'tech':       return getTechValEn();
    case 'ui':         return {};
  }
}

/**
 * Get Language UI Set
 * @param String uiname
 * @param String defaultStr
 * @return String
 */
function getUiLang(uiname, defaultStr) {
  var ui = getLangSet('ui');
  if (ui.length == 0 || ui[uiname] == null) {
    return defaultStr;
  }
  return ui[uiname];
}

/**
 * is debug mode
 * @return Bool
 */
function isDebug() {
  return Session.getActiveUser().getUserLoginId() == 'jidaikobo@gmail.com';
}

/**
 * Get All Criteria Set
 * @param String lang
 * @param String type
 * @return Array
 */
function getAllCriteria(lang, type) {
  var set = type.indexOf('wcag') >= 0 ? 'criteria' : 'ttCriteria' ;
  var allCriteria = getLangSet(set);

  // Trusted Tester does not apply additional criteria
  if (set == 'ttCriteria') return allCriteria;
  if (getAllCriteria.vals) return getAllCriteria.vals;
  
  // add URL
  var urlPointer = lang+'-'+type;
  for (var i = 0; i < allCriteria.length; i++) {
    var langPointer = type == 'wcag21' ? allCriteria[i][4] : allCriteria[i][3];
    allCriteria[i].push(urlbase['understanding'][urlPointer]+langPointer);
  }
  getAllCriteria.vals = allCriteria;
    
  return allCriteria;
}

/**
 * Get Using Criteria Set
 * @param String lang
 * @param String type
 * @param String level
 * @return Array
 */
function getUsingCriteria(lang, type, level) {
  var usingCriteria = getAllCriteria(lang, type);

  // Trusted Tester does not apply additional criteria
  if (type.indexOf('tt') >= 0) return usingCriteria;
  if (getUsingCriteria.vals) return getUsingCriteria.vals;
 
  // additional criteria
  var additionalCriteriaArr = getAdditionalCriterion().split(/,/);
  var additionalCriteria = [];
  for (var i = 0; i < additionalCriteriaArr.length; i++) {
    additionalCriteria.push(additionalCriteriaArr[i].trim());
  }
  
  // eliminate unuse criteria
  for (var i = 0; i < usingCriteria.length; i++) {
    if (
      (type == 'wcag20' && criteria21.indexOf(usingCriteria[i][1]) >= 0) ||
      usingCriteria[i][0].length > level.length
    ) {
      if (additionalCriteria.indexOf(usingCriteria[i][1]) >= 0) continue;
      delete usingCriteria[i];
    }
  }
  
  usingCriteria = usingCriteria.filter(function(x){
	return !(x === null || x === undefined || x === ""); 
  });
  
  getUsingCriteria.vals = usingCriteria;
  
  return usingCriteria;
}

/**
 * Get Using Tech Set
 * @param String lang
 * @param String type
 * @param String level
 * @return Array
 */
function getUsingTechs(lang, type, level) {
  if (getUsingTechs.vals) return getUsingTechs.vals;

  var techNames = getLangSet('tech');
  var urlPointer = lang+'-'+type;
  var usingCriteria = getUsingCriteria(lang, type, level);
  var usingTechs = [];
  
  for (i = 0; i < usingCriteria.length; i++) {
    var criteria = usingCriteria[i][1];
    if (relTechsAndCriteria[criteria] == null) continue;
    for (j = 0; j < relTechsAndCriteria[criteria].length; j++) {
      var url = urlbase['tech'][urlPointer];
      var each = relTechsAndCriteria[criteria][j];
      
      // Techniques for WCAG 2.1 has directory
      if (type == 'wcag21' && lang == 'en') {
        var dir = each.charAt(0)+each.charAt(1);
        if (['M', 'L', 'V', 'C'].indefOf(each.charAt(1)) < 0) {
          dir = dir.charAt(0);
        }
        url += techDirAbbr[dir]+'/'+each;
      } else {
        url += each+'.html';
      }

      usingTechs.push([criteria, relTechsAndCriteria[criteria][j], techNames[each], url]);
    }
  }
  
  getUsingTechs.vals = usingTechs;
    
  return usingTechs;
}

/**
 * add image formula
 * @param String id
 * @return String
 */
function addImageFormula(id) {
  return '=IMAGE("https://drive.google.com/uc?export=download&id='+id+'",1)';
};

/**
 * remove image formula
 * @param String id
 * @return String
 */
function removeImageFormula(id) {
  id = id.replace('=IMAGE("https://drive.google.com/uc?export=download&id=' ,'');
  id = id.replace('",1)', '');
  return id;
};

/**
 * Get HTML and its title
 * @param String url
 * @return Object
 */
function getHtmlAndTitle(url) {
  var ret = {'title': '', 'html': ''};
  if (url.indexOf('http') < 0) {
    return ret;
  }
  
  var options = {
    "muteHttpExceptions" : true,
    "validateHttpsCertificates" : false,
    "followRedirects" : false,
  }
  
  try {
    var res = UrlFetchApp.fetch(url, options).getContentText();
    var title = res.match(/<title>.+?<\/title>/ig);
    title = String(title).replace(/<\/*title>/ig, '');
    return {'title': title, 'html': res};
  } catch(e) {
    return ret;
  }
}

/**
 * wrapHtmlHeaderAndFooter
 * @param String title
 * @param String body
 * @return String
 */
function wrapHtmlHeaderAndFooter(title, body) {
  return '<!DOCTYPE html><html lang="'
  +getProp('lang')
  +'"><head><meta charset="utf-8"><title>'
  +title
  +'</title></head><body>'
  +body
  +'</body></html>';
}

/**
 * escape html
 * @thx https://qiita.com/saekis/items/c2b41cd8940923863791
 * @return Void
 */
function escapeHtml (string) {
  if (typeof string !== 'string') {
    return string;
  }
  return string.replace(/[&'`"<>]/g, function(match) {
    return {
      '&': '&amp;',
      "'": '&#x27;',
      '`': '&#x60;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;',
    }[match]
  });
}
