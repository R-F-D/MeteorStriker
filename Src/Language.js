/********************************************************************************
	 地域別のテキストと数値区切り設定
	 Text And Number Separaotors
********************************************************************************/

/********************************************************************************
 * 数値の区切り
 * Hash of Numeric Separations
 *******************************************************************************/
// eslint-disable-next-line no-unused-vars
var NumericSeparators	= (()=>{return{
	//国際度量衡総会 General Conference on Weights and Measures
	_:{
		nDigits:	3,	//何桁ごとに区切るか How many every digits
		integer:	' ',	//整数の区切り Integer separator
		//integer:	["T","M","B"],	//	整数の区切りが毎回異なるなら配列に If the separators are different, set an array
		decimal:	'.',	//小数点 Decimal separator
	},
	en:{	decimal:'.',	nDigits:3,	integer:',',			},	//英語 English
	ja:{	decimal:'.',	nDigits:4,	integer:['万','億',],	},	//日本 Japanese
	tw:{	decimal:'.',	nDigits:4,	integer:['萬','億',],	},	//中国語(繁体) Traditional Chinese
	ko:{	decimal:'.',	nDigits:4,	integer:['만','억',],	},	//韓国語 Korea

}})();


/********************************************************************************
 * ローカライズされたテキストの一覧
 * Hash of Localized Texts
 *******************************************************************************/
