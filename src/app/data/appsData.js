const appsData = [
  {
    id: 1,
    name: '44期 のぞみ（ゴリラ）',
    appName: 'トレゴリ',
    category: 'ルーキー',
    url: 'https://tragori.com',
    appImg: '/app/tragori.png',
    description: '「運動をした！」という事を登録する事で報酬としてバナナを獲得する事が出来、獲得した『バナナ』を使用する事でランダムなゴリラのイラストをGETする事が出来るサービスです。また、運動した事を登録する際に備考欄に運動した内容を記入する事で、AIゴリラ『アイゴリ君』が褒め言葉を言ってくれる機能もあります。',
    commnet: '工夫した点は、ユーザビリティ向上のための機能改善を行なった点です。『トレゴリ』では、OpenAI APIを使用した機能がメインとなっていますので、その箇所についてユーザーがストレスフリーにサービスを使用出来るように機能改善に注力しました。具体例で言うと、APIからのレスポンスを受け取り画面に表示させるまでの間、モーダルウィンドウを表示させるようにしました。こうする事で、システムがユーザーのリクエストを受け取り、処理中であることを明示的に伝える事が出来るようになり、ユーザーがレスポンスを受け取るまでの待ち時間の間の不安の軽減・操作の防止に繋げる事が出来ました。また、OpenAI APIへの通信において、エラーハンドリングをカスタマイズしHTTPステータスコードに応じたフラッシュメッセージを表示する事で、ユーザーがWebアプリ使用中に発生したエラーに対してどのように対処すれば良いのかを分かりやすくしています。',
    githubUrl: 'https://github.com/SatoNozomi44/Tra_gori'
  },
  {
    id: 2,
    name: '44期 あーちゃん',
    appName: 'steteco',
    category: 'ルーキー',
    url: 'https://steteco-dansyari.com',
    appImg: '/app/steteco.png',
    description: '今回のアプリは、不用品の整理をしている際に「もったいないから」「フリマアプリで売れるかもしれないから」と考えてしまい、捨てる決断ができない優柔不断な方向けの、断捨離を後押しするサービスです。',
    commnet: 'メイン機能であるLINE通知機能です。工夫した点は3点です。\n1つ目は、メッセージを2回送ることです。10時とリマインドとして17時に送るように設定しました。\n2つ目は、毎週土曜日に通知日を過ぎても断捨離できていないアイテムのリマインドを送ることです。通知日を過ぎてもアイテムの現状を把握できる機能は必要だと思いました。また、1度目に捨てることができなくても、リマインドの曜日を固定することで2度目に捨てる時の計画が立てやすいと思いました。\n3つ目は、メッセージのフォーマットです。断捨離するアイテムが複数ある場合、アイテムごとに通知を送るとユーザーが通知を煩わしく思ってしまう可能性があります。そこで、1回の通知で断捨離アイテムがわかるようにフォーマットを変更しました。',
    githubUrl: 'https://github.com/ayaikg/sort_unwanted_items'
  },
  {
    id: 3,
    name: '44期 清水一平',
    appName: 'BUZZ BASE（バズベース）',
    category: 'ルーキー',
    url: 'https://buzzbase.jp/',
    appImg: '/app/buzz-ogp.png',
    description: '野球をしている人に向けて、試合や個人の成績を記録して、友達とランキング形式で成績を共有・比較することができるサービスです。',
    commnet: '・競合サービスがネイティブアプリのものが多いと判断したため、SPAを採用してユーザーに高速で快適な操作感を提供しました。\n・UIはモバイルファーストを採用し、ターゲットとなる10代後半〜20代後半の男性ユーザーが使い慣れているであろうSNSを参考にしました。そうすることで、UXの向上を図りました。\n・ログイン・新規登録の入力フォームにリアルタイムバリデーションを実装し、UXの向上を図りました。\n・成績を記録する画面は、入力数が多いため1画面ごとに「試合・打撃・投手」成績を入力できるようにしました。\n・グループ機能は、招待状態を「招待中・参加・拒否」で保持できるように実装しました。',
    githubUrl: 'https://github.com/ippei-shimizu/buzzbase'
  },
  {
    id: 4,
    name: '45期B ガク',
    appName: 'Gallery.ai',
    category: 'ルーキー',
    url: 'https://ai-coten-nu.vercel.app/',
    appImg: '/app/GOGP.png',
    description: 'OpenAI API × Three.jsでオリジナル個展を作成できます🎨Xでの個展シェア機能もあります！',
    commnet: 'UIをThree.jsを使って3Dにしました！OpenAI APIによる画像生成にバリエーションを持たせました。',
    githubUrl: 'https://github.com/gadname/AI_coten'
  },
  {
    id: 5,
    name: '43期 YANYAN',
    appName: '懐かしいにもほどがある!',
    category: 'ルーキー',
    url: 'https://natsuhodo-app.onrender.com/',
    appImg: '/app/natsuhodo.png',
    description: '某テレビドラマから発想を得た、「懐かしい!」で繋がる、ノスタルジックなSNSです。「忘れかけていたけど、確かに昔そういうのあったよね!?」こんな感じで、他の人と打ち解けた経験がある人は多いのではないでしょうか?流行語、お笑い、映画、アニメ、ゲーム、食べ物、おもちゃ、スポーツ、音楽、ファッション、イベント、テレビ番組、CM・・・などなど、このアプリは、そんな「懐かしい!」を文字制限(約30文字以内を予定)のある大喜利形式で共有して、色んな人が打ち解けるような場を作りたいと思っています。昭和、平成、令和の時代を問わず、あなたの「懐かしい!」を通して、交流を深めませんか？',
    commnet: '小さなサービスでもいいから、とにかく周りの人に使ってもらいたい!」と考え応募しました。機能はそんなに目新しいものはありません。。。アイディアで勝負してます笑',
    githubUrl: 'https://github.com/YAN-cyber-ux/natsuhodo_app'
  },
  {
    id: 6,
    name: '44期 やす',
    appName: 'DeskTech-Connect',
    category: 'ルーキー',
    url: 'https://desktech-connect.com/',
    appImg: '/app/thumbnail.png',
    description: '自身のデスク環境を投稿し共有するサービスです。 楽天市場APIを使用しているので、自身のデスクに使用しているアイテムを検索して投稿に紐づけることが可能です！ 他人のデスク環境を気軽に知りたい方、もっとデスク環境を整えたい方は本サービスを通じて、まだ知らないガジェットやアイテム達に巡り会えるチャンスです！自慢のデスクをみんなに見てもらいたい方もぜひ本サービスを使ってみてください！',
    commnet: '自身のデスクの投稿時に、デスク画像のアップロードからアイテムの検索までをページ遷移せずに１ページで完結するように実装したところが工夫ポイントなります。そうした結果、ユーザーのスムーズな投稿を実現することができました！',
    githubUrl: 'https://github.com/ya-to18/DeskTech-Connect'
  },
  {
    id: 7,
    name: '50期B MaTTa',
    appName: 'からあげアゲイン',
    category: 'Newcomer',
    url: 'https://karaage-again.vercel.app/',
    appImg: '/app/karaageagain_thumbnail.png',
    description: 'からあげを作ったり、食べたことを記録することができます。3度のメシよりから揚げが好きな人のためのアプリです。',
    commnet: 'からあげを作る際の再現性を高めようと機械学習用のデータを趣味で取っているのですが、そのモデリングに必要そうな従属変数（油温度、漬け時間などからあげ特有の変数）をアプリで記録できるようにしました。それによってUIが煩わしくならないようTailwindを使った配慮もしています。',
    githubUrl: 'https://github.com/MaTTalv001/Karaage_Again'
  },
  {
    id: 8,
    name: '49期Bとも 50期Aえりちゃん 50期Aさくちゃん 50期Aのぐちゃん',
    appName: 'To.gather',
    category: 'チーム開発',
    url: 'https://togatherapp.net/',
    appImg: '/app/togather.jpg',
    description: 'グループを作って人を集めてチャットや予定調整ができるアプリです。',
    commnet: 'Hotwiireやモーダルで画面の遷移を少なくして少しでも快適に使えるようにしました。 Xで拡散してリンクからグループへの参加申請を送ることができます。RUNTEQに入学して４ヶ月目だった時の初学者４人が頑張ってアプリ開発をしました！ ３人のメンバーは働きながらで大変だったと思いますが、最後まで頑張ってくれました！ ',
    githubUrl: 'https://github.com/tomoprogra/teamplan'
  },
  {
    id: 9,
    name: '53期B すみ',
    appName: 'WishWay',
    category: 'Newcomer',
    url: 'https://wishway.onrender.com/',
    appImg: '/app/WishWay.png',
    description: '死ぬまでにやりたいことリストの作成と共有ができるアプリです。',
    commnet: '"カリキュラムで学んだ Hotwire（Turbo Stream） を使用して、できるだけ画面遷移を行わずに操作できるように実装しました。（「やりたいこと」の作成、編集、削除、「やりたいことリスト」の公開非公開設定、達成項目へのチェックなど）開発時間が限られていたので、フロントエンドは学習コストがそれほど高くないであろう Tailwind と DaisyUI をフル活用して統一感があり、違和感の無いデザインを心がけました。「やりたいこと」の見た目を、作成ユーザー（自分 or その他）、そして達成状況（達成 or 未達成）の計4種類のパターンを用意して、一目でわかるようにしました。"',
    githubUrl: 'https://github.com/sumisumi2000/WishWay'
  },
  {
    id: 10,
    name: '44期 さとはる',
    appName: 'えぞとらべる',
    category: '現役エンジニア',
    url: 'https://ezo-travel.com/',
    appImg: '/app/ezo.png',
    description: '北海道をもっと身近に感じてもらうためのアプリです。',
    commnet: 'この記事を参照ください🙇\nhttps://qiita.com/lemonade_37/items/abc4c3b49f73c540faa2',
    githubUrl: 'https://github.com/satou-haruka-37/hokkaido_travel'
  },
  {
    id: 11,
    name: '44期 さとはる',
    appName: 'くだものの森',
    category: '現役エンジニア',
    url: 'https://fruit-forest.onrender.com',
    appImg: '/app/fruits.png',
    description: 'フルーツをキャッチするゲームです。',
    commnet: '技術に触れるためとはいえせっかく作ったので出してみました。\nVimmerに配慮した点。',
    githubUrl: 'https://github.com/satou-haruka-37/fruit_forest'
  },
  {
    id: 12,
    name: '50期A ゆうた（ボド）、50期B うぅたん、50期B MaTTa、51B YY、52期A とぴ',
    appName: 'PythagoraMaker',
    category: 'チーム開発',
    url: 'https://pythagora-maker.vercel.app/',
    appImg: '/app/pythagoramaker.png',
    description: '誰よりも早くスイッチを押せ！図形を使って考えるパズルゲーム！',
    commnet: '全員/Matter.jsを使用したゲームアプリ作成\nとぴ/「UI周りやホームページ・About usの仕込み\nYY/｢インフラ・ステージ編集画面｣\nMaTTa/｢ゲームデザイン｣\nうぅたん/｢DBからユーザー名・ステージタイトルを取得し、ユーザーが作成したステージに表示させる実装｣\nボド/｢構想から作り上げた画面遷移図｣',
    githubUrl: 'https://github.com/raito2180/pythagora_maker'
  },
  {
    id: 13,
    name: '43期 michan',
    appName: 'おしゃべりインコ',
    category: 'ルーキー',
    url: 'https://aibudgie.onrender.com/',
    appImg: '/app/inco.png',
    description: 'バーチャルなインコを飼えるアプリです。',
    commnet: 'Turbo Streamでの切り替えに力を入れました。',
    githubUrl: 'https://github.com/neko967/AIbudgie'
  },
  {
    id: 14,
    name: '48期A たくや',
    appName: 'A.Icon(ええアイコン)',
    category: 'ルーキー',
    url: 'https://www.aicon-app.com/',
    appImg: '/app/a.icon.png',
    description: 'AI画像生成でオリジナルのアイコンができます。',
    commnet: '・お試しでサクッとアイコンを作れる\n・異なる3パターンのテイストから選べる(多くてもどれにすればいいか悩むため3つにした)\n・センスないながらレスポンシブで違和感のないデザインを心がけた',
    githubUrl: 'https://github.com/takuya4520/aicon-app'
  },
  {
    id: 15,
    name: '37期 kuma',
    appName: 'Letters Tube',
    category: 'ルーキー',
    url: 'https://letters-tube.vercel.app/',
    appImg: '/app/letters_tube.png',
    description: '感謝の気持ちを込めて作りました。全ての人に感謝の気持ちを伝えたいです 。今まで本当にありがとうございました🙇‍♀️ ',
    commnet: '入学以降多くの方のアプリを470個以上使わせていただきました🙇‍♀️今回制作するにあたってXを全部見返してRUNTEQ祭やバトランの動画を何回も見返してミニアプリweekなどXで探してQiita記事の個人開発の記事を片っ端から探してエンジニア転職チャンネルを500本以上見て情報収集し1000件以上のデータ入力を頑張りました。',
    githubUrl: 'https://github.com/ayakuma309/tube-letters'
  },
  {
    id: 16,
    name: '44期 だい (小林 大悟)',
    appName: '...次、どこ行く？',
    category: '現役エンジニア',
    url: 'https://your-next-destination.com/',
    appImg: '/app/your_next.png',
    description: 'ドライブ中に次の行き先決めに困った際、その場の気分に近い行き先を短時間で決めることができるサービス。',
    commnet: 'ドライブ中の短時間で行き先の決定に必要なだけの情報を得られるよう、結果表示画面での表示の仕方に拘りました。サクサクと表示を切り替えられることに加えて、表示する場所と現在地との距離感や方角をマップ上で表示するなど、直感的に操作し決定できる作りとなるよう努めました。画面上の動作に関しては、React等のキャッチアップをする余裕がなかったため、viewのscriptタグにJSをそのまま書くという力技でなんとか形にしています。',
    githubUrl: 'https://github.com/Dai-44/go-next'
  },
  {
    id: 17,
    name: '47期B あきもと',
    appName: 'SAKE ZUKI',
    category: 'ルーキー',
    url: 'https://sake-suki-ebb8b0a18752.herokuapp.com/',
    appImg: '/app/sakezuki.png',
    description: 'ユーザーがお酒を登録するとお酒が抜けるまでの時間がわかります！また、翌日二日酔いになった時に二日酔いボタンを押すとどれぐらいのアルコール量で二日酔いになったか把握できるようになります！キャラクターにタップするとさまざまなセリフを言います！お酒を飲む量が増えていくとキャラクターの見た目が変わっていきます！',
    commnet: 'エンジニアとしてなどは微妙なところではありますがアイデンティティを求め、自分で動物の絵を描くなど他とは違うものをしてみました。',
    githubUrl: 'https://github.com/19970110a/new-apl'
  },
  {
    id: 18,
    name: '50期B うぅたん',
    appName: '自分、なに飲むん？？',
    category: 'Newcomer',
    url: 'https://roulettev2.vercel.app/',
    appImg: '/app/sake_roulette.png',
    description: '飲むお酒に迷った時にルーレットで決定できるアプリです。',
    commnet: 'ルーレットが止まった際、矢印に止まったアイテムを判定してモーダルに表示させる部分の実装を工夫しました。また、スマホで操作した際に使いやすいようデザインの調整を頑張りました。',
    githubUrl: 'https://github.com/uutan58/roulettev2'
  },
  {
    id: 19,
    name: '34期 れなっち',
    appName: 'pad_character（Gem）',
    category: '現役エンジニア',
    url: 'https://rubygems.org/gems/pad_character',
    appImg: '/app/mofu.png',
    description: '文字列を入力するとにくきゅう文字に変換できるGem',
    commnet: 'Ruby忘れているのにロジック頑張ってブラッシュアップしました・・・',
    githubUrl: 'https://github.com/kashiwagi-rena/pad_character'
  },
  {
    id: 20,
    name: '50期B honoka',
    appName: 'Three Lines Diary',
    category: 'Newcomer',
    url: 'https://three-lines-diary-6kjc.onrender.com',
    appImg: '/app/threelinesdiary.jpg',
    description: '三行の英語日記を作成できるアプリ',
    commnet: '基本的な部分はRails基礎で出てきたことを復習として制作しています。英文添削APIが無料で見つからなかったため、DeepL翻訳APIで日本語に訳してから再度英語に訳す方法を使って簡単な添削ができるようにしました。',
    githubUrl: 'https://github.com/maru973/three_lines_diary'
  },
  {
    id: 21,
    name: '37期 MIDORI',
    appName: 'Mt. Stupid',
    category: '現役エンジニア',
    url: 'https://kanzen-ni-rikaishita.pages.dev/top',
    appImg: '/app/mtstupit.png',
    description: 'Mt. Stupidを登って「完全に理解した」を目指す、0→1キャッチアップの共有・実践サイト。',
    commnet: 'Bun🥟 & Hono🔥 & HTMX🙅‍♀️ & Cloudflare Pages🌥️ & Vite⚡️ & D1🗄️ & Tailwind CSS🎨を使いました。新しい技術にしたのはGPTに頼りきりにならず、ドキュメントやソースコードの検索をしてみることを自分の中の課題にしました。最終的にドキュメントをいい感じにまとめてくれるClaude3にいつの間にか課金していましたが笑、ドキュメントへの苦手意識がなくなったり、初めてDiscord Communityで英語で質問してみたり、自分のいい経験になりました。',
    githubUrl: 'https://github.com/MIDO-ruby7/kanzen-ni-rikaishita'
  },
  {
    id: 22,
    name: '41期 けんと',
    appName: '16type Favorite Database',
    category: 'ルーキー',
    url: 'https://favorite-database-16type-f-5f78fa224595.herokuapp.com/',
    appImg: '/app/16types.png',
    description: 'MBTIタイプ診断をしたことのあるユーザーが、メディア(音楽・アニメetc.)ごとに、好きな作品を投稿することにより、MBTIタイプごとの好みをデータベース化するWedアプリケーションです！（現在、音楽アーティストのみ）',
    commnet: 'ユーザー体験がより良くなるよう、フロントエンドをReactで実装したことに始め、ユーザーがより直感的に操作できるよう工夫しました！',
    githubUrl: 'https://github.com/kentoiinuma/16type-Favorite-Database'
  },
  {
    id: 23,
    name: '48期B kenty',
    appName: 'STAY with MU',
    category: 'ルーキー',
    url: 'https://www.stay-with-mu.com/',
    appImg: '/app/STAYwithMU.png',
    description: '"音楽との思い出や推しポイントを書いていくことで曲を「育てていく」サービスです。文字数に応じて曲（MU）のレベルが上がります。曲への想いをたくさん書くことで、誰にも負けないMUを育成しましょう！',
    commnet: '提出時点では未実装ですが、レベルアップロジックに力を入れるつもりです。オリジナルの経験値テーブルをつくり、レベルが上がるほど次のレベルに必要な文字数が増えるようにするつもりです。UIはDaisyUIを頼りすぎていますが、癖のない万人ウケする色使いを心がけました。アイデア面では、継続的に利用してもらうための工夫をしました。\n・レベル上げと競争意識によるモチベーションの提供。\n・曲への想い（メモリー）を自由なタグをつけて、追加していけることで、文脈を気にせずに思いついたタイミングで細かく記録できる。',
    githubUrl: 'https://github.com/ken55ty/stay_with_mu'
  },
  {
    id: 24,
    name: '50期B いとう',
    appName: 'BackHacker.',
    category: 'Newcomer',
    url: 'https://map-demo-frontend.vercel.app/',
    appImg: '/app/BackHack.png',
    description: '"「PC一台でバックパッカー」をコンセプトとした、バーチャル旅行好きのためのエンタメアプリです。地図を見ながら、世界中の国や都市を直感的に選んで、街並み動画で旅行気分を味わうことができます。 PC一台で、知らない土地に気軽にトリップしてみませんか？"',
    commnet: 'なるべく動きを入れるように工夫しました！',
    githubUrl: 'https://github.com/ITOmaSabai/MapDemo-frontend'
  },
  {
    id: 25,
    name: '11期 中井ふぁらお',
    appName: 'CoReview',
    category: '現役エンジニア',
    url: 'https://coreview.mochimochifarao.com/',
    appImg: '/app/coreview.jpg',
    description: 'チーム開発をしなくても、個人開発をしている人通しでお互いにレビューをし合えるアプリです。',
    commnet: 'もともと手で行っていたRUNTEQ生かどうか確認する処理をGitHubのRUNTEQオーガニゼーションに参加している人は自動でRUNTEQ生判定する処理を追加したいです',
    githubUrl: 'https://github.com/kenchasonakai/review_notification_app'
  },
  {
    id: 26,
    name: "30期 yoshino",
    appName: 'Today\'s Tech Reads',
    category: '現役エンジニア',
    url: 'https://todays-tech-reads.vercel.app/',
    appImg: '/app/todays_tech_peads.png',
    description: '今日読んだ技術記事をコメント付きで簡単登録。あとから日別に振り返ることができるアプリです。',
    commnet: 'マイページにて、記事を読んだ記録が「GitHubの草」のように表示されるので、継続のモチベーションが湧きます！',
    githubUrl: 'https://github.com/yoiyoicho/todays_tech_reads'
  },
  {
    id: 27,
    name: '48期 sami',
    appName: 'GIFT_REQUEST',
    category: 'ルーキー',
    url: 'https://gift-request.onrender.com',
    appImg: '/app/Giftrequest.png',
    description: 'プレゼントを誰かにリクエストするのって直接は言い辛いし、難しいなと思ったことありませんか？ギフトリクエストは、リクエストを入力するとAIが自動で謎解きを生成してくれ、相手に謎を解いてもらうことで欲しいものをゲーム感覚で楽しく伝えることができるプレゼント伝達アプリです。',
    commnet: '使い方がわからない、謎解きで進め方が分からない、ということがないように、感覚的に使い方がわかるようなUIを心がけました。みんなで楽しんで欲しかったので、謎を解いた後、クエストを作った後で直ぐにXでシェアできるような動線にしました。',
    githubUrl: 'https://github.com/sami-0085/gift_request'
  },
  {
    id: 28,
    name: '39期 漆黒のシルバー',
    appName: 'rubychan',
    category: '現役エンジニア',
    url: 'https://rubychan.magia.runteq.jp/',
    appImg: '/app/rubychan.png',
    description: 'メソッド名とか単語の説明を自分なりに書いてまとめるアプリです。',
    commnet: '入学1ヶ月目の自分「クイズ機能で画面遷移した場合に、前のページの値を保存しておくことです。」',
    githubUrl: 'https://github.com/yuuta1219/rubychan'
  },
  {
    id: 29,
    name: '50期B えふぐー(fたか) 50期A kzkio(かずちゃん) 50期A SawaD 52期A とぴ 50期B honoka 50期B MaTTa 50期A rayto(れいと)',
    appName: 'Runtecker',
    category: 'チーム開発',
    url: 'https://runtecker-frontend-1bc1378eedd1.herokuapp.com/login',
    appImg: '/app/runtecker.png',
    description: 'RUNTEQコミュニティの受講生や卒業生のプロフィール検索アプリです。これは、RUNTEQ公式アプリの機能追加としての提案です。皆のMattermost、GitHub、X、Qiita、noteなどのSNSのアカウント名が、誰が誰だかわからなくなってしまう問題を解決します！ニックネーム、タグ、住んでいる場所、入学期など、様々な条件で受講生や卒業生を探すことができ、皆の自己紹介やSNSへのリンクなどの情報を参照することが可能となっています。',
    commnet: '・データベース設計（ER図）をチームの意見を取り入れながら綺麗なER図を心掛けて作成しました！！\n・検索機能をGemを使わず実装しました。\n・認証機能の実装をがんばりました。また、GithubのRunteq組織メンバーを用いてRUNTEQ生の識別を行いました。 \n・ユーザー一覧では一人ひとりの情報はできるだけ少なくかつシンプルなデザインにしました。\n・Reactのライブラリを活用し、ユーザに設定できるタグがぬるぬる動くようにして操作性を向上しました。\n・7人でのチーム開発が円滑に行えるよう、GitHub Issue, GitHub Projectsを取り入れたり、Heroku＋GitHub ActionsによるDockerコンテナの自動デプロイや、DBの自動マイグレーションを導入しました！',
    githubUrl: '' // 追加
  },
  {
    id: 30,
    name: '39期 山中 隆世',
    appName: '歯ブラシLife! ~Make up environment~',
    category: 'ルーキー',
    url: 'https://www.haburashi-life.com',
    appImg: '/app/haburashi_life.png',
    description: '歯ブラシの情報共有と、歯ブラシのリサイクルを広めていくアプリです。歯ブラシの交換時期を設定して定期的に歯ブラシを取り替えつつ、歯ブラシのリサイクルで環境改善も行なっていきます。',
    commnet: 'ブラッシュアップの内容\nユーザーが使いやすくなるようにブラッシュアップを行いました。\n・送信されるLINEメッセージをFlex Messageに変更\n・歯ブラシと一緒に使うデンタルグッズの登録機能\n・歯ブラシを使ってみた感想を投稿出来る機能\n・LINE公式アカウントにリッチメニューを実装\n・歯ブラシの一覧ページでの検索機能と、検索時のオートコンプリート機能\n・ユーザー自身がこれまで使用した歯ブラシを確認できるマイページ機能\n・検索画面でブランド名やメーカー名で入力補完を行うガイド機能の追加\n・歯ブラシの削除機能を追加\n・電動歯ブラシ専用のブラシ交換メッセージが送信される機能の追加\n・掃除中の歯ブラシ、リサイクルされた歯ブラシの数をカウントし、環境改善度を表示するページの追加',
    githubUrl: 'https://github.com/TAMETOMO8/Haburashi_Life'
  },
  {
    id: 31,
    name: '47期B やまちゃん(ヒデボー)',
    appName: 'EnigmaPortals',
    category: 'ルーキー',
    url: 'https://enigmaportals.com/',
    appImg: '/app/enigma_portals.png',
    description: 'AI を使用して謎の生成ができ、自由に謎の投稿・閲覧・解答するためのサービスです。現状はテーマを決めて画像生成ができるようになっており、画像を見て答えを推理するといった形になっています。',
    commnet: '初めてOpenAI APIを使用して画像生成をやってみました。',
    githubUrl: 'https://github.com/yamadahideto/EnigmaCraft'
  },
  {
    id: 32,
    name: '校長 ひさじゅ',
    appName: '来る。きっと来る。',
    category: '現役エンジニア',
    url: 'https://runteq-fes-vol4.vercel.app/apps/32', // 追記
    phone: '010-1-650-946-1256',
    appImg: '/app/kuru.jpg',
    description: '電話をかけるとおかしな音が。電話を切って数分後あなたの電話に・・・（国際電話になるので、電話料金にお気をつけください。ちなみに僕のTwilioアカウントにもお金がかかってくるので、使いすぎるとお互いの財布が痛みます。）',
    commnet: '今回ノンフレームワークのCGIのみで作りました。また、rubyですがActiveRecordを使わずにDBアクセスもシンプルに実装しました。あとデバッグするのに毎回お金がかかるので、なるべくデバッグしないように実装しました。',
    githubUrl: '' // 追記
  },
  {
    id: 33,
    name: '50期A kzkio（かずちゃん）',
    appName: 'Clickollector',
    category: 'ルーキー',
    url: 'https://clickollector-4d5bda395d4c.herokuapp.com',
    appImg: '/app/ckickkollector.png',
    description: 'google drive APIで画像を出してクリックをしながら進めるゲームです。',
    commnet: 'reactをフロントで使ってるところです。',
    githubUrl: 'https://github.com/kzkio114/Clickollector/'
  },
  {
    id: 34,
    name: '44期 ルカ',
    appName: 'インクコレクション',
    category: '現役エンジニア',
    url: 'https://ink-collection.fly.dev/',
    appImg: '/app/inkcollection.jpg',
    description: '自分が使っている万年筆とそのインクを管理するアプリです。',
    commnet: '使っているときにテンションが上がるような可愛さと、使いやすいUIを意識しました。',
    githubUrl: 'https://github.com/haruka-goda/ink_collection'
  },
  {
    id: 35,
    name: '51期B nao',
    appName: '例のサンバを当てるゲーム',
    category: 'Newcomer',
    url: 'https://matsuken-quiz.onrender.com',
    appImg: '/app/samba.jpg',
    description: '例のサンバを当てるイントロクイズアプリです！',
    commnet: 'SpotifyのAPIを利用して楽曲情報やプレビュー音源を読み込んでいます！出題曲は10曲、珠玉の名曲を選定しています！いろんなサンバを楽しんでください！',
    githubUrl: 'https://github.com/nao-enpg/matsuken_quiz'
  },
  {
    id: 36,
    name: '46期A りか',
    appName: 'KoreCare',
    category: 'ルーキー',
    url: 'https://korecare.jp',
    appImg: '/app/korecare.png',
    description: '韓国コスメに特化したスキンケア情報サービスです。',
    commnet: '"・Sidekiq、Redis、ActiveJobを使用したLINE通知機能\n・SWRを使用したデータ取得\n・説明などの文章はモーダル内に入れることで見やすさ・シンプルさを意識しました。"',
    githubUrl: 'https://github.com/rk0325/korecare'
  },
  {
    id: 37,
    name: '44期 年増七海',
    appName: 'やる気の森',
    category: 'ルーキー',
    url: 'https://www.yaruki-morimori.com/',
    appImg: '/app/yarukinomori.jpg',
    description: '"同じ学習目的のエンジニア同士で、学習時間を計測できる学習計測アプリです。\nGithubの「草を生やす」から着想を得て、学習目標時間に応じた絶滅危惧種を救うために計測した学習時間で「森林を増やす」ことで学習目標をみんなで楽しんでできます。"',
    commnet: 'メインのタイマー機能には力を入れました。Stimulusを使って非同期通信を行いSPA風に実装にできました。画像のプレビューやモーダルなどもStimulusを使うことでユーザーにストレスなく使ってもらえるようにしました。',
    githubUrl: 'https://github.com/nanamitoshimasu/studying_mate'
  },

  
];

export default appsData