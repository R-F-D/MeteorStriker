/* *******************************************************************************
	選択肢クラス
********************************************************************************/
var cc,_;
var rc,L;
var Label,Locale,Button,Store;

// eslint-disable-next-line no-unused-vars
var Selector	= class Selector{

	constructor(nItems){
		this.buttons		= Button.CreateInstance(nItems);
		this.layer			= null;
		/** @var 選択されたボタン番号 */
		this.idxSelected	= null;
		this._keepsOn		= true;

		this.isVisible		= true;
		this._state			= Selector.States.Unlocked;
		this.enabler		= null;

		this.area		= {x:0,y:0,width:0,height:0};
		this._gap		= {x:16,y:16};
		this.caption	= null;

		/** @var {function} f(key,tag)*/
		this._onSelected		= (/*key,tag*/)=>{};
	}

	Init(){
		this.buttons.forEach((button,i)=>{
			button
				.CreateSprite(rc.img.labelButton)
				.CreateLabel(20)
				.SetColorOnHover([0xFF,0xA0,0x00])
				.SetLabelColor("#442222","#FFFFFF",1)
				.SetScale(0.5)
				.SetOpacity(192)
				.OnTouchEnded(()=>this.Select(i));
			button.opacityOnHover	= 255;
		});
		return this;
	}

	/** キャプション設定
	 * @param {string} text
	 * @returns
	 * @memberof Selector
	 */
	SetCaption(text){
		if(!this.caption){
			this.caption	= Label.CreateInstance()
								.AddToLayer(this.layer)
								.SetAnchorPoint(cc.p(0,0.5))
								.SetFontColor("#FFCF00","#7F0000",1)
								.SetVisible(this.isVisible);
		}
		this.caption.SetString(text);
		return this;
	}

	/** キャプション設定（テキストコードで指定）
	 * @param {string} textCode					テキスト識別子
	 * @param {string[]} [replacements=null]	置換文字列（置換処理が不要なときはnull）
	 * @returns
	 * @memberof Selector
	 */
	SetCaptionByTextCode(textCode,replacements=null){
		//ローカライズされたテキスト
		const text		= replacements===null	? L.Text(textCode)
												: L.Textf(textCode,replacements);
		//ユニバーサルなテキスト
		const univText	= replacements===null	? L.Text(textCode,Locale.UniversalCode)
												: L.Textf(textCode,replacements,Locale.UniversalCode);

		if(text==univText)	return this.SetCaption(text);
		else				return this.SetCaption(`${text} (${univText})`);
	}


	AddToLayer(layer){
		if(!layer)	return this;
		this.layer	= layer;
		this.buttons.AddToLayer(layer);
		if(this.caption)	this.caption.AddToLayer(layer);
		return this;
	}

	/**表示/非表示の切り替え*/
	SetVisible(visible){
		this.isVisible	= visible;
		if(this.buttons)	this.buttons.SetVisible(visible);
		if(this.caption)	this.caption.SetVisible(visible);
		return this;
	}


	/** 有効フラグまたは有効チェック関数のセット
	 * @param {boolean|function} [enabler=null]		有効チェック関数
	 * @param {number} [idxStorage=null]	アンロック済フラグを格納するストレージ番号
	 * @returns
	 */
	SetEnabled(enabler=null,idxStorage=null){
		this._state	= null;
		if(enabler===null)	return this;

		if(_.isFunction(enabler))	this.enabler	= enabler;
		else						this.enabler	= !!enabler;
		if(idxStorage!==null)	this.idxStorage	= idxStorage;

		this.buttons.SetEnabled(this.isEnabled);
		return this;
	}

	Unlock(refreshes=true){
		if(this._state!==Selector.States.Breakable)	return this;

		this.SetEnabled(true);
		this._state 	= Selector.States.Unlocked;
		if(_.isNumber(this.idxStorage))	Store.DynamicInsert( Store.Handles.Settings.UnlockFlags,	value=>Store.Gens.SetFlag(value,this.idxStorage,true)	);

		//Refresh
		if(refreshes && _.isFunction(this._OnUnlocked))	this._OnUnlocked();
		return this;
	}

	set OnUnlocked(callback){
		if(_.isFunction(callback))	this._OnUnlocked = callback;
	}

	/** 状態
	 * @readonly
	 */
	get state(){
		if(this._state!==null)	return this._state;

		if(_.isFunction(this.enabler))	this._state	= this.enabler()	? Selector.States.Breakable	: Selector.States.Locked;
		else							this._state	= this.enabler		? Selector.States.Unlocked	: Selector.States.Locked;
		return this._state;
	}

	/** 有効か（ロックパネル非表示なら真）
	 * @readonly
	 */
	get isEnabled(){
		return !this.state;
	}

	/** 選択肢エリアの範囲を設定
	 * @param {number} left				x座標
	 * @param {number} top				y座標
	 * @param {number} [width=null]		横幅。省略(null)時は画面いっぱいまで。
	 * @param {number} [height=null]	縦幅。省略(null)時は画面いっぱいまで。
	 * @returns {this}
	 * @memberof Selector
	 */
	SetArea(left,top,width=null,height=null){
		//代入 width/heightはnull時に画面端までの値を算出
		this.area.x			= Math.trunc(left);
		this.area.y			= Math.trunc(top);
		this.area.width		= width !==null	? Math.trunc(width) : cc.director.getWinSize().width -this.area.x;
		this.area.height	= height!==null	? Math.trunc(height): Math.trunc(top);
		if(this.area.width<=0 || this.area.height<=0)	return this;

		if(this.caption){
			this.caption.SetPosition(this.area.x,this.area.y-this._gap.y/2-3);
			this.area.y-=this._gap.y;
			this.area.height-=this._gap.y;
		}

		let x	= this.area.x;	//左上座標（アンカーポイント修正込み）
		let y	= this.area.y;	//
		let dx	= 0;			//差分
		let dy	= 0;			//

		this.buttons.forEach((button,i)=>{
			const box	= {
				width:	button.sprite.entity.getBoundingBox().width  * button.sprite.entity.parent.scaleX,
				height:	button.sprite.entity.getBoundingBox().height * button.sprite.entity.parent.scaleY,
			};
			const anchor= button.sprite.entity.getAnchorPoint();

			//選択肢1つ分だけ座標をずらす
			if(i>0){
				dx	+= box.width + this._gap.x;
				if(this.area.width-box.width < dx){
					dx	= 0;
					dy	+= box.height + this._gap.y;
				}
			}

			button.SetPosition(	x + dx + Math.trunc(box.width * anchor.x),
								y - dy - Math.trunc(box.height* (1-anchor.y))	);
		});
		return this;
	}


	Update(dt){
		if(!this.isVisible)	return this;
		if(this.caption)	this.caption.Update(dt);
		this.buttons.Update(dt);
		return this;
	}

	/** 選択肢をセレクトする
	 * @param {number} idx
	 * @returns
	 * @memberof Selector
	 */
	Select(idx){
		if(idx===null || idx===this.idxSelected)	return this;
		this.idxSelected	= this._keepsOn ?  idx : null;

		const button	= this.buttons.at(idx);
		if(this._keepsOn)	this.Turn(button,true).TurnOffAll(this.idxSelected);

		if(this._onSelected)	this._onSelected(idx,button.tag);
		return this;
	}

	/** 特定ボタンのオン/オフを設定する
	 * @param {ButtonItem} button	対象のボタン
	 * @param {boolean} switchesOn	ONなら真、OFFなら偽
	 * @returns
	 * @memberof Selector
	 */
	Turn(button,switchesOn){
		if(!button)	return this;
		if(switchesOn)	button.SetColor([0xFF,0xA0,0x00]).SetOpacity(255);
		else			button.SetColor([0xFF,0xFF,0xFF]).SetOpacity(255);
		return this;
	}


	/** 全てのスイッチをオフにする
	 * @param {array|number} [excludingIndexes=null]	除外するインデックス。null時は除外なし。
	 * @returns
	 * @memberof Selector
	 */
	TurnOffAll(excludingIndexes=null){
		this.buttons
			.filter((b,i)=>{	//除外
				if		(excludingIndexes===null || excludingIndexes===[])	return true;
				else if	(Array.isArray(excludingIndexes))					return !excludingIndexes.includes(i);
				else														return excludingIndexes!=i;
			})
			.forEach(b=>{
				this.Turn(b,false);
			})
		return this;
	}

	/** 選択されているボタン
	 * @readonly
	 * @memberof Selector
	 */
	get selectedButton(){
		if(this.idxSelected===null)	return null;
		return this.buttons.at(this.idxSelected) || null;
	}

	SetOnSelected(callback){
		this._onSelected	= callback;
		return this;
	}

	SetGap(x=null,y=null){
		if(x!==null)	this._gap.x	= x;
		if(y!==null)	this._gap.y	= y;
		return this;
	}

	/**ボタン押下時にON状態をキープするか*/
	KeepsOn(keepsOn){
		this._keepsOn	= keepsOn;
		return this;
	}

	SetOpacity(opacity){
		if(this.buttons)	this.buttons.SetOpacity(opacity);
		return this;
	}

	Attr(attributes){
		if(this.buttons)	this.buttons.forEach(b=>b.Attr(attributes));
		if(this.caption)	this.caption.Attr(attributes);
		return this;
	}


	/** 状態
	 * @readonly
	 * @static
	 */
	static get States(){
		return {
			Unlocked:	0x00,	// Hide panel. (The selector is enabled)
			Breakable:	0x01,	// Show unlock-able panel. (Click/Tap to enable the selector)
			Locked:		0x02,	// Show lock panel. (The Selector is disabled)
		};
	}

}