// eslint-disable-next-line no-unused-vars
var LocalizedTexts	= (()=>{return{

	//----------------------------------------
	// 単位
	// Unit
	//----------------------------------------
		"Unit.Distance":{_:"km",},					//飛距離の単位 Distance
		"Unit.Aim":		{_:"%", },					//エイミング精度の単位 Aim
		"Unit.Blow":	{_:"%", },					//打撃倍率の単位 Charge
		"Unit.Emit":	{_:"%", },					//エミット倍率の単位 Emit
		"Unit.Counter":	{_:"$0", ja:"$0回",	tw:"$0次", ko:"$0 회",},		//Records>カウンタの単位（デフォルト） Records > Counter(Default)

	//----------------------------------------
	// タイトル画面
	// Title Scene
	//----------------------------------------

		//プレイボタン Play Button
		"Title.Button.Play":{
			_:	"Start the game!",
			ja:	"ゲームをプレイ",
			tw:	"玩遊戲",
			ko:	"게임하다",
		},

		//レコードボタン Records Button
		"Title.Button.Records":{
			_:	"View your achievements and records.",
			ja:	"実績と記録",
			tw:	"成就和記錄",
			ko:	"실적 및 기록",
		},

		//ヘルプボタン Help Button
		"Title.Button.Help":{
			_:	"How to play the game, etc.",
			ja:	"ゲームの遊び方など",
			tw:	"怎麼玩等等",
			ko:	"게임 방법 등",
		},

		//設定ボタン Settings Button
		"Title.Button.Settings":{
			_:	"Change the game settings.",
			ja:	"設定",
			tw:	"設定",
			ko:	"설정",
		},

		//ウェブページボタン Webpage Button
		"Title.Button.Home":{
			_:	"The game's webpage.",
			ja:	"ウェブページ",
			tw:	"網頁",
			ko:	"웹 페이지",
		},

		//ハッシュタグ検索 Hashtag Search Button
		"Title.Button.Search":{
			_:	"Do a hashtag search.",
			ja:	"ハッシュタグ検索",
			tw:	"標籤搜索",
			ko:	"해시 태그 검색",
		},

		//プレイヤーをクリック時 On Click The Player
		"Title.Reaction.Player":{
			_:	"Momoko dakedo.",
			ja:	"桃子だけど。",
			tw:	"桃子Dakedo。",
			ko:	"모모코Dakedo.",
		},


	//----------------------------------------
	// ロゴ＆遷移画面
	// Logo Scene & Transition Scene
	//----------------------------------------

		//遷移中 Transition Message
		"Logo.ToStart":{
			_:	"Click or Tap to Start",
			ja:	"クリック/タップでスタート",
			tw:	"",
			ko:	"",
		},

		//遷移中 Transition Message
		"Transition.Wait":{
			_:	"Look forward!",
		},


	//----------------------------------------
	// ゲームプレイ画面
	// GamePlay Scene
	//----------------------------------------

		//隕石の飛距離メーター Distance Meter
		"GamePlay.Distance":{
			_:	"Meteor: $0 $1",
		},


	//----------------------------------------
	// ゲームプレイ - ナビゲータのメッセージ
	// GamePlay - Navigator's Messages
	//----------------------------------------

		//エイミングバー作動中 Booting Aim Bar
		"GamePlay.Navigator.Aim":{
			_:	"Set your sights on it and hold to charge!",
			ja:	"ねらいを定めて長押ししてね",
			tw:	"",
			ko:	"",
		},

		//チャージ動作中 Charging
		"GamePlay.Navigator.Preliminary":{
			_:	"Release to attack!",
			ja:	"はなすと攻撃だよ",
			tw:	"",
			ko:	"",
		},

		//打撃失敗 Failed to Blow
		"GamePlay.Navigator.Fail":{
			_:	"Release at the right time!",
			ja:	"タイミングよく はなしてね",
			tw:	"",
			ko:	"",
		},

		//エミット中 Emitting
		"GamePlay.Navigator.Emit":{
			_:	"Tap to power up!",
			ja:	"タップでパワーアップするよ",
			tw:	"",
			ko:	"",
		},

		//結果表示 Result
		"GamePlay.Navigator.Leave":{	//宇宙戦艦ヤマト OPナレーション
			_:	"Momoko-chan has now arrived in the Great Million\nUniverse, $0 away from Earth!",
			ja:	"桃子ちゃんは、地球から$0の\n彼方にある大ミリオン宇宙へ、いま到達したよ",
			tw:	"",
			ko:	"",
		},

		//リセットボタン説明 Reset Button
		"GamePlay.Navigator.Result.Reset":{
			_:	"Go back to the title screen.",
			ja:	"タイトル画面にもどるよ",
			tw:	"",
			ko:	"",
		},

		//リトライボタン説明 Retry Button
		"GamePlay.Navigator.Result.Retry":{
			_:	"Play the game again.",
			ja:	"もういちどゲームをやるよ",
			tw:	"",
			ko:	"",
		},

		//シェアボタン説明 Share Button
		"GamePlay.Navigator.Result.Share":{
			_:	"Post your results on Twitter.",
			ja:	"Twitterに結果をつぶやくよ",
			tw:	"",
			ko:	"",
		},

		//チェックポイント：開始 Check Point : Start
		"GamePlay.Navigator.BrowAway.Start":{	//おねがいティーチャー
			_:	"Please ☆ Momoko-chan!",
			ja:	"おねがい☆桃子ちゃん",
			tw:	"",
			ko:	"",
		},

		//チェックポイント：金星 Check Point : Venus
		"GamePlay.Navigator.BrowAway.Venus":{
			_:	"You've come to see Venus, Momoko-chan?",
			ja:	"金星を見ておいでですか、桃子ちゃん",	//銀河英雄伝説#01
			tw:	"",
			ko:	"",
		},

		//チェックポイント：火星 Check Point : Mars
		"GamePlay.Navigator.BrowAway.Mars":{	//宇宙よりも遠い場所
			_:	"That's further than Mars.",
			ja:	"火星よりも遠い場所だね",
			tw:	"",
			ko:	"",
		},

		//チェックポイント：水星 Check Point : Mercury
		"GamePlay.Navigator.BrowAway.Mercury":{	//セーラームーン マーキュリー
			_:	"I'll have to dabble in water and reflect on that...",
			ja:	"水をかぶって反省しなきゃ…",
			tw:	"",
			ko:	"",
		},

		//チェックポイント：太陽 Check Point : Sun
		"GamePlay.Navigator.BrowAway.Sun":{	//宇宙戦艦ヤマト#10
			_:	"Farewell, sun!\nFrom the theater with love.",
			ja:	"さようなら太陽！\nシアターより愛をこめて",
			tw:	"",
			ko:	"",
		},

		//チェックポイント：きらりんロボ通過 Check Point : Kirarin Robot
		"GamePlay.Navigator.BrowAway.Kirari":{	//機動戦士ガンダム 台詞「人間よりMSが大切なんですか」
			_:	"Is Momoko farther away\nthan Kirarin-Robo?",
			ja:	"桃子ちゃんはきらりんロボより遠方なんですか？",
			tw:	"",
			ko:	"",
		},

		//チェックポイント：最終 Check Point : Last
		"GamePlay.Navigator.BrowAway.Unicorn":{	//機動戦士ガンダム
			_:	"I can see it! I can see the pink unicorn too!",
			ja:	"みえるよ！ わたしにもピンクのユニコーンがみえる！",
			tw:	"",
			ko:	"",
		},


	//----------------------------------------
	// 設定画面
	// Settings
	//----------------------------------------

		//ロックパネル（ロック時） Locked
		"Settings.LockPanel.Locked": {
			_:	"Item locked",
			ja:	"この項目はロックされています",
			tw:	"該選擇器已鎖定",
			ko:	"이 선택기가 잠겨 있습니다.",
		},
		//ロックパネル（解除可能時） Unlock-able
		"Settings.LockPanel.Breakable": {
			_:	"Click or Tap Anywhere",
			ja:	"クリック/タップしてください",
			tw:	"請點擊此處",
			ko:	"여기를 클릭/탭하 십시오.",
		},
		//ロックパネルの解除条件 Conditions of unlocking
		"Settings.LockPanel.Cond": {
			_:	"Condition: $0",
			en:	"Cond: $0",
			ja:	"条件：$0",
			tw:	"條件: $0",
			ko:	"조건: $0",
		},
		//ロックパネルの達成された解除条件 Filled Conditions
		"Settings.LockPanel.Filled": {
			_:	"Achieved: $0",
			ja:	"達成：$0",
			tw:	"已清除: $0",
			ko:	"클리어: $0",
		},

		//地域・言語設定 Locale & Language
		"Settings.Locale":	{
			_:	"Language",
			ja:	"言語",
			tw:	"語言",
			ko:	"언어",
		},
		"Settings.Locale.Label._":	{_:	"Universal",},				//Universal
		"Settings.Locale.Label.en":	{_:	"English",},				//English-Speaking Countries
		"Settings.Locale.Label.ja":	{_:	"日本語\nJapanese",},		//Japan
		"Settings.Locale.Label.tw":	{_:	"繁體中文\nTrad Chinese",},	//Traditional Chinese
		"Settings.Locale.Label.ko":	{_:	"한국\nKorean",},			//Korea

		"Settings.Locale.Aleart":{	//Message When Switch Language
			_:	"Sorry.\nThe texts are machine-translated.",
			en:	"The original English texts were originally machine-translated by R.F.D.,\nthe developer of this game.\n\nThe English texts were improved by MattMayuga.",
			//ja: アラートなし No alert
			tw:	"抱歉。\n這些文本是機器翻譯的。\n現在，大多數文本都未翻譯。\n請給我您的翻譯！",
			ko:	"죄송합니다.\n텍스트는 기계 번역됩니다.\n이제 대부분의 텍스트가 번역되지 않았습니다.\n번역을 보내주세요!",
		},

		//SFX音量設定 Sound Effect Volume
		"Settings.SfxVolume":	{
			_:	"SFX Volume",
			ja:	"効果音音量",
			tw:	"音效音量",
			ko:	"효과음 볼륨",
		},
		"Settings.SfxVolume.Label.0":	{_: "0",	en:"Off",	ja:"なし",	tw:"靜音",	ko:"끄기",	},	//Volume 0%(Off)
		"Settings.SfxVolume.Label.1":	{_:	"1",	en:"♪",		ja:"♪",		tw:"♪",		ko:"♪",		},	//Volume 20%
		"Settings.SfxVolume.Label.2":	{_:	"2",	en:"♪♪",	ja:"♪♪",	tw:"♪♪",	ko:"♪♪",	},	//Volume 40%
		"Settings.SfxVolume.Label.3":	{_:	"3",	en:"♪♪♪",	ja:"♪♪♪",	tw:"♪♪♪",	ko:"♪♪♪",	},	//Volume 60%
		"Settings.SfxVolume.Label.4":	{_:	"4",	en:"♪♪♪♪",	ja:"♪♪♪♪",	tw:"♪♪♪♪",	ko:"♪♪♪♪",	},	//Volume 80%
		"Settings.SfxVolume.Label.5":	{_:	"5",	en:"♪♪♪♪♪",	ja:"♪♪♪♪♪",	tw:"♪♪♪♪♪",	ko:"♪♪♪♪♪",	},	//Volume 100%(Max)

		//BGM音量設定 Background Music Volume
		"Settings.BgmVolume":	{
			_:	"Music Volume",
			ja:	"BGM音量",
			tw:	"背景音樂音量",
			ko:	"배경 음악 볼륨",
		},
		"Settings.BgmVolume.Label.0":	{_: "0",	en:"Off",	ja:"なし",	tw:"靜音",	ko:"",		},	//Volume 0%(Off)
		"Settings.BgmVolume.Label.1":	{_:	"1",	en:"♪",		ja:"♪",		tw:"♪",		ko:"♪",		},	//Volume 20%
		"Settings.BgmVolume.Label.2":	{_:	"2",	en:"♪♪",	ja:"♪♪",	tw:"♪♪",	ko:"♪♪",	},	//Volume 40%
		"Settings.BgmVolume.Label.3":	{_:	"3",	en:"♪♪♪",	ja:"♪♪♪",	tw:"♪♪♪",	ko:"♪♪♪",	},	//Volume 60%
		"Settings.BgmVolume.Label.4":	{_:	"4",	en:"♪♪♪♪",	ja:"♪♪♪♪",	tw:"♪♪♪♪",	ko:"♪♪♪♪",	},	//Volume 80%
		"Settings.BgmVolume.Label.5":	{_:	"5",	en:"♪♪♪♪♪",	ja:"♪♪♪♪♪",	tw:"♪♪♪♪♪",	ko:"♪♪♪♪♪",	},	//Volume 100%(Max)

		//隕石設定 Meteorite
		"Settings.Meteorite":	{
			_:	"Meteorite",
			ja:	"隕石",
			tw:	"隕石",
			ko:	"운석",
		},
		"Settings.Meteorite.Label.Normal":		{_:"Meteorite",		en:"Meteorite",		ja:"隕石",			tw:"隕石",		ko:"운석",		},	//Meteorite
		"Settings.Meteorite.Label.Bear":		{_:"Teddy Bear",	en:"Kuma-kun",		ja:"クマくん",		tw:"熊kun",		ko:"쿠마쿤",	},	//Kuma-kun
		"Settings.Meteorite.Label.Triangle":	{_:"Triangle",		en:"△Triangle",    ja:"△さんかく",	  tw:"△三角",    ko:"△삼각",	},	//Triangle

		"Settings.Meteorite.Locked":	{
			_:	"Get the achievement \"Momoko Dakedo.\"",
			ja:	"実績「桃子だけど。」の解除",
			tw:	"解鎖成就\"桃子Dakedo。\"",
			ko:	"과제\"모모코Dakedo.\"해제",
		},

		//ナビゲーター設定 Navigator
		"Settings.Navigator":	{
			_:	"Navigator",
			ja:	"ナビゲーター",
			tw:	"導航者",
			ko:	"항해자",
		},
		"Settings.Navigator.Label.Normal":	{_:	"Iku\nNakatani",			ja:"中谷育",				tw:"中谷育",		ko:"나카타니\n이쿠.",	},	//Iku
		"Settings.Navigator.Label.Golem":	{_:	"First\nFriend",			ja:"初めての\nともだち",	tw:"第一個朋友",	ko:"첫 친구",			},	//Golem
		"Settings.Navigator.Label.Goddess":	{_:	"Goddess of\n Earth",	ja:"大地の女神",			tw:"大地女神",		ko:"대지의 여신",		},	//Goddess

		"Settings.Navigator.Locked":	{
			_:	"Save the world five times",
			ja:	"世界を5回救う",
			tw:	"保護地球5次",
			ko:	"지구를 5번 보호합니다",
		},

		//データのトランスポート Storage Transporting
		"Settings.Transport":	{
			_:	"Data transport",
			ja:	"データのトランスポート",
			tw:	"資料傳輸",
			ko:	"데이터 전송",
		},
		"Settings.Transport.Label.Import":	{_:"Import",	ja:"インポート",	tw:"匯入",	ko:"가져오기",	},	//Import
		"Settings.Transport.Label.Export":	{_:"Export",	ja:"エクスポート",	tw:"匯出",	ko:"내보내기",	},	//Export

		"Settings.Transport.Dialog.Import":{
			_:	"Please paste the saved text into the input field.",
			ja:	"保存したテキストを入力欄にペーストしてください。",
			tw:	"將保存的文本粘貼到輸入字段中。",
			ko:	"데이터 전송.",
		},
		"Settings.Transport.Dialog.Export":{
			_:	"Please copy and save the following text.",
			ja:	"以下のテキストをコピーし保存してください。",
			tw:	"複製此文本並保存。",
			ko:	"이 텍스트를 복사하여 저장하십시오.",
		},

		//ストレージ管理 Storage Management
		"Settings.Storage":	{
			_:	"Storage management",
			ja:	"ストレージ管理",
			tw:	"倉儲管理",
			ko:	"스토리지 관리",
		},
		"Settings.Storage.Label.RemoveSettings":	{_:	"Delete\nsettings",		ja:"設定の削除",	tw:"移除設定",	ko:"설정 제거",	},	//Remove settings
		"Settings.Storage.Label.RemoveRecords":		{_:	"Delete\nrecords",		ja:"記録の削除",	tw:"移除記錄",	ko:"기록 제거",	},	//Remove records
		"Settings.Storage.Label.RemoveAchievements":{_:	"Delete\nachievements",	ja:"実績の削除",	tw:"移除成就",	ko:"과제 제거",	},	//Remove achievements
		"Settings.Storage.Label.Remove":			{_:	"Delete all",			ja:"全削除",		tw:"全部移除",	ko:"전체 제거",	},	//Remove all data

		"Settings.Storage.Confirm.RemoveSettings":{
			_:	"Are you sure you want to delete game settings?",
			ja:	"ゲーム設定を削除しますか？",
			tw:	"",
			ko:	"",
		},
		"Settings.Storage.Confirm.RemoveRecords":{
			_:	"Are you sure you want to delete your play records?",
			ja:	"プレイ記録を削除しますか？",
			tw:	"",
			ko:	"",
		},
		"Settings.Storage.Confirm.RemoveAchievements":{
			_:	"Are you sure you want to delete your achievements?",
			ja:	"実績を削除しますか？",
			tw:	"",
			ko:	"",
		},
		"Settings.Storage.Confirm.Remove":{
			_:	"Are you sure you want to delete all data?",
			ja:	"全てのデータを削除しますか？",
			tw:	"",
			ko:	"",
		},

	//----------------------------------------
	// レコード画面 - 記録
	// Records Scene - Records
	//
	//	XXX			: 項目名
	//	XXX.Format	: カウンタ表示
	//----------------------------------------

		//シークレット項目 Secret
		"Records.Secret":{
			_:	"??????????",
			ja:	"？？？？？",
		},
		"Records.Secret.Format":{
			_:	"???",
		},

		//ハイスコア High Score
		"Records.GamePlay.HighScore":{
			_:	"High Score",
			ja:	"ハイスコア",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.HighScore.Format":{
			_:	"$0$1",
		},

		//直近の平均飛距離
		"Records.GamePlay.MeanDistance":{
			_:	"Recent average distance",
			ja:	"直近の平均飛距離",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.MeanDistance.Format":{
			_:	"$0$1",
		},

		//チェックポイント通過回数
		"Records.GamePlay.NumPassings.00":{
			_:	"Solar arrivals",
			ja:	"太陽到達回数",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.NumPassings.01":{
			_:	"Kirarin-Robo passes",
			ja:	"きらりんロボ通過回数",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.NumPassings.01.Secret":{
			_:	"???????? passes",
			ja:	"？？？？通過回数",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.NumPassings.02":{
			_:	"Pink Unicorns found",
			ja:	"ピンクのユニコーン発見数",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.NumPassings.02.Secret":{
			_:	"???????? found",
			ja:	"？？？？発見数",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.NumPassings.02.Format":{
			_:	"$0",
			ja:	"$0匹",
			tw:	"$0",
			ko:	"$0",
		},

		//グッド以上の回数 Good/Perfect Aims
		"Records.GamePlay.NumGoods":{
			_:	"Good aims",
			ja:	"グッドエイム",
			tw:	"",
			ko:	"",
		},

		//パーフェクト回数 Perfect Aims
		"Records.GamePlay.NumPerfects":{
			_:	"Perfect aims",
			ja:	"パーフェクトエイム",
			tw:	"",
			ko:	"",
		},

		//100%エイム回数 100% Aims
		"Records.GamePlay.NumTruePerfects":{
			_:	"100% perfect aims",
			ja:	"100%パーフェクトエイム",
			tw:	"",
			ko:	"",
		},

		//最高エイミング精度 Best Aiming Accurasy
		"Records.GamePlay.BestAiming":{
			_:	"Highest aiming accuracy",
			ja:	"最高エイミング精度",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.BestAiming.Format":{
			_:	"$0$1",
		},

		//直近の平均エイミング精度 Latest Mean Aiming Accurasy
		"Records.GamePlay.MeanAiming":{
			_:	"Recent average aiming accuracy",
			ja:	"直近の平均エイミング精度",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.MeanAiming.Format":{
			_:	"$0$1",
		},

		//強打回数 Hardblows
		"Records.GamePlay.NumHardBlowings":{
			_:	"Hard blows",
			ja:	"強打",
			tw:	"",
			ko:	"",
		},

		//全力打撃回数 Full Power Blows
		"Records.GamePlay.NumFullPowerBlowings":{
			_:	"Full force blows",
			ja:	"全力打撃",
			tw:	"",
			ko:	"",
		},

		//強打とパーフェクトを同時に出した回数 Hardblow and Perfect
		"Records.GamePlay.NumHardAndPerfectBlowings":{
			_:	"Hard hits and perfects",
			ja:	"強打＆パーフェクト",
			tw:	"",
			ko:	"",
		},

		//打撃最高倍率 Best Blowing Rate
		"Records.GamePlay.BestBlowing":{
			_:	"Max. impact ratio",
			ja:	"最高打撃倍率",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.BestBlowing.Format":{
			_:	"$0$1",
		},

		//直近の平均打撃倍率 Latest Mean Blowing Rate
		"Records.GamePlay.MeanBlowing":{
			_:	"Recent average strike multiplier",
			ja:	"直近の平均打撃倍率",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.MeanBlowing.Format":{
			_:	"$0$1",
		},

		//失敗せずに連続して打撃を成功させた数 Hits in a Row Without Failure.",
		"Records.GamePlay.MaxSuccessiveHits":{
			_:	"Max consecutive hits",
			ja:	"最大連続ヒット",
			tw:	"",
			ko:	"",
		},

		//エミット最高倍率 Best Emitting Rate
		"Records.GamePlay.MaxEmittings":{
			_:	"Max emitting rate",
			ja:	"最高エミット倍率",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.MaxEmittings.Format":{
			_:	"$0$1",
		},

		//直近の平均エミット倍率 Latest Mean Emitting Rate
		"Records.GamePlay.MeanEmitting":{
			_:	"Recent average emit multiplier",
			ja:	"直近の平均エミット倍率",
			tw:	"",
			ko:	"",
		},
		"Records.GamePlay.MeanEmitting.Format":{
			_:	"$0$1",
		},

		//プレイ回数 Number of Plays
		"Records.Action.NumPlays":{
			_:	"Clears",
			ja:	"クリア回数",
			tw:	"",
			ko:	"",
		},

		//リトライ回数 Number of Retrys
		"Records.Action.NumRetrys":{
			_:	"Times retried",
			ja:	"リトライ回数",
			tw:	"",
			ko:	"",
		},

		//起動回数 Number of Bootings
		"Records.Action.NumBootings":{
			_:	"Started up",
			ja:	"起動回数",
			tw:	"",
			ko:	"",
		},

		//推定実行時間 Estimated Run Time
		"Records.Action.RunTime":{
			_:	"Game time",
			ja:	"起動時間",
			tw:	"",
			ko:	"",
		},
		"Records.Action.RunTime.Format":{
			_:	"$0",
		},

		//推定合計実行時間 Estimated Total Run Time
		"Records.Action.TotalRunTime":{
			_:	"Total time",
			ja:	"合計起動時間",
			tw:	"",
			ko:	"",
		},
		"Records.Action.TotalRunTime.Format":{
			_:	"$0",
		},

		//シェア回数 Number of Shares
		"Records.Action.NumShares":{
			_:	"Times shared",
			ja:	"シェア回数",
			tw:	"",
			ko:	"",
		},

		//実績解除率（トータル） Ratio of All Unlocked Achievements
		"Records.Action.TotalUnlockedAchievements":{
			_:	"Achievement progress",
			ja:	"実績達成率",
			tw:	"",
			ko:	"",
		},
		"Records.Action.TotalUnlockedAchievements.Format":{
			_:	"$0%",
		},
		//実績解除数（ランク別） Number of Unlocked Achievements By Rank
		"Records.Action.NumUnlockedAchievements.00":{
			_:	"Bronze Momokos",
			ja:	"ブロンズ桃子",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumUnlockedAchievements.01":{
			_:	"Silver Momokos",
			ja:	"シルバー桃子",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumUnlockedAchievements.02":{
			_:	"Gold Momokos",
			ja:	"ゴールド桃子",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumUnlockedAchievements.03":{
			_:	"Platinum Momokos",
			ja:	"プラチナ桃子",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumUnlockedAchievements.00.Format":{
			_:	"$0",
			ja:	"$0個",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumUnlockedAchievements.01.Format":{
			_:	"$0",
			ja:	"$0個",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumUnlockedAchievements.02.Format":{
			_:	"$0",
			ja:	"$0個",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumUnlockedAchievements.03.Format":{
			_:	"$0",
			ja:	"$0個",
			tw:	"",
			ko:	"",
		},

		//各ナビゲーション回数 Number of Navigates
		"Records.Action.NumNavigates.00":{
			_:	"Times Navigated as Iku Nakatani",
			ja:	"中谷育のナビ回数",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumNavigates.01":{
			_:	"Times Navigated as First Friend",
			ja:	"初めてのともだちのナビ回数",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumNavigates.01.Secret":{
			_:	"Times Navigated as ????????",
			ja:	"？？？？のナビ回数",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumNavigates.02":{
			_:	"Times Navigated as Earth Goddess",
			ja:	"大地の女神のナビ回数",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumNavigates.02.Secret":{
			_:	"Times Navigated as ????????",
			ja:	"？？？？のナビ回数",
			tw:	"",
			ko:	"",
		},

		//プレイヤーキャラクターをタッチした回数 Number of Touches Player Character
		"Records.Action.NumTouchesPlayer":{
			_:	"Times Touched Momoko",
			ja:	"桃子にタッチした回数",
			tw:	"",
			ko:	"",
		},

		//各隕石エンゲージ回数 Number of Meteorite Engagements
		"Records.Action.NumMeteoriteEngages.00":{
			_:	"Meteorite Engagements",
			ja:	"隕石とのエンゲージ回数",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumMeteoriteEngages.01":{
			_:	"Teddy Bear Engagements",
			en:	"Kuma-kun Engagements",
			ja:	"クマくんとのエンゲージ回数",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumMeteoriteEngages.01.Secret":{
			_:	"???????? Engagements",
			ja:	"？？？？とのエンゲージ回数",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumMeteoriteEngages.02":{
			_:	"△Triangle Engagements",
			ja:	"△さんかくとのエンゲージ回数",
			tw:	"",
			ko:	"",
		},
		"Records.Action.NumMeteoriteEngages.02.Secret":{
			_:	"???????? Engagements",
			ja:	"？？？？とのエンゲージ回数",
			tw:	"",
			ko:	"",
		},


	//----------------------------------------
	// シェア Share
	//----------------------------------------

		//Twitter Intent
		"About.Share.Format":{
			_:	"https://twitter.com/intent/tweet?text=$0%0a%23$2%0a$1",
		},

		//ハッシュタグ検索 Hashtag Search
		"About.Search.Format":{
			_:	"https://twitter.com/hashtag/$0",
		},

		//ツイート文字列 Tweet Text
		"About.Share.Text":{
			_:	"Momoko-chan blew up a meteorite from $0$1 away!",
			ja:	"桃子ちゃんは隕石を$0$1吹っ飛ばしました！",
			tw:	"桃子飛行了隕石$0$1！",
			ko:	"모모코는 운석을 $0$1 떨어 뜨 렸습니다!",
		},

		//タグ Tag
		"About.HashTags":{
			_:	"MeteorMomoko",
			ja:	"メテオ桃子だけど",
			tw:	"MeteorMomoko",
			ko:	"MeteorMomoko",
		},


	//----------------------------------------
	// 実績
	// Achievements
	//----------------------------------------

		//実績解除ラベル Label of Unlocking
		"Achievement.Unlocked" :{
			_:	"Achievement Get!",
			ja:	"実績解除！",
			tw:	"成就解鎖！",
			ko:	"과제 해제！",
		},

		//シークレット項目 Secret
		"Achievement.Secret":{
			_:	"??????????",
			ja:	"？？？？？",
			tw:	"？？？？？",
			ko:	"？？？？？",
		},
		"Achievement.Secret.Text":{
			_:	"?????????? ??????????",
			ja:	"？？？？？？？？？？",
			tw:	"？？？？？？？？？？",
			ko:	"？？？？？？？？？？",
		},

		//パーフェクト一定回数 Many Perfect Blows
		"Achievement.Aiming.ManyPerfect":{	//アイマスSPパーフェクトサン
			_:	"Perfect Sun",
			ja:	"パーフェクトサン",
			tw:	"Perfect Sun",
			ko:	"",
		},
		"Achievement.Aiming.ManyPerfect.Text":{
			_:	"Achieved $0 perfect hits.\nThere's a new world you will surely see.",
			ja:	"$0回パーフェクトを出した。\n必ず見える新しい世界。",
			tw:	"",
			ko:	"",
		},

		//グッド以上を一定回数 Many Good/Perfect Blows
		"Achievement.Aiming.ManyGood":{	//Good-Sleep,Baby
			_:	"Good-Aims, Baby",
		},
		"Achievement.Aiming.ManyGood.Text":{
			_:	"Achieved $0 good hits and higher.\nHave a good dream.",
			ja:	"$0回グッド以上を出した。\nいい夢を。",
			tw:	"",
			ko:	"",
		},

		//100%エイム 100% Aim
		"Achievement.Aiming.TruePerfect":{	//SSR「自称・カンペキ 輿水幸子」
			_:	"Self-Styled Perfect",
			ja:	"自称・カンペキ",
			tw:	"",
			ko:	"",
		},
		"Achievement.Aiming.TruePerfect.Text":{
			_:	"Achieved a 100% successful aim.\nThe kawaii never stops.",
			ja:	"100%エイムに成功した。\nカワイイが止まらない。",
			tw:	"",
			ko:	"",
		},

		//強打を一定回数 Many Hardblows
		"Achievement.Blowing.ManyHard":{	//ART NEEDS HAERT BEATS
			_:	"ART NEEDS HARD-BLOWS",
			ja:	"ART NEEDS HARD-BLOWS",
			tw:	"ART NEEDS HARD-BLOWS",
			ko:	"ART NEEDS HARD-BLOWS",
		},
		"Achievement.Blowing.ManyHard.Text":{
			_:	"You hit it hard $0 times.\nAn experience I've never felt before.",
			ja:	"$0回強打した。\n感じたことのないエクスペリエンス。",
			tw:	"",
			ko:	"",
		},

		//強打かつパーフェクト Hardblow And Perfect Aim
		"Achievement.Blowing.HardAndPerfect":{	//しゅがーはぁとレボリューション
			_:	"Perfect, Perfect, Perfect Hard",
			en:	"Perfect³ Hard☆",
			ja:	"パーフェクトっす³ ハード☆",
			tw:	"",
			ko:	"",
		},
		"Achievement.Blowing.HardAndPerfect.Text":{
			_:	"You hit it hard with a perfect aim $0 times.\n(Note: This is the user's opinion)",
			ja:	"強打でパーフェクトを$0回出した。\n(注:使用者の感想です)",
			tw:	"",
			ko:	"",
		},

		//打撃を連続成功 Successive Hits Without Failure
		"Achievement.Blowing.SuccessiveHits":{	//バベルシティグレイス
			_:	"L’ANTICA!",
			ja:	"\"安定化(あんていか)\"",
			tw:	"L’ANTICA!",
			ko:	"L’ANTICA!",
		},
		"Achievement.Blowing.SuccessiveHits.Text":{
			_:	"Hit $0 times in a row without fail.\nWe'll make it a permanent hit, L’ANTICA!",
			ja:	"失敗せず$0回連続でヒットさせた。\n永久ヒットにしてゆくよ。\"安定化\"",
			tw:	"",
			ko:	"",
		},

		//エミット回数実績その1 Emit Rate #01
		"Achievement.Emit.Many01":{	//オーバーマスター
			_:	"Gentle Emt",
			ja:	"ジェントルエミット",
			tw:	"Gentle放行",
			ko:	"젠틀 에밋",
		},
		"Achievement.Emit.Many01.Text":{
			_:	"Emitted $0$1 and above.\nWhat's a thrill-seeking emit without a thrill...",
			ja:	"エミット倍率$0$1以上を出した。\nスリルのないエミットなんて…",
			tw:	"",
			ko:	"",
		},

		//エミット回数実績その2 Emit Rate #02
		"Achievement.Emit.Many02":{	//オーバーマスター
			_:	"Wild Emit",
			ja:	"ワイルドエミット",
			tw:	"Wild放行",
			ko:	"와일드 에밋",
		},
		"Achievement.Emit.Many02.Text":{
			_:	"Emitted $0$1 and above.\nThe emittings breaked the taboos are...",
			ja:	"エミット倍率$0$1以上を出した。\nタブーを冒せるエミットは…",
			tw:	"",
			ko:	"",
		},

		//エミット回数実績その3 Emit Rate #03
		"Achievement.Emit.Many03":{	//オーバーマスター
			_:	"Dangerous Emit",
			ja:	"デンジャラスエミット",
			tw:	"Dangerous放行",
			ko:	"위험한 에밋",
		},
		"Achievement.Emit.Many03.Text":{
			_:	"Emitted $0$1 and above.\nHow is that possible?",
			ja:	"エミット倍率$0$1以上を出した。\nありえなくない？",
			tw:	"",
			ko:	"",
		},

		//金星到達 Venus
		"Achievement.Check.Venus":{	//ヴィーナスシンドローム
			_:	"Do You Know Venus?",
		},
		"Achievement.Check.Venus.Text":{
			_:	"You blew a meteorite more than $1$2 away.\nSo the goddess struck a meteorite.",
			ja:	"隕石を$1$2以上吹っ飛ばした。\nそう女神は隕石を打ち付けた。",
			tw:	"",
			ko:	"",
		},

		//火星到達 Mars
		"Achievement.Check.Mars":{	//プリンセス・アラモード
			_:	"Echoes on Mars and They Start!",
			ja:	"マーズに響いてスタート!",
			tw:	"",
			ko:	"",
		},
		"Achievement.Check.Mars.Text":{
			_:	"You blew a meteorite more than $1$2 away.\nWill you please escort me nicely?",
			ja:	"隕石を$1$2以上吹っ飛ばした。\n素敵にエスコートしてくださいね?",
			tw:	"",
			ko:	"",
		},

		//水星到達 Mercury
		"Achievement.Check.Mercury":{	//Beyond The Dream
			_:	"Go Straight Ahead, Cross Over Mercury",
			ja:	"進めまっすぐ 水星越えて",
			tw:	"",
			ko:	"",
		},
		"Achievement.Check.Mercury.Text":{
			_:	"You blew a meteorite more than $1$2 away.\nCome with me to the other side of the universe.",
			ja:	"隕石を$1$2以上吹っ飛ばした。\n一緒に行こう宇宙の向こうへ。",
			tw:	"",
			ko:	"",
		},

		//太陽到達 Sun
		"Achievement.Check.Sun":{	//BEYOND THE STARLIGHT
			_:	"BEYOND THE SUNLIGHT",
			ja:	"BEYOND THE SUNLIGHT",
			tw:	"BEYOND THE SUNLIGHT",
			ko:	"BEYOND THE SUNLIGHT",
		},
		"Achievement.Check.Sun.Text":{
			_:	"You blew a meteorite more than $1$2 away.\nSend it farther than anyone else.",
			ja:	"隕石を$1$2以上吹っ飛ばした。\n誰よりも飛ばせ。",
			tw:	"",
			ko:	"",
		},

		//諸星きらり到達 Kirarin Robot
		"Achievement.Check.Kirari":{	//Kosmos,Cosmos
			_:	"Kirari, Passed Through the Row of Light",
			ja:	"キラリ 光の列すり抜けたら",
			tw:	"",
			ko:	"",
		},
		"Achievement.Check.Kirari.Text":{
			_:	"You blew a meteorite more than $1$2 away.\nIt leaps out.",
			ja:	"隕石を$1$2以上吹っ飛ばした。\n跳び出してゆく。",
			tw:	"",
			ko:	"",
		},

		//2.5億km到達 250,000,000km
		"Achievement.Check.Unicorn":{	//教え絵last note...
			_:	"Tell Me Pink Unicorn...",
			ja:	"教えてpink unicorn...",
			tw:	"",
			ko:	"",
		},
		"Achievement.Check.Unicorn.Text":{
			_:	"You blew a meteorite more than $1$2 away.\n...bye bye.",
			ja:	"隕石を$1$2以上吹っ飛ばした。\n……バイバイ。",
			tw:	"",
			ko:	"",
		},

		//実績コンプリート
		"Achievement.Action.Complete":{	//必殺のメテオストライク！ 周防桃子
			_:	"Special Meteor Strike!",
			ja:	"必殺のメテオストライク!",
			tw:	"必殺流星罷工!",
			ko:	"필살의 미티어 스트라이크!",
		},
		"Achievement.Action.Complete.Text":{
			_:	"Awarded for unlocking all achievements.\nThat meteorite was KO'd in one shot!",
			ja:	"全ての実績を解除した。\n隕石なんて一発でKOだったね!",
			tw:	"",
			ko:	"",
		},

		//初プレイ First Play
		"Achievement.Action.FirstPlay":{	//地球の危機を救うため 周防桃子
			_:	"Saved the Planet",
			ja:	"地球の危機を救うため",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.FirstPlay.Text":{
			_:	"You saved the world by stopping the meteorite.\nMomoko has to do something about it...!",
			ja:	"隕石を食い止めて世界を救った。\n桃子がなんとかしなきゃ…!",
			tw:	"",
			ko:	"",
		},

		//リトライ Retry
		"Achievement.Action.Retry":{	//天井努
			_:	"Next Time, You'll Do Better!",
			ja:	"次回も頑張ってもらうぞ！",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.Retry.Text":{	//園田智代子 WING優勝
			_:	"You retried the game $0 times.\nIf I hadn't met Momoko \or made a different choice...\nI was wondering what happened to Earth...",
			ja:	"ゲームを$0回リトライした。\nもし桃子ちゃんに会えてなかったり\n違う選択してたら…\n地球、どうなってたのかなって…",
			tw:	"",
			ko:	"",
		},

		//結果シェア Share Result
		"Achievement.Action.Share01":{	//ドレミファクトリー！
			_:	"Share your results",
			ja:	"結果をシェアして",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.Share01.Text":{
			_:	"We post a tweet, tweet, tweet.",
			ja:	"ツイートツイートツイート 投稿するんだ。",
			tw:	"",
			ko:	"",
		},

		//結果シェア（好成績） Share Result (Successful)
		"Achievement.Action.Share02":{	//デコレーション・ドリ〜ミンッ♪
			_:	"See You in My Dream",
			en:	"See You in My Dream♪",
			ja:	"夢でおあいしましょう♪",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.Share02.Text":{
			_:	"You shared your results $0 times.\n($1 + $2 required)\nEveryone, have a great time!",
			ja:	"結果を$0回シェアした。（要$1$2以上）\nみんな、思いっきり楽しんでってねー！",
			tw:	"",
			ko:	"",
		},

		//プレイ時間 Play Time
		"Achievement.Action.PlayTime":{	//思い出をありがとう
			_:	"in a long time",
			ja:	"長い時間の中で",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.PlayTime.Text":{
			_:	"Your total play time was over $0 seconds.\nThank you for the memories.",
			ja:	"合計プレイ時間が$0秒を越えた。思い出をありがとう。",
			tw:	"",
			ko:	"",
		},

		//起動日数 Booting Days
		"Achievement.Action.BootDays":{	// HOME, SWEET FRIENDSHIP
			_:	"\"Tadaima\"",
			ja:	"「ただいま」",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.BootDays.Text":{
			_:	"You started the game for $0 days in total.\nFeel like a home game...",
			ja:	"計$0日間ゲームを起動した。\nFeel like a home game...",
			tw:	"",
			ko:	"",
		},

		//最終起動日からの時間経過
		"Achievement.Action.DaysPassed":{	//小宮果穂（轟！紅蘭偉魔空珠 番外地）
			_:	"I haven't seen you in here before...!",
			ja:	"見ない顔ですねぇ…！",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.DaysPassed.Text":{	//小宮果穂（五色爆発！合宿クライマックス！）
			_:	"It's been $0 days passed since you last started up the game\n(or $1 days in a row).\nMomoko-chan is... saving many worlds!",
			ja:	"最後に起動してから$0日が経過した\n（連続$1日間の起動でも可）。\n桃子ちゃんはー……いろんな世界を、いっぱい救いまーす！",
			tw:	"",
			ko:	"",
		},

		//月曜日または9時台に起動
		"Achievement.Action.Monday9":{	///月曜日のクリームソーダ
			_:	"Ice \"9 Letters\" on Monday",
			ja:	"月曜日の9リームソーダ",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.Monday9.Text":{
			_:	"Booted at/on 9, 19, 21, Monday *9th...OK?",
			ja:	"月曜日、○9日、9/19/21時台いずれかに起動した…オケ?",
			tw:	"",
			ko:	"",
		},

		//桃子だけど
		"Achievement.Action.TouchPlayer":{	//桃子だけど。
			_:	"Momoko Dakedo.",
			ja:	"桃子だけど。",
			tw:	"桃子Dakedo。",
			ko:	"모모코Dakedo.",
		},
		"Achievement.Action.TouchPlayer.Text":{
			_:	"Touched Momoko on the title screen. \nI'll see you then.",
			ja:	"タイトル画面で桃子にタッチした。\nそれじゃあ、またね。",
			tw:	"",
			ko:	"",
		},

		//隕石（ノーマル）破壊 Meteorite Engagement
		"Achievement.Action.Meteorite00":{	//流星PARADE
			_:	"Like a Meteorite Parade!",
			ja:	"まるで隕石のPARADE!",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.Meteorite00.Text":{
			_:	"You repelled the meteorite $0 times.\nForego the orange rock.",
			ja:	"隕石を$0回退けた。\nオレンジ色の岩を見送って。",
			tw:	"",
			ko:	"",
		},

		//クマくん破壊 Kuma-kunEngagement
		"Achievement.Action.Meteorite01":{	//空と風と恋のワルツ
			_:	"Waltz of The Sky, Wind and Bear",
			ja:	"空と風と熊のワルツ",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.Meteorite01.Text":{
			_:	"Fought off teddy bears $0 times.\n(N-No!)",
			en:	"Fought off Kuma-kun $0 times.\n(N-No!)",
			ja:	"クマくんを$0回退けた。\n（だっ だめ…！）",
			tw:	"",
			ko:	"",
		},

		//さんかく破壊 Triangle Engagement
		"Achievement.Action.Meteorite02":{	//ミツボシ☆☆★ ＋ 三つ鱗
			_:	"Triple Scales",
			en:	"Triple Scales☆☆★",
			ja:	"ミツウロコ☆☆★",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.Meteorite02.Text":{
			_:	"Retreated from the triangles $0 times.\nI'm not afraid to enter the atmosphere.",
			ja:	"さんかくを$0回退けた。\n大気圏突入も怖くない。",
			tw:	"",
			ko:	"",
		},

		//ナビゲータ（ノーマル）使用
		"Achievement.Action.Navigate00":{	//エージェント夜を往く
			_:	"Navigator Goes Through Space",
			ja:	"ナビゲーター宇宙を往く",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.Navigate00.Text":{
			_:	"Iku Nakatani has navigated $0 times.\nI can lead you down any road perfectly.",
			ja:	"中谷育が$0回ナビゲートした。\nどんな道も万全に率いられる。",
			tw:	"",
			ko:	"",
		},

		//ナビゲータ（ゴーレム）使用
		"Achievement.Action.Navigate01":{	//Wandering Dream Chaser
			_:	"Wandering Golem Navigator",
		},
		"Achievement.Action.Navigate01.Text":{
			_:	"My first friend has navigated it $0 times.\nI have something to aim for.",
			ja:	"初めてのともだちが$0回ナビゲートした。\n目指すものがあるから。",
			tw:	"",
			ko:	"",
		},

		//ナビゲータ（女神）使用
		"Achievement.Action.Navigate02":{	//ヒカリのdestination
			_:	"Navigation of Light",
			ja:	"ヒカリのnavigation",
			tw:	"",
			ko:	"",
		},
		"Achievement.Action.Navigate02.Text":{
			_:	"Earth Goddess has navigated $0 times.\nRun to the source of brilliance.",
			ja:	"大地の女神が$0回ナビゲートした。\n輝きのたもとへ走り出そうよ。",
			tw:	"",
			ko:	"",
		},

}})();
