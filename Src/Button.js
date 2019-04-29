var Button	= Button||{};
(function(){	//File Scope

/********************************************************************************
 * ButtonItemクラスのコンテナ
 * @class Button
 ********************************************************************************/
Button	= class Button{

	constructor(nItems=1){
		this.items	= [];
		for(let i=0; i<nItems; ++i){
			this.items[i]	= new ButtonItem(this);
		}

		this.x	= 0;
		this.y	= 0;
		this.layer	= null;
		this.listener	- null;
	}

	/** インスタンス生成
	 * @static
	 * @returns
	 * @memberof Button
	 */
	static CreateInstance(nItems){
		return new this(nItems);
	}

	/** レイヤに自身を追加
	 * @param {Number} idx
	 * @param {*} layer
	 * @returns this
	 * @memberof Button
	 */
	AddToLayer(layer){
		if(layer==null)	return this;
		this.layer	= layer;
		this.forEach(v=>v.AddToLayer(layer));
		return this;
	}

	/** 初期化
	 * @returns this
	 */
	Init(){
		this.forEach(v=>v.Init());
		return this;
	}

	/** 任意の要素を１つ取り出す
	 * @param {number|string} idx インデックスまたはタグ名
	 * @returns this
	 */
	at(idx){
		if(Number.isInteger(idx))	return this.items[idx];
		else						return this.FindWithTag(idx);
	}

	/** forEachのラッパ
	 * @param {function} predicate 述語関数
	 * @returns this
	 */
	forEach(predicate){
		this.items.forEach(predicate);
		return this;
	}

	FindWithTag(tag){
		return this.items.find(v=>v.tag===tag);
	}

	/** 座標を設定
	 * @param {number} x x座標
	 * @param {number} y y座標
	 * @returns this
	 */
	SetPosition(x,y){
		this.x	= x;
		this.y	= y;
		this.items.forEach(v=>v.Move(0,0));	//ButtonItem側でコンテナの座標を加算するためButtonItemは動かさない
		return this;
	}

	/** 相対座標を設定
	 * @param {number} x x増分
	 * @param {number} y y増分
	 * @returns this
	 */
	Move(x,y){
		return this.SetPosition(this.x+x,this.y+y);
	}

}

/********************************************************************************
 * 画像ボタンクラス
 * @class ButtonItem
 ********************************************************************************/
class ButtonItem{
	Z	= 0x0100;

	/** コンストラクタ
	 * @param {Button} container 紐付けするコンテナクラス
	 * @memberof ButtonItem
	 */
	constructor(container){		
		this.sprite		= null;
		this.container	= container;
		this.x	= 0;
		this.y	= 0;
		this.layer	- null;

		this._isButtonDown	= false;

		this.SetTag();
	}

	/**レイヤに自身を追加*/
	AddToLayer(layer){
		this.layer	= layer;
		if(!this.sprite)	return this;

		this.sprite.removeFromParent();
		layer.addChild(this.sprite);	
		this.Apply();		
		return this;
	}

	CreateSprite(res){
		this.sprite	= Sprite.CreateInstance(res);
		this.Apply();
		return this;
	}

	Apply(){
		if(!this.sprite)	return this;

		this.sprite
			.SetPosition(this.container.x+this.x,this.container.y+this.y)
			.AddToLayer(this.container.layer)
			.SetScale(1)
			.Attr({zIndex:this.Z});	
		this._ApplyEvents();
		return this;
	}

	/**座標を設定*/
	SetPosition(x,y){
		this.x	= x;
		this.y	= y;
		return this.Apply();
	}
	/**相対座標を設定*/
	Move(x,y){
		return this.SetPosition(this.x+x,this.y+y);
	}

	/** 表示設定 */
	SetVisible(isVisible){
		this.sprite.SetVisible(isVisible);
		return this;
	}
	/** 不透明度の設定 */
	SetOpacity(opacity){
		this.sprite.SetOpacity(opacity);
		return;
	}

	/** 検索用タグ */
	SetTag(tag=null){
		this.tag	= tag;
		return this;
	}

	/** イベントリスナ適用 */
	_ApplyEvents(){
		if(this.listeners==null || !this.sprite)	return this;

		cc.eventManager.removeListeners(this.sprite.entity);
		cc.eventManager.addListener(
			cc.EventListener.create({
				event			: cc.EventListener.TOUCH_ONE_BY_ONE,
				onTouchBegan	: (touch,event)=>{
					if(this.sprite.entity.isVisible() && this._EventIsOnSprite(touch,event)){
						this._isButtonDown	= true;
						if(this.listeners.onTouchBegan)	this.listeners.onTouchBegan();
					}
					return true;
				},
				onTouchEnded	: (touch,event)=>{
					if(this._isButtonDown && this.sprite.entity.isVisible() && this._EventIsOnSprite(touch,event)){
						if(this.listeners.onTouchEnded)	this.listeners.onTouchEnded();
					}
					this._isButtonDown	= false;
				},
				onTouchCanceled	: (touch,event)=>this._isButtonDown	= false,
			}),
			this.sprite.entity
		);
		return this;
	}

	/**イベントはスプライト上で発生しているか*/
	_EventIsOnSprite(touch,event){
		const target		= event.getCurrentTarget();
		const location		= target.convertToNodeSpace(touch.getLocation());
		const spriteSize	= target.getContentSize();
		const spriteRect	= cc.rect(0,0,spriteSize.width,spriteSize.height);
		return !!cc.rectContainsPoint(spriteRect,location);
	}

	/** タッチ開始のコールバックを設定
	 * @param {function} [callback=null] コールバック関数
	 * @returns this
	 * @memberof ButtonItem
	 */
	OnTouchBegan(callback=null){
		this.listeners	= this.listeners||{};
		this.listeners.onTouchBegan	= callback;
		this._ApplyEvents();
		return this;
	}
	/** タッチ終了のコールバックを設定
	 * @param {function} [callback=null] コールバック関数
	 * @returns this
	 * @memberof ButtonItem
	 */
	OnTouchEnded(callback=null){
		this.listeners	= this.listeners||{};
		this.listeners.onTouchEnded	= callback;
		this._ApplyEvents();
		return this;
	}
}

})();	//File Scope