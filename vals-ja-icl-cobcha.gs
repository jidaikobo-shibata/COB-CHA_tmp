/**
 * Implement Check List for COB-CHA
 * This is not a kind of Language file.
 * ICL is a Japanese local rule to proof appropriate reason why test has passed or not.
 * LICENSE: [CC0](https://creativecommons.org/share-your-work/public-domain/cc0)
 */

/**
 * Situations of Implement Check List
 * @return Array
 */
function getIclSituationCobcha () {
  return {
    '1.1.1' : {
      '1.1.1-A' : '意味のある画像がある場合',
      '1.1.1-B' : '短い説明では同じ情報を提示できない画像がある場合（グラフや図表など）',
      '1.1.1-C' : '非テキストコンテンツがリンクやフォームなど入力を受け付ける要素である場合',
      '1.1.1-D1' : '非テキストコンテンツが時間依存のメディア（ライブを含む動画や音声コンテンツ）の場合',
      '1.1.1-D2' : '非テキストコンテンツに意味があるが、試験目的、あるいは特定の感覚を呼び起こす目的などのため、説明を提示しなくても良い場合',
      '1.1.1-E' : '非テキストコンテンツがCAPTCHAである場合',
      '1.1.1-F' : '非テキストコンテンツを支援技術が無視することが望ましい場合',
      '1.1.1-G' : 'CSSによる背景画像がある場合、または動的に変化する非テキストコンテンツがある場合'
    },

    '1.2.1' : {
      '1.2.1-A' : '収録済の音声のみのコンテンツがある場合',
      '1.2.1-B' : '収録済の映像のみのコンテンツがある場合'
    },

    '1.2.2' : {
      '1.2.2' : '同期したメディアがある場合'
    },

    '1.2.3' : {
      '1.2.3' : '同期したメディアがある場合'
    },

    '1.3.1' : {
      '1.3.1-A' : 'セマンティックなマークアップの確認',
      '1.3.1-B' : 'ARIAの確認',
      '1.3.1-C' : '対象がプレインテキストの場合'
    },

    '1.3.2' : {
      '1.3.2' : 'テキストがある場合、またはCSSを用いている場合'
    },

    '1.3.3' : {
      '1.3.3' : '感覚的な特徴（形状、サイズ、視覚的位置、方向、または音への参照）がある場合'
    },

    '1.4.1' : {
      '1.4.1' : '色の違いに依存して情報を伝える（それぞれの色に意味を割り当てた）コンテンツがある場合（全盲の視覚障害者向けの試験は1.1.1等とする）'
    },

    '1.4.2' : {
      '1.4.2' : '自動的に再生される音声コンテンツがある場合'
    },

    '2.1.1' : {
      '2.1.1' : 'インタラクティブな要素（マウスで操作できる全ての要素）がある場合'
    },

    '2.1.2' : {
      '2.1.2' : 'キーボードフォーカスを受け取る要素がある場合'
    },
    
    '2.1.4' : {
      '2.1.4' : '文字 (大文字と小文字を含む)、句読点、数字、又は記号のみを使用したキーボードショートカットの実装が確認されている場合（実装の有無が不明な場合は、文字キーのショートカットが実装されているかを確認すること）'
    },

    '2.2.1' : {
      '2.2.1-A' : '制限時間がある場合',
      '2.2.1-B' : 'コンテンツを読むのに制限時間がある場合'
    },

    '2.2.2' : {
      '2.2.2' : '動きのある、点滅している、又はスクロールしている情報が、自動的に開始し、ページにおける唯一のコンテンツでない場合'
    },

    '2.3.1' : {
      '2.3.1' : '動きのある、色の変化のあるコンテンツがある場合'
    },

    '2.4.1' : {
      '2.4.1' : '他のページでも繰り返されているブロックがある場合'
    },

    '2.4.2' : {
      '2.4.2' : ''
    },

    '2.4.3' : {
      '2.4.3' : 'キーボードフォーカスを受け取る要素がある場合'
    },

    '2.4.4' : {
      '2.4.4' : 'リンクまたはボタンがある場合'
    },

    '2.5.1' : {
      '2.5.1' : 'ポインタの動作（軌跡ベースおよびマルチポイント）を解釈するウェブコンテンツがある場合'
    },

    '2.5.2' : {
      '2.5.2' : 'シングルポインタを使ってウェブコンテンツを操作できる場合'
    },

    '2.5.3' : {
      '2.5.3-A' : 'テキストまたは文字画像による可視ラベルを持つユーザインタフェースコンポーネントがある場合（ただし記号的な文字──テキストエディタの「B」や「i」など──を除く）（COB-CHA解釈：達成基準の趣旨（音声入力によるユーザインタフェースコンポーネントの操作等）から、placeholderは、入力開始後に可視になったとしても、アクセシブルな名前の確実な対象とならない限り、この達成基準を適用しない）',
      '2.5.3-B' : '数式及び式による可視ラベルを持つユーザインタフェースコンポーネントがある場合'
    },

    '2.5.4' : {
      '2.5.4' : '振る、傾ける、あるいはデバイスに向かっての行為など、デバイス又は利用者の動きで操作する機能がある場合'
    },

    '3.1.1' : {
      '3.1.1' : ''
    },

    '3.2.1' : {
      '3.2.1' : 'キーボードフォーカスを受け取る要素がある場合'
    },

    '3.2.2' : {
      '3.2.2' : '無効でないフォーム要素がある場合'
    },

    '3.2.6' : {
      '3.2.6' : 'サイト内の複数の箇所でヘルプ（問い合わせ先へのリンクやチャット、操作方法の説明等）のメカニズムが提供されている場合'
    },

    '3.3.1' : {
      '3.3.1' : '自動エラー検出がある場合'
    },

    '3.3.2' : {
      '3.3.2' : '無効でないフォーム要素がある場合（placeholderによるラベルは可視ラベルとしない）'
    },

    '3.3.7' : {
      '3.3.7' : 'ユーザによって入力または提供された情報を同じプロセスで再度入力を求める実装がある場合'
    },

    '4.1.1' : {
      '4.1.1' : ''
    },

    '4.1.2' : {
      '4.1.2-A' : '標準的なユーザインタフェース コンポーネントを使用している場合',
      '4.1.2-B' : '標準的なユーザインタフェース コンポーネントを使用していない場合',
      '4.1.2-C' : 'プログラミング技術でユーザインタフェース コンポーネントを作成したり、UAのAPIを使っている場合'
    },

    // AA
    '1.2.4' : {
      '1.2.4' : 'ライブによる同期したメディアがある場合'
    },

    '1.2.5' : {
      '1.2.5' : '収録済みの同期したメディアがある場合。ただし映像で提供された情報のすべてが音声ですでに提供されている場合は不要'
    },

    '1.3.4' : {
      '1.3.4' : 'コンテンツがある場合'
    },

    '1.3.5' : {
      '1.3.5' : '利用者の情報を収集するフォームコントロールがある場合'
    },

    '1.3.6' : {
      '1.3.6' : ''
    },

    '1.4.3' : {
      '1.4.3' : 'テキストと文字画像がある場合'
    },

    '1.4.4' : {
      '1.4.4' : 'テキストがある場合'
    },

    '1.4.5' : {
      '1.4.5-A' : 'テキストがある場合',
      '1.4.5-B' : '文字画像がある場合'
    },

    '1.4.10' : {
      '1.4.10' : 'コンテンツがある場合'
    },

    '1.4.11' : {
      '1.4.11-A' : '色がユーザインタフェースコンポーネント及びその状態を識別するために使用されている場合',
      '1.4.11-B' : '色がグラフィカルコンテンツを理解するために必須である場合'
    },

    '1.4.12' : {
      '1.4.12' : 'テキストがある場合'
    },

    '1.4.13' : {
      '1.4.13' : 'ホバー又はフォーカスで表示されるコンテンツがある場合'
    },

    '2.4.5' : {
      '2.4.5' : 'ページがプロセスの結果または1ステップでない場合（2つ以上の達成方法が必要）'
    },

    '2.4.6' : {
      '2.4.6' : 'コンテンツに可視の見出しとフォーム要素に可視のラベルがある場合'
    },

    '2.4.7' : {
      '2.4.7' : 'キーボードフォーカスを受け取る要素がある場合'
    },

    '2.4.11' : {
      '2.4.11' : 'キーボードフォーカスを受け取る要素がある場合'
    },

    '2.5.7' : {
      '2.5.7' : 'ドラッグ動作を必要とする機能がある場合'
    },

    '2.5.8' : {
      '2.5.8' : 'ポインター入力の対象の要素がある場合'
    },

    '3.1.2' : {
      '3.1.2' : 'ページに複数の言語が存在し、複数の言語による表現が、だれにとっても意味不明か、固有名詞であるか、技術用語であるか、一般的に理解されている単語またはフレーズでない場合'
    },

    '3.2.3' : {
      '3.2.3' : '他のページでも繰り返されているブロックがある場合'
    },

    '3.2.4' : {
      '3.2.4' : '他のページで同じ機能（リンク先等）を持つ要素（アイコン、リンクテキストなど）がある場合'
    },

    '3.3.3' : {
      '3.3.3-A' : '必須項目が入力されていない場合',
      '3.3.3-B' : '特別の入力形式あるいは限定された値が要求される場合'
    },

    '3.3.4' : {
      '3.3.4-A' : '購入又は所得税申告の提出のように、法的なやりとりが発生する場合',
      '3.3.4-B' : '利用者のアクションによって情報が削除される可能性がある場合',
      '3.3.4-C' : 'ウェブページに試験を実施するアプリケーションがある場合'
    },

    '3.3.8' : {
      '3.3.8' : '認証プロセスがある場合'
    },

    '4.1.3' : {
      '4.1.3-A' : 'ステータスメッセージが動作の成功もしくは結果、又はアプリケーションの状態を通知する場合',
      '4.1.3-B' : 'ステータスメッセージが提案、又はエラーの存在に関する警告を伝える場合',
      '4.1.3-C' : 'ステータスメッセージがプロセスの進行に関する情報を伝える場合'
    },

    // AAA
    '1.2.6' : {
      '1.2.6' : '同期したメディアがある場合'
    },

    '1.2.7' : {
      '1.2.7' : '同期したメディアがある場合'
    },

    '1.2.8' : {
      '1.2.8-A' : '収録済の同期したメディアの場合',
      '1.2.8-B' : '収録済の映像しか含まないコンテンツの場合'
    },

    '1.2.9' : {
      '1.2.9' : 'ライブの音声しか含まないコンテンツがある場合'
    },

    '1.4.6' : {
      '1.4.6' : 'テキストがある場合'
    },

    '1.4.7' : {
      '1.4.7' : ' 収録済の音声しか含まないコンテンツがある場合'
    },

    '1.4.8' : {
      '1.4.8' : 'テキストブロックが存在する場合'
    },

    '1.4.9' : {
      '1.4.9' : '文字画像がある場合'
    },

    '2.1.3' : {
      '2.1.3' : ''
    },

    '2.2.3' : {
      '2.2.3' : '入力や読み取りについて制限時間のあるコンテンツがある場合'
    },

    '2.2.4' : {
      '2.2.4' : '割り込みがある場合（ただし割り込みが安全を守る目的など緊急性が認められる場合を除く）'
    },

    '2.2.5' : {
      '2.2.5' : '認証済のセッションがある場合'
    },

    '2.2.6' : {
      '2.2.6' : 'タイムアウトがある場合'
    },

    '2.3.2' : {
      '2.3.2' : '閃光を放つコンテンツがある場合'
    },

    '2.3.3' : {
      '2.3.3' : '操作にともなうアニメーションがある場合'
    },

    '2.4.8' : {
      '2.4.8' : ''
    },

    '2.4.9' : {
      '2.4.9' : 'リンクまたはボタンがある場合'
    },

    '2.4.10' : {
      '2.4.10' : '長い文章がある場合'
    },

    '2.4.12' : {
      '2.4.12' : 'キーボードフォーカスを受け取る要素がある場合'
    },

    '2.4.13' : {
      '2.4.13' : 'キーボードフォーカスを受け取る要素がある場合'
    },

    '2.5.5' : {
      '2.5.5' : 'インタラクティブな要素がある場合'
    },

    '2.5.6' : {
      '2.5.6' : ''
    },

    '3.1.3' : {
      '3.1.3' : '一般的ではない用語がある場合'
    },

    '3.1.4' : {
      '3.1.4' : '略語がある場合'
    },

    '3.1.5' : {
      '3.1.5' : '中学校2年生程度の読解力では理解の難しいテキストがある場合'
    },

    '3.1.6' : {
      '3.1.6' : '発音が分からないと単語の意味が不明瞭になる場合'
    },

    '3.2.5' : {
      '3.2.5-A' : 'ウェブページが自動更新を行う場合',
      '3.2.5-B' : '自動リダイレクトが可能な場合',
      '3.2.5-C' : 'ウェブページが新しいタブもしくはウィンドウを開く場合',
      '3.2.5-D' : 'select要素上でonchangeイベントを用いる場合'
    },

    '3.3.5' : {
      '3.3.5-A' : 'フォームがテキスト入力を求める場合',
      '3.3.5-B' : 'フォームが所定のデータフォーマットでのテキスト入力を求める場合'
    },

    '3.3.6' : {
      '3.3.6-A' : '購入又は所得税申告の提出のように、法的なやりとりが発生する場合',
      '3.3.6-B' : '利用者のアクションによって情報が削除される可能性がある場合'
    },

    '3.3.9' : {
      '3.3.9' : '認証プロセスがある場合'
    }

  };
}

/**
 * Each Test of Implement Check List
 * @return Array
 * ['techmniques', 'explanation', default not apply]
 */
function getIclTestCobcha () {
  return {
    '1.1.1-A' : [
      ['H37/PDF1/ARIA6/ARIA10', 'img要素のalt属性値、PDFのAltエントリ、aria-label、aria-labelledbyは、画像と同等の記述を、短いテキストで提供している。短いテキストで同等の記述ができない場合は、画像を識別できる短いテキストが提供されている。画像がa要素内にある時は1.1.1-Cを優先すること'],
      ['H64/ARIA14/ARIA16', 'iframeの内容が地図やスライド、図表などを含むが、title属性/aria-label/aria-labelledbyで内容を識別できる（COB-CHA独自: 1.1.1ではiframeのtitleによる識別は存在しない）'],
      ['H53', 'object要素のボディは、そのオブジェクトに関する完全なテキストによる代替か、objectを識別できる短いテキストが提供されている', true]
    ],

    '1.1.1-B' : [
      ['G73/G74/G92', '支援技術の利用者は、画像の付近、あるいは別のページ等に記述された長いテキストを読むことで、画像で提供している情報を理解できる'],
      ['G73/G74/G92', 'iframeで示された地図やスライド、図表などの内容は、その付近、あるいは別のページ等に記述された長いテキストを読むことで、内容を理解できる（COB-CHA独自: 1.1.1ではiframeのtitleによる識別は存在しない）'],
      ['ARIA15', 'aria-describedbyは、画像と同等の記述を、テキストで提供している']
    ],

    '1.1.1-C' : [
      ['G82/H30/H37/ARIA6/ARIA10', 'a要素内のimg要素のalt属性値、aria-label、aria-labelledbyは、aの「リンクの目的」を短いテキストで提供している（2.4.4も確認）'],
      ['H24', 'area要素にはテキストによる代替が提供されている', true],
      ['H36', '送信ボタンとして用いる画像はalt属性を使用している'],
      ['H44/ARIA6/ARIA10', 'フォームコントロールはlabel要素、aria-label、aria-labelledbyによって説明されている'],
      ['H65', 'フォームコントロールはtitle属性によって説明されている（非推奨）', true]
    ],

    '1.1.1-D1' : [
      ['G68/G100', '時間依存メディア（ライブを含む）の簡潔なラベルが提供されている。H37/PDF1/ARIA6/ARIA10のいずれかを用いるのがよいが、支援技術の使用者にも理解できれば良い'],
      ['H64/ARIA14/ARIA16', 'iframeの内容が時間依存メディア（ライブを含む）を含むが、title属性/aria-label/aria-labelledbyで内容を識別できる（COB-CHA独自: 1.1.1ではiframeのtitleによる識別は存在しない）']
    ],

    '1.1.1-D2' : [
      ['G68/G100', '非テキストコンテンツが、テキストで詳説されると無効になる試験又は演習であるか、特定の感覚的体験を創り出すことを主に意図しているコンテンツである場合、簡潔なラベルを提供している。H37/PDF1/ARIA6/ARIA10のいずれかを用いるのがよいが、支援技術の使用者にも理解できれば良い', true]
    ],

    '1.1.1-E' : [
      ['G143/G14', 'CAPTCHAであることを説明するテキストによる代替を提供し、かつCAPTCHAの代替形態が提供されている', true]
    ],

    '1.1.1-F' : [
      ['C9/H67/PDF4', '非テキストコンテンツは装飾的であり、空のalt、CSSの背景画像や擬似要素を用いて、支援技術が無視できるように実装されている']
    ],

    '1.1.1-G' : [
      ['F3', '重要な情報をCSSの背景画像で提供していない。背景画像を消してもコンテンツは利用可能である'],
      ['F20', '非テキストコンテンツが動的に変更されるとき、テキストによる代替も適切に変更されている']
    ],

    // 1.2.1
    '1.2.1-A' : [
      ['G158', 'コンテンツを理解するのに十分な書き起こしテキストが提供されている']
    ],

    '1.2.1-B' : [
      ['G159', 'コンテンツを理解するのに十分な書き起こしテキストが提供されている'],
      ['G166', '映像を説明する音声ファイルが提供されている']
    ],

    // 1.2.2
    '1.2.2' : [
      ['G93', 'コンテンツを理解するのに十分（話者の特定や効果音の解説を含む）なオープン (常に見える) キャプションを提供する'],
      ['G87', 'コンテンツを理解するのに十分（話者の特定や効果音の解説を含む）なクローズドキャプションを提供する'],
      ['H95', 'コンテンツを理解するのに十分（話者の特定や効果音の解説を含む）なキャプションを提供するために、track 要素を使用する', true]
    ],

    // 1.2.3
    '1.2.3' : [
      ['G69/G58', '動画コンテンツの付近またはリンクされたページにおいて、動画コンテンツを理解できるテキストによる代替が提供されている'],
      ['G78/G173/G8', '動画コンテンツには音声解説が提供されており、音声解説はコンテンツを視覚によらずに理解するに十分である'],
      ['G203', '動画コンテンツは話者が話すのみのコンテンツであり、テキストによる代替が提供されている'],
      ['-', '動画コンテンツは、メディアによるテキストの代替であり、メディアによる代替であることがわかるようにラベル付けされている']
    ],

    // 1.3.1
    '1.3.1-A' : [
      ['G140', '情報と構造を表現から分離している'],
      ['F87', 'CSSの::beforeおよび::afterのみで、意味のある情報を提供していない'],
      ['G115/H49/H42/PDF9', '段落、見出し、強調されたテキスト等は、セマンティックなマークアップをしている'],
      ['F43', '視覚的効果のために間違ったマークアップをしていない（大きさを整えるためのh、字下げ目的のblockquote、枠線を出すためだけのfieldsetなど）'],
      ['H48/PDF21', 'リストに、ol要素、ul要素、dl要素を用いている'],
      ['H97', 'nav要素を使用して、関連したリンクをグループ化している'],
      ['G117', 'テキストの見え方のバリエーション（フォント、太字、斜体など）によって伝えている情報を伝達するために、テキストで補足している。たとえば太字は「新着」を表すのであれば「(new)」というテキストによる説明がある'],
      ['H44/ARIA6/ARIA16/PDF10', 'フォームコントロールはlabel要素、aria-label、aria-labelledbyによってラベルと関連づけられている'],
      ['H65', 'フォームコントロールはtitle属性によって説明されている（非推奨）', true],
      ['H51', '表形式の情報はテーブル要素でマークアップされている'],
      ['H39', 'データテーブルにキャプションがある場合、caption要素を使用している'],
      ['F91', 'データテーブルで見出しセルを正しくマークアップしている'],
      ['H63', 'データテーブルで見出しセルとデータセルを関連付けるために、scope属性を使用している。あるいはデータテーブルの構造は単純である'],
      ['F46', 'レイアウトテーブルでthやcaptionを使用していない']
    ],

    '1.3.1-B' : [
      ['ARIA11', 'role="navigation"やrole="main"などのARIAランドマークを使用している'],
      ['ARIA12', 'role="heading"およびaria-level属性をもちいて見出しとしている'],
      ['ARIA13', 'ランドマークに名前を付けるために、aria-labelledbyを使用している'],
      ['ARIA16', 'ユーザインタフェースコントロールに名前を付けるために、aria-labelledbyを使用している'],
      ['ARIA17', '関連するフォームコントロールを特定するために、グルーピングロール（role="group"やrole="radiogroup"）を使用する'],
      ['ARIA20', 'ページの領域を特定するために regionロールを使用する。ただし、一般的なランドマークロールが使える場合は、ARIA11を採用している']
    ],

    '1.3.1-C' : [
      ['T1/T2/T3', 'プレインテキストはわかりやすい一貫した様式が採用されている。たとえば段落は前後に空行があり、見出しの前に2行の空行があり、リストは「-」や数字で始まっていてリストだと分かるようになっている', true]
    ],

    // 1.3.2
    '1.3.2' : [
      ['G57/C27/F49/F1', 'CSSによる配置や、レイアウトテーブルを無効にして、コンテンツを線形化した状態でも、意味のある順序が保たれている'],
      ['C8/F32/F33/F34', '空白を用いて文字を整形していない'],
      ['PDF3', 'PDF文書で正しいタブ順序と読み上げ順序を確保している']
    ],

    // 1.3.3
    '1.3.3' : [
      ['G96', '感覚的な特徴（形状、サイズ、視覚的位置、方向、または音への参照）に依存しない説明によってもコンテンツが理解できる']
    ],

    // 1.4.1
    '1.4.1' : [
      ['G14/G205', '色の違いで伝えている情報（カレンダの色分け、色のアイコンによるコード化、必須項目など）を視認できるテキストでも利用可能にしている'],
      ['G182',　'色の違いで伝えている情報を、その他の追加の視覚的な手掛かり（書体、太字など）でも利用可能にしている'],
      ['G14/G111', '図表等、情報を伝える画像の中で、色の違いによって意味を伝えているが、パターンなど、ほかの視覚的な手がかり及びテキストでも利用できるようにしている'],
      ['G183/F73', 'リンクの下線を消して、色によってリンクテキストを表しているが、周囲のテキストに対し十分なコントラスト（3:1）があり、かつフォーカス時にはなんらかの視覚効果を加えている（ただしそもそもリンクテキストから下線を消すことは推奨しない）'],
      // ['-', '意味の違いがオン/オフのようにニ値的であり、十分なコントラストを保っている（グローバルナビゲーションのホバーや現在位置提示など）'],
    ],

    // 1.4.2
    '1.4.2' : [
      ['G60', '音声の再生は3秒以内に自動的に停止する'],
      ['G170', '自動的に再生される音声を停止するコントロールを、ウェブページの先頭付近で提供している']
    ],

    // 2.1.1
    '2.1.1' : [
      ['G202', 'すべての機能に対してキーボード制御を確保している。操作にはキーストロークの特定のタイミングを必要としない'],
      ['H91/PDF3/PDF11/PDF23', '標準的な機能を用いてフォームコントロールやリンクを実装してキーボード操作を保証している'],
      ['G90/SCR20/SCR35/SCR2', 'JavaScriptによる実装において、キーボードがトリガーとなるイベントハンドラを提供している'],
      ['-', 'キーボードで操作できない機能は、マウスなど軌跡を制御できるインタフェイスでの操作が必然である', true]
    ],

    // 2.1.2
    '2.1.2' : [
      ['G21', 'キーボードフォーカスを閉じ込める要素は存在しない。あるいは簡単な方法で閉じ込められている状態を解除できる']
    ],

    // 2.1.4
    '2.1.4' : [
      ['G217', '単一文字のショートカットを無効にできる。あるいはショートカットを1つ以上の修飾キーを含む組み合わせに再割り当てできる'],
      ['-', '単一キーのキーボードショートカットを実装しているが、特定のユーザインタフェースコンポーネント（selectなど）にフォーカスが当たっているときにのみ、キーボードショートカットが有効になっている']
    ],

    // 2.2.1
    '2.2.1-A' : [
      ['G198', 'ウェブページの上部に、あらゆる制限時間を解除できるメカニズムがあり、そのメカニズムは操作に時間のかかる利用者であっても、余裕を持って利用できるようになっている'],
      ['G133', '複数のパートからなるフォームにおいて、フォームの最初のパートで、制限時間の延長あるいは解除ができるようになっている'],
      ['G180',　'環境設定画面や行為の冒頭で制限時間を10倍に設定するメカニズムを利用できる'],
      ['SCR16/SCR1', '制限時間の20秒前までに間近に迫った時間制限を警告するダイアログが表示され、そのダイアログの操作によって、制限時間を延長できる']
    ],

    '2.2.1-B' : [
      ['G4/SCR33', '動きやスクロールのあるコンテンツがあるが、一時停止可能であり、一時停止させたところから再開できる']
    ],

    // 2.2.2
    '2.2.2' : [
      ['G4/SCR33', '動きやスクロールのあるコンテンツは、一時停止可能であり、一時停止させたところから再開できる'],
      ['G11/G152/SCR22', 'コンテンツの動きは5秒以内である']
    ],

    // 2.3.1
    '2.3.1' : [
      ['G19', 'どの1秒間においても、3回よりも多く閃光を放つコンポーネントがない'],
      ['G176', '閃光を放つ領域が十分に小さい'],
      ['G15', 'コンテンツが一般閃光閾値及び赤色閃光閾値を越えていないことをツールで確認した']
    ],

    // 2.4.1
    '2.4.1' : [
      ['G1', 'メインコンテンツエリアへ直接移動するリンクがページの先頭に存在する'],
      ['H69/PDF9', '見出しタグで内容を識別でき、直接移動できる（支援技術依存）'],
      ['ARIA11', 'role属性（role="main"）、要素が持つランドマークロール（<nav>）などで、ページの各領域を識別でき、直接移動できる（支援技術依存）'],
      ['G124', 'ページの先頭に、コンテンツの各エリアへのリンクがある'],
      ['H64', 'iframe/frameのtitle属性で内容を識別でき、直接移動できる（支援技術依存）'],
      ['G123', '繰り返しているコンテンツのブロックの先頭には、そのブロックの末尾へのリンクがある'],
      ['SCR28', '繰り返しているコンテンツのブロックは、展開可能及び折り畳み可能になっており、展開時/折り畳み時に論理的な位置を維持する']
    ],

    // 2.4.2
    '2.4.2' : [
      ['G88/H25/PDF18/F25', 'ウェブページには説明的なタイトルがある。同一サイト内に同じページタイトルが存在しないとなおよい']
    ],

    // 2.4.3
    '2.4.3' : [
      ['G59/H4/C27/PDF3', 'コンテンツ内の順序及び関係性に従った順序でフォーカスが移動する'],
      ['G59/SCR26', '操作によって新たなコンテンツが展開したときに、次のキーボード操作で新たなコンテンツにフォーカス移動ができる'],
      ['G59', '操作によってコンテンツが収納されたときに、フォーカスは論理的な順序に返っている']
    ],

    // 2.4.4
    '2.4.4' : [
      ['G91/H30/H24/PDF11/PDF13', 'リンクテキストは、リンクの目的を説明している。imgやareaはaltがリンクの目的を説明している'],
      ['G53', 'リンクテキスト単体ではリンクの目的の特定は難しいが、リンクとその前後のテキストからリンクの目的を特定できる'],
      ['ARIA7/ARIA8', 'aria-labelあるいはaria-labelledbyでリンクの目的を説明している'],
      ['H77/H78/H79/H81', 'リンクの目的は、リンクテキストと、同じli、p、セルのなかにあるか、テーブルの中にあり見出しセルとの関係が確保されているか、入れ子のリストの親のリスト項目との関係から理解できる'],
      ['H80', 'リンクの目的は、先行する見出し要素と組み合わせることで特定できる'],
      ['-', 'リンクの目的は、ほとんどの利用者にとって曖昧である']
    ],

    // 2.5.1
    '2.5.1' : [
      ['G215', '軌跡ベースのジェスチャ（スワイプなど）を行うことが困難な利用者に、（コンテンツスライダーなどにおいて）クリックやシングルタップなどのシングルポインタによって操作できるコントロールが提供されている'],
      ['G216', '軌跡ベースのジェスチャ（スワイプなど）を行うことが困難な利用者が、音量ツマミのようなコントロールスライダーをクリックやシングルタップなどのシングルポインタでも操作できる'],
      ['-', 'スクロールなどのOS/UAの組み込みのジェスチャであるか、ジェスチャが必要不可欠である']
    ],

    // 2.5.2
    '2.5.2' : [
      ['-', 'ポインタのダウンイベントで実行しない'],
      ['G212/-', 'ポインタのダウンイベント状態でフォーカスを外してキャンセルができる'],
      ['G212/-', 'アップイベントが先行するダウンイベントを反転する。ダウンイベントでポップアップが発生するがアップイベントでポップダウンが閉じるようなインタフェイスなど。'],
      ['G210', 'ドラッグ可能なコンテンツの場合、「選択したアイテムをドロップターゲットの外に離す」「元の位置にドラッグして戻す」「ドロップされた後、動作の確認を促す」などで元に戻すことができる'],
      ['-', 'ダウンイベントによる実行が必要不可欠である。ピアノの鍵盤など。']
    ],

    // 2.5.3
    '2.5.3-A' : [
      ['G208/G211', '「アクセシブルな名前」が可視ラベルと一致するか、可視レベルを含んでいる。可視レベルで始まるとなおよい（句読点/コロンの有無、大文字小文字の差異は問わない）']
    ],
    '2.5.3-B' : [
      ['-', '数式及び式は、本来の記号（例: 乗算記号は「x」でなく「×(&times;)」）を用いており、かつ式を読み下したような「アクセシブルな名前」で可視ラベルを上書きしていない']
    ],

    // 2.5.4
    '2.5.4' : [
      ['G213', 'デバイスのモーションセンサー入力を使用してコンテンツ機能を有効にするときに、代替の入力手段が存在しており、かつモーション作動を無効にするためのアプリケーション設定がある']
    ],

    // 3.1.1
    '3.1.1' : [
      ['H57/PDF16', '文書の初期設定言語が正しく設定されている（HTMLの場合はhtml要素のlang属性、PDFの場合は、プロパティを確認する）']
    ],

    // 3.2.1
    '3.2.1' : [
      ['G107', 'キーボードで、全てのコンテンツへフォーカスを移動しても、コンテキストの変化（新しいページへの移動、異なる要素へのフォーカス移動、新しいタブ/ウィンドウへの移動、ページの意味の書き換えなど）が発生しない']
    ],

    // 3.2.2
    '3.2.2' : [
      ['G80/H32/H84/PDF15', 'コンテキストの変化（新しいページへの移動、異なる要素へのフォーカス移動、新しいタブ/ウィンドウへの移動、ページの意味の書き換えなど）は送信ボタンによって開始されている'],
      ['G13', 'フォームコントロールの操作により、コンテキストの変化が生じるが、事前に説明されている'],
      ['F36', 'フォームの最後の値を入力しても、値は自動送信されない'],
      ['F37', 'ラジオボタン、チェックボックス、セレクトの選択を変更しても、コンテキストの変化は起こらない']
    ],

    // 3.2.6
    '3.2.6' : [
      ['G220', 'お問い合わせのリンクはウェブページ一式内で一貫した位置（ヘッダやフッタ等）にある'],
      ['-', 'チャットや操作方法の説明へのリンクはウェブページ一式内で一貫した位置（ヘッダやフッタ等）にある'],
    ],

    // 3.3.1
    '3.3.1' : [
      ['G83/PDF5', '必須項目を空欄で送信すると、未入力の項目を特定できる説明文が表示される'],
      ['-', '必須項目はrequired属性が設定されており、未入力の際UAによって指摘される（COB-CHA独自: required属性は達成方法集に存在しないが、アクセシビリティ サポーテッド状況は進んでいるという立場で）'],
      ['G84/G85/PDF22', '無効なデータを送信すると、エラーのある入力欄を特定できる説明文が表示される（3.3.1では、修正方法の提供は求めない）'],
      ['ARIA21', '送信後、問題のある入力欄はaria-invalidがtrueになっており、かつaria-describedbyなどプログラムで解釈できる形で説明文が提供されている'],
      ['ARIA18/-', '表示されるエラーメッセージはモーダルダイアログで提供されており、エラー箇所を特定できる'],
      ['ARIA19', '表示されるエラーメッセージは、role=alert又はaria-live=assertive属性が適用されており、スクリーンリーダーで即座に読み上げられ、エラー箇所を特定できる']
    ],

    // 3.3.2
    '3.3.2' : [
      ['G131/G162', '入力すべき内容を視覚的に理解できるラベルが、入力欄の上又は左など付近に配置してある'],
      ['G131/G89', '入力すべき内容を視覚的に理解できるラベルがあり、かつ期待される書式情報の説明が存在している'],
      ['G131/G184', '入力すべき内容を視覚的に理解できるラベルがあり、かつ必須項目に関する説明がフォームの先頭に存在している'],
      ['G131/H90', '入力すべき内容を視覚的に理解できるラベルがあり、かつ必須項目が、label要素またはlegend要素によって関連づけられている'],
      ['G131/ARIA1/ARIA9/ARIA17', '入力すべき内容を視覚的に理解できるラベル又は説明があり、aria-describedby、aria-labelledby、role="group"、role="radiogroup"などで関連づけられている'],
      ['G131/PDF5', '（PDFのみ）入力すべき内容を視覚的に理解できるラベルがあり、かつ必須項目が明示されている'],
      ['PDF10', '（PDFのみ）入力すべき内容を視覚的に理解できるラベルがある'],
      ['H44', 'label要素によって関連づけられているラベルは3.3.2の趣旨から可視である'],
      ['H71', 'fieldset要素およびlegend要素によって、グルーピングされている説明は可視である'],
      ['H65', '可視ラベルを表示する領域がないときにtitle属性でラベルを提供している（非推奨）', true],
      ['G167', '隣接するボタンが入力内容を説明している（最後の手段）', true]
    ],

    // 3.3.7
    '3.3.7' : [
      ['G221', 'プロセスの前のステップで同様の情報が入力されており、その情報が予め入力されているか、入力されるトリガーが提供されている'],
      ['-', '情報の再入力が必須であるか、セキュリティ確保の観点で再入力が必要であるか、以前に入力した情報が無効になっている']
    ],

    // 4.1.1
    '4.1.1' : [
      ['H74/H93/H94/F70/F77', '（HTMLのみ）開始タグ、終了タグの使用は仕様に準拠しており、idは一意で、属性値に重複はない'],
      ['G134/H88', '（HTMLのみ）nu HTML Checkerにおいてエラーがないことを確認できる']
    ],

    // 4.1.2
    '4.1.2-A' : [
      ['G108/H88/H91', 'HTMLの一般的な技術を使っているので、フォームコントロールの名前、役割、状態を理解できる'],
      ['H64/ARIA14/ARIA16', 'iframe/frameを使っているが、title属性/aria-label/aria-labelledbyで内容を理解できる'],
      ['G108/H44/ARIA14/ARIA16', 'label要素、aria-label、aria-labelledbyを使っているので、フォームコントロールの名前を理解できる'],
//      ['F79', '展開/収納できるメニューはaria-expandedによってステータスを提供している'],
      ['G108/H65', 'label要素を利用できないが、title属性でフォームコントロールの名前を提供している（非推奨）', true],
      ['-', '4.1.2の趣旨に沿って、ユーザインタフェースコンポーネントの名前、役割、状態を理解できる']
    ],

    '4.1.2-B' : [
      ['ARIA16', 'divやspanなど、通常のフォームコントロールでない要素をリンクやボタンにしているが、aria-labelledby等を用いて、名前や役割を提供している']
    ],

    '4.1.2-C' : [
      ['G135/G10', 'JavaやPython等、HTML/JavaScript/CSSなどの一般的なウェブ技術以外を用いてユーザインタフェースを作成しているが、ブラウザで名前や役割を理解できるようにしている', true],
      ['PDF10/PDF12', 'PDFのフォームコントロールがPDFにおける標準的な技術で作成されており、名前や役割を理解できる']
    ],

    // AA

    // 1.2.4
    '1.2.4' : [
      ['G9/G93', 'オープン (常に見える) キャプションが提供されいる'],
      ['G9/G87', 'クローズドキャプションが提供されいる']
    ],

    // 1.2.5
    '1.2.5' : [
      ['G78/G173/G8', '動画コンテンツには音声解説が提供されており、音声解説はコンテンツを視覚によらずに理解するに十分である'],
      ['G203', '動画コンテンツは話者が話すのみのコンテンツであり、テキストによる代替が提供されている']
    ],

    // 1.3.4
    '1.3.4' : [
      ['-', '表示デバイスは横位置でも縦位置でも利用できる。あるいはデバイスの向きの固定は必要不可欠である'],
      ['G124', 'デバイスを回転させても向きが変わらないコンテンツの場合、コンテンツの向きを変更するコントロールが提供されている']
    ],

    // 1.3.5
    '1.3.5' : [
      ['H98', 'autocomplete属性において仕様に従って属性値を用いることで、個人情報を自動入力できるようになっている']
    ],

    // 1.3.6
    '1.3.6' : [
      ['-', 'アイコン及びユーザインタフェース コンポーネントの目的をプログラム的に示しているので、自分のアイコンの追加や代用ができるようになっている'],
      ['ARIA11', 'role="navigation"やrole="main"などのARIAランドマークを使用しており、ページの各領域を理解可能であり、利用者は自分のユーザエージェントで領域を削除又は強調表示することができる']
    ],

    // 1.4.3
    '1.4.3' : [
      ['G18/G145', 'テキストおよび文字画像との背景の間に、すくなくとも4.5:1のコントラスト比（大きな文字の場合3:1。大きな文字は日本語29.3px、英語等24px。太字の場合：日本語24px、英語等18.5px）がある'],
      ['G148', '背景色、背景画像及び文字色を指定していない', true],
      ['G174', 'ハイコントラストモードを提供している', true],
      ['-', 'コントラスト比が十分でないテキストは、disabledであったり装飾的である。あるいはロゴである']
    ],

    // 1.4.4
    '1.4.4' : [
      ['G142/G179', 'ブラウザのズーム機能で200%までの大きさに拡大可能で、拡大時に文字が欠けたり、他の要素に隠れて読めなくなることはない'],
      ['G178/G179', '200%まで拡大できるテキストの拡大機能を提供しており、拡大時に文字が欠けたり、他の要素に隠れて読めなくなることはない']
    ],

    // 1.4.5
    '1.4.5-A' : [
      ['C22/G140', 'テキストの視覚的提示はCSSで制御されている'],
    ],
    '1.4.5-B' : [
      ['PDF7', 'PDFとして画像化された文字はOCRでテキストデータに変換可能である（全て画像のPDFはそもそも作成しないことが望ましい）', true],
      ['-', '文字画像はCSSでは表現しづらい視覚的提示である'],
      ['-', '文字画像はロゴあるいは、書体見本や手紙の写し、署名など画像であることが必然的である']
    ],

    // 1.4.10
    '1.4.10' : [
      ['C32/C31', '400％のズームが可能なユーザエージェントでウェブページを表示し、ビューポートサイズ (CSS ピクセル単位) を幅1280、高さ1024に設定し、水平垂直の双方にスクロールバーがでないことを確認する'],
      ['C33', '長いURL及びテキスト文字列は、適宜改行され、リフローを妨げない'],
      ['C38', 'フォームのラベルと入力欄は、水平方向に並べて表示するのが困難な場合は、垂直方向に並ぶように切り替わり、リフローを妨げない'],
      ['SCR34', 'ブラウザのテキストサイズ変更機能（ズーム機能ではない）をもちいて、テキストサイズを拡大しても、テキストコンテナのサイズが調整され、テキストが切り取られたり、隠れたりしない'],
      ['G206', '1行のテキストを読むために横スクロールが不要になるように切り替えられるオプションが提供されている'],
      ['-', '対象は、利用や意味の理解のために2次元レイアウトを必須とするコンテンツ（画像、動画、データテーブルなど）である']
    ],

    // 1.4.11
    '1.4.11-A' : [
      ['-', 'フォームやリンクなどのユーザインタフェースコンポーネントそのもの及び状態（state）を識別するために3:1のコントラスト比が確保されている'],
      ['G195', 'マウス・キーボードの両方で使うことができる、視認性に優れたフォーカスインジケータが提供されている'],
      ['G174', '十分なコントラストのある代替版が用意され、代替版へのアクセスにあたってバリアがない', true],
      ['-', '対象は非アクティブである'],
    ],
    '1.4.11-B' : [
      ['G207', 'アイコン等の画像で、図と地において少なくとも3:1のコントラスト比が確保されており、視覚的に識別できる'],
      ['G209', 'グラフ等において、隣り合う色か、隣り合う色を区切る線の、コントラスト比が3:1以上である'],
      ['-', 'グラフィック特有の提示が、コントラスト比の要件を満たしていないが、情報を伝えるうえで必要不可欠である（ロゴ、国旗、感覚的表現等）']
    ],

    // 1.4.12
    '1.4.12' : [
      ['C36/C35', 'ズームレベルを100％に設定し、テキストの間隔（テキストのサイズではない）を調整できるブックマークレットやブラウザの拡張機能を使っても、文字が欠けたり、他のコンテンツに隠れることがない（行間: フォントサイズの1.5倍、段落送り: フォントサイズの2倍、文字間隔: フォントサイズの0.12倍、英語の場合、単語間隔: 0.16倍）']
    ],

    // 1.4.13
    '1.4.13' : [
      ['-', 'ホバーで表示されるコンテンツがページの元のコンテンツを確認する又は操作することを妨げないように、ESCキーなどで簡単に非表示にできる'],
      ['SCR39', 'ホバーで表示されるコンテンツ自体もホバーを受け付けるので、マウスポインタそのものに隠れて読めない部分がないように、マウスポインタをずらして確認できる'],
      ['-', 'ホバーで表示されるコンテンツは、利用者の意図以外で非表示にならない。あるいは状況に依存して非表示になる（「使用中」表示など）'],
      ['-', 'ホバーで表示されるコンテンツはUAによるものである（title属性）'],
      ['-', 'ホバーで表示されるコンテンツは、追加で表示されるものでなく、ホバーを受け取ることで表示されるそのものである（「メインにスキップ」のリンク）']
    ],

    // 2.4.5
    '2.4.5' : [
      ['G125', 'リンク（文中の通常のリンクやグローバルナビゲーション）を提供している'],
      ['G63', 'サイトの全ての区分にリンクをし、一切のリンク切れのないサイトマップがある'],
      ['G161', 'サイト内検索がある'],
      ['G126', '他のすべてのページへのリンクが提供されている'],
      ['G185', 'トップページにはすべてのページへのリンクが提供されている']
    ],

    // 2.4.6
    // 2.4.6はG167を含めておらず、隣接したボタンでフォームの目的がわかる場合でも、現状では、適用なしとする
    // ただし入力を開始した時に見えなくなるplaceholderによるラベルの提供は不適合/適用なし？ どちら？
    '2.4.6' : [
      ['G130', '提供されている見出しは、コンテンツの内容を的確に表している'],
      ['G131', '提供されているラベルは、フォーム要素の目的を的確に表している（COB-CHA解釈: 入力開始後、placeholderが不可視になる場合は不適合とする）']
    ],

    // 2.4.7
    '2.4.7' : [
      ['G149/G165/F55/F78', '標準的なリンクやフォームコントロールを使っており、フォーカスがUAによって強調されている'],
      ['C15/G195/SCR31', 'CSSやJavaScriptを使って、見やすいフォーカスを提供している']
    ],

    // 2.4.11
    '2.4.11' : [
      ['C43', 'キーボードフォーカスを受け取る要素は、デフォルトで隠されていても、キーボードフォーカスを受け取ったときに、CSSのscroll-paddingによって、要素の一部を表示している'],
      ['F110', 'スティッキーヘッダ、スティッキーフッタあるいはこれらに準ずる要素によってキーボードフォーカスが完全に見えなくなることはない']
    ],

    // 2.5.7
    '2.5.7' : [
      ['G219/F108', 'ドラッグ動作によってトリガーされる機能は、ドラッグする必要のない単一ポインタの操作によって実施できる（キーボード操作では適合しない）']
    ],

    // 2.5.8
    '2.5.8' : [
      ['C42', '操作対象の各ターゲットはmin-height、min-width等の設定によってターゲットの周りのスペースが少なくとも縦横ともに44ピクセル確保されている'],
      ['-', '操作対象の各ターゲットのサイズは、2.5.8における例外を除いて、少なくとも縦横ともに24CSSピクセル確保されている'],
      ['-', '2.5.8における例外（間隔/同等/インライン/UA制御/必須）である']
    ],

    // 3.1.2
    '3.1.2' : [
      ['H58/PDF19', '外国語が書かれている部分はlang属性（PDFの場合はLangエントリ）によって使用言語を明示している']
    ],

    // 3.2.3
    '3.2.3' : [
      ['G61', 'ウェブページ一式で繰り返されるコンポーネント内の項目の順序は一貫している']
    ],

    // 3.2.4
    '3.2.4' : [
      ['G197/F31', '同じ機能を持つリンクは、一貫したラベルを持っている（異なった機能を持つリンクに同一の画像が使われていても、altは機能を適切に表している。次のページにいく矢印画像は次のページ数のaltを持っている。ロゴマークおよびそのaltはサイトのトップページへのリンクである）']
    ],

    // 3.3.3
    '3.3.3-A' : [
      ['G83/PDF5', '必須項目を空欄で送信すると、未入力の項目を特定できる説明文が表示される'],
      ['ARIA2', 'UAに対する正しいrequiredステートを用いている（aria-required）'],
      ['-', 'UAに対する正しいrequiredステートを用いている（required）（COB-CHA独自: required属性は達成方法集に存在しないが、アクセシビリティ サポーテッド状況は進んでいるという立場で）']
    ],

    '3.3.3-B' : [
      ['G85/PDF22', '無効なデータを送信すると、エラーの修正方法が提供される。提供のされ方は、送信後のページ上部での提示や送信前のblur＋alert()など様々な方法があって良い'],
      ['G177', '無効なデータを送信すると、エラーの修正方法がエラーのあるフォームフィールドの付近で提供される'],
      ['ARIA18/-', '表示されるエラーメッセージはモーダルダイアログで提供されており、エラーの修正方法が提供されている'],
      ['SCR18', '無効なデータを入力すると、エラーの修正方法がJavaScriptのalert()によって提供される'],
      ['SCR32', '無効なデータを入力すると、エラーの修正方法が表示され、フォーカスがエラーメッセージに移動する。エラーを修正するとエラーメッセージは消える']
    ],

    // 3.3.4
    '3.3.4-A' : [
      ['G164', '購入又は提出のキャンセルの方法（期間と手続き）がウェブページに掲載されている'],
      ['G98', '最終的な送信の前に、入力したデータの一覧が提供され、送信内容を修正する方法が提供されている'],
      ['G155', '最終的な送信ボタンの付近に利用者の確認を示すチェックボックスが提供され、チェックされていないと送信ができなくなっている']
    ],

    '3.3.4-B' : [
      ['G99', 'コンテンツを削除した後、復元もできることを確認する'],
      ['G168', '行為を確定する送信ボタンのあと、ダイアログ等で行為が不可逆であることを注意し、確認を促している'],
      ['G155', '最終的な送信ボタンの付近に利用者の確認を示すチェックボックスが提供され、チェックされていないと送信ができなくなっている']
    ],

    '3.3.4-C' : [
      ['G98', '試験結果の送信の前に、入力内容の一覧が提供され、送信内容を修正する方法が提供されている'],
      ['G168', '試験結果の送信ボタンのあと、ダイアログ等で行為が不可逆であることを注意し、確認を促している']
    ],

    // 3.3.8
    '3.3.8' : [
      ['G218', '電子メールにリンクが送信され、そのリンクによって認証ができる。その過程に認識テストが存在しない'],
      ['H100', 'ログインに必要な情報はメールアドレスとパスワードのみであり、入力欄はアクセス可能な名前（COB-CHA注:おそらくtype属性）を持っており、ペーストを阻害していない'],
      ['F109', 'パスワードまたはコードは最初に作成されたものと同じ形式で入力可能である（分割しての入力等を求めていない）'],
      ['-', '3.3.8の趣旨から認証には認知機能テストを一切求めていないか、例外（代替/機構/物体認識/個人的なコンテンツ）である'],
      ['-', '3.3.8の趣旨から、パスワードマネージャ等のサポートやコピーアンドペーストで認証できる']
    ],

    // 4.1.3
    '4.1.3-A' : [
      ['ARIA22/G199', 'ステータスメッセージを提示するためにrole=statusを使用し、データが正常に送信されたときに、フィードバックを提供する']
    ],

    '4.1.3-B' : [
      ['ARIA19/G83/G84/G85/G177/G194', 'role=alert 又はライブリージョン (Live Regions) を使用して、ステータスメッセージが提案、又はエラーの存在に関する警告を伝えている']
    ],

    '4.1.3-C' : [
      ['ARIA23/ARIA22', 'role=log, role=statusを用いている']
    ],

    // AAA
    // 1.2.6
    '1.2.6' : [
      ['G54', '手話通訳がある']
    ],

    // 1.2.7
    '1.2.7' : [
      ['G8', '拡張音声解説がある']
    ],

    // 1.2.8
    '1.2.8-A' : [
      ['G69/G58', '動画コンテンツの付近またはリンクされたページにおいて、動画コンテンツを理解できるテキストによる代替が提供されている']
    ],

    '1.2.8-B' : [
      ['G159', 'コンテンツを理解するのに十分な書き起こしテキストが提供されている']
    ],

    // 1.2.9
    '1.2.9' : [
      ['G150/G151', 'ライブの文字起こしが提供されている（台本など）'],
      ['G157', 'ライブの音声コンテンツのテキストが、30秒未満の遅れで読むことができる']
    ],

    // 1.4.6
    '1.4.6' : [
      ['G17/G18', 'テキストおよび文字画像との背景の間に、すくなくとも7:1のコントラスト比（大きな文字の場合4.5:1。大きな文字は日本語29.3px、英語等24px。太字の場合：日本語24px、英語等18.5px）がある'],
      ['G148', '背景色及び文字色を指定していない'],
      ['G174', 'ハイコントラストモードを提供している'],
      ['-', 'コントラスト比が十分でないテキストは、disabledであったり装飾的である。あるいはロゴである']
    ],

    // 1.4.7
    '1.4.7' : [
      ['G56', '発話音声に対する背景音は十分に音量が低い（すくなくとも20dB）']
    ],

    // 1.4.8
    '1.4.8' : [
      ['C23/C25/G156/G148/G175', 'テキストブロックの前景色、背景色を利用者が選択できる'],
      ['G204/G146', '画面幅を狭めても、テキストブロックに横スクロールは発生しない'],
      ['C20', '画面幅を広げても、テキストブロックの幅は80字（日本語は40字）以下を維持している'],
      ['C19/G172/G169', 'テキストは均等割り付け (左右両端揃え) されていない'],
      ['G188/C21', '行間は1.5文字分、段落間は行間の1.5倍ある']
    ],

    // 1.4.9
    '1.4.9' : [
      ['C22/G140', 'テキストの視覚的提示はCSSで制御されている'],
      ['PDF7', 'PDFとして画像化された文字はOCRでテキストデータに変換可能である（全て画像のPDFはそもそも作成しないことが望ましい）', true],
      ['-', '文字画像はロゴあるいは、書体見本や手紙の写し、署名など画像であることが必然的である']
    ],

    // 2.1.3
    '2.1.3' : [
      ['G202', 'すべての機能に対してキーボード制御を確保している。操作にはキーストロークの特定のタイミングを必要としない'],
      ['H91/PDF3/PDF11/PDF23', '標準的な機能を用いてフォームコントロールやリンクを実装してキーボード操作を保証している'],
      ['G90/SCR20/SCR35/SCR2', 'JavaScriptによる実装において、キーボードがトリガーとなるイベントハンドラを提供している']
    ],

    // 2.2.3
    '2.2.3' : [
      ['G5', '制限時間のある操作は存在しない']
    ],

    // 2.2.4
    '2.2.4' : [
      ['G75', '利用者は緊急ではない割り込みを延期するための設定を利用できる'],
      ['G76', '自動的な更新は行われず、新しいコンテンツに更新するための機能が提供されている'],
      ['SCR14', '重要でない割り込みは設定により停止できる']
    ],

    // 2.2.5
    '2.2.5' : [
      ['G105', '入力中に時間切れなどでログアウトしても、送信すると、ログインをすることができ、データも損失なく送信される（サーバには再送信用の一時データが短時間（1日程度）保存される）'],
      ['G181', '期待される動作としてはG105と同じだが、セキュリティ上の理由から、サーバに作業途中のデータが残らないことを確認できる']
    ],

    // 2.2.6
    '2.2.6' : [
      ['-', 'セッションタイムアウトは、無操作状態が少なくとも20時間続く場合に発生するよう設定されている'],
      ['-', '利用者が入力したデータを20時間以上保持している'],
      ['-', 'プロセスの開始時に、利用者の無操作時間についての警告が提示される'],
      ['-', '利用者が明示的に入力中の画面を終了した際に、データが失われる']
    ],

    // 2.3.2
    '2.3.2' : [
      ['G19', 'どの1秒間においても、3回よりも多く閃光を放つコンポーネントがない']
    ],

    // 2.3.3
    '2.3.3' : [
      ['-', 'インタラクションによって引き起こされる必要不可欠でないアニメーションを停止できる'],
      ['C39', 'prefers-reduced-motion CSSメディアクエリによって、システムの「視差効果を減らす」設定が有効になる']
    ],

    // 2.4.8
    '2.4.8' : [
      ['G65', 'パンくずリストを提供する'],
      ['G63', 'サイトの全ての区分にリンクをし、一切のリンク切れのないサイトマップがある'],
      ['G128', 'グローバルナビゲーションは、現在のページを強調表示している。この強調は視覚的提示のみではない'],
      ['G127/H59', 'ウェブページのタイトルは現在のページが属する親にあたるウェブページ一式との関係が理解できるようになっており、メタデータにおいても関係性を確認できる']
    ],

    // 2.4.9
    '2.4.9' : [
      ['G91/H30/H24/PDF11/PDF13', 'リンクテキストは、リンクの目的を説明している。imgやareaはaltがリンクの目的を説明している'],
      ['ARIA8', 'aria-labelでリンクの目的を説明している'],
      ['-', 'リンクの目的は、ほとんどの利用者にとって曖昧である']
    ],

    // 2.4.10
    '2.4.10' : [
      ['G141/H69', '文章は的確に見出しで区切られており、見出しタグで適切なマークが行われている']
    ],

    // 2.4.12
    '2.4.12' : [
      ['C43', 'キーボードフォーカスを受け取る要素は、デフォルトで隠されていても、キーボードフォーカスを受け取ったときに、CSSのscroll-paddingによって、要素の全部を表示している'],
      ['F110', 'スティッキーヘッダ、スティッキーフッタあるいはこれらに準ずる要素によってキーボードフォーカスの一部であっても隠されない']
    ],

    // 2.4.13
    '2.4.13' : [
      ['G195', 'マウス・キーボードの両方で使うことができる、視認性に優れたフォーカスインジケータが提供されている'],
      ['C40', 'フォーカスインジケータは9:1のコントラスト比を保ち、少なくとも2CSSピクセルの厚さを持ち、単色の背景色の上にある'],
      ['C41', 'フォーカスインジケータは十分なコントラスト比（4.5:1）を保っている（COB-CHA注: C40との違いを確認中）']
    ],

    // 2.5.5
    '2.5.5' : [
      ['-', 'タッチターゲットが少なくとも 44 × 44 CSS ピクセルである'],
      ['-', '画面拡大とは別に、ターゲットのサイズを変更するメカニズムがある'],
      ['-', 'タッチターゲットが唯一の方法ではない、インライン（文中、又はテキストブロック内に存在する）である、UAのデフォルトである、必要不可欠である']
    ],

    // 2.5.6
    '2.5.6' : [
      ['-', '（予定）JavaScript において、高レベルの、特定の入力方法に依存しないイベントハンドラ (focus、blur、click) のみを使用する'],
      ['-', '（予定）JavaScript において、キーボードもしくはキーボードのような入力、及びポインタ入力のためのイベントハンドラを、同時に登録する']
    ],

    // 3.1.3
    '3.1.3' : [
      ['G101/G55/H40/H60/G62', '用語の初出時に用語集へのリンクが提供されている'],
      ['G101/G112/H54', '用語の初出時に、用語の付近で用語の説明を行なっている。用語そのものはdfn要素でマークアップしているとなお良い']
    ],

    // 3.1.4
    '3.1.4' : [
      ['G102/G97/H28', '略語の初出時、その直前又は直後に元の語を提供している。略語はabbrでマークアップしているとなお良い'],
      ['G102/G55/H28', '略語の初出時、定義にリンクしている。略語はabbrでマークアップしているとなお良い']
    ],

    // 3.1.5
    '3.1.5' : [
      ['G86', '前期中等教育レベルの読解力をもつ人が理解できるテキストの要約が提供されている'],
      ['G103', '視覚的なイラスト、写真及びシンボルが提供されている'],
      ['G79', 'テキストの音声バージョンを提供する'],
      ['G160', 'テキストの手話バージョンを提供する']
    ],

    // 3.1.6
    '3.1.6' : [
      ['G120', '単語の直後に発音 (読み) をひらがななどで提供する'],
      ['G121', '単語は発音情報のある辞書や音声ファイルへのリンクになっている'],
      ['H62', '発音はruby要素で提供されている']
    ],

    // 3.2.5
    '3.2.5-A' : [
      ['G76', '自動更新は要求により制御できるようになっている']
    ],

    '3.2.5-B' : [
      ['SVR1', 'サーバサイドのリダイレクト機能を使っている'],
      ['G110/H76', 'meta要素のrefreshを用いており、リダイレクトは0秒で行われる']
    ],

    '3.2.5-C' : [
      ['H83/SCR24', '新しいタブもしくはウィンドウを開くことをリンクテキスト内で理解できるようにしている']
    ],

    '3.2.5-D' : [
      ['SCR19', 'selectで項目を選択しても、コンテキストの変化は引き起こされない']
    ],

    // 3.3.5
    '3.3.5-A' : [
      ['G71', '入力欄の付近にヘルプへのリンクがある'],
      ['G193', 'フォームのある画面に、フォームの理解を助けるアシスタント機能がある'],
      ['G194', '綴りの間違った単語を入力すると、スペルチェック機能によって、修正候補が表示される'],
      ['G184', '必須項目に関する説明がフォームの先頭に存在している']
    ],

    '3.3.5-B' : [
      ['G89', '期待される書式情報の説明が存在している'],
      ['G184', '必須項目に関する説明がフォームの先頭に存在している']
    ],

    // 3.3.6
    '3.3.6-A' : [
      ['G164', '購入又は提出のキャンセルの方法（期間と手続き）がウェブページに掲載されている'],
      ['G98', '最終的な送信の前に、入力したデータの一覧が提供され、送信内容を修正する方法が提供されている'],
      ['G155', '最終的な送信ボタンの付近に利用者の確認を示すチェックボックスが提供され、チェックされていないと送信ができなくなっている']
    ],

    '3.3.6-B' : [
      ['G99', 'コンテンツを削除した後、復元もできることを確認する'],
      ['G168', '行為を確定する送信ボタンのあと、ダイアログ等で行為が不可逆であることを注意し、確認を促している'],
      ['G155', '最終的な送信ボタンの付近に利用者の確認を示すチェックボックスが提供され、チェックされていないと送信ができなくなっている']
    ],

    // 3.3.9
    '3.3.9' : [
      ['G218', '電子メールにリンクが送信され、そのリンクによって認証ができる。その過程に認識テストが存在しない'],
      ['H100', 'ログインに必要な情報はメールアドレスとパスワードのみであり、入力欄はアクセス可能な名前（COB-CHA注:おそらくtype属性）を持っており、ペーストを阻害していない'],
      ['F109', 'パスワードまたはコードは最初に作成されたものと同じ形式で入力可能である（分割しての入力等を求めていない）'],
      ['-', '3.3.9の趣旨から認証には認知機能テストを一切求めていないか、例外（代替/機構）である'],
      ['-', '3.3.9の趣旨から、パスワードマネージャ等のサポートやコピーアンドペーストで認証できる']
    ]

  };
}
