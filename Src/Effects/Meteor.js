/* *******************************************************************************
	隕石エフェクトクラス
********************************************************************************/
var Effects	= Effects || {};
var cc;
(function(){	//File Scope


/** @class 隕石エフェクトクラス */
Effects.Meteor	= class extends Effects.EffectBase{

	constructor(nEntities=5){
		super(nEntities);
	}

	Init(layer){
		super.Init();
		for(let i=0; i<this.nEntities; ++i){
			this.entities[i]	= {
				sprite	: Sprite.CreateInstance(rc.img.flare).AddToLayer(layer)
								.SetScale(2).Attr({zIndex:0,opacity:255}).SetColor("#FF0000").SetVisible(false),
				exist	: false,
				count	: 0,
				dx		: 0,
				dy		: 0,
			}
		}
		return this;
	}

	/** 隕石エフェクトをスポーン
	 * @returns {this}
	 */
	Spawn(x,y,spawns=true){
		if(!spawns)	return this;
		super.Spawn();

		for(let v of this.entities){
			if(v.exists)	continue;

			v.sprite.SetPosition(x,y).SetRotate(Math.random()*360).SetVisible(true);
			v.dx		= this.initialVelocity.x;
			v.dy		= NormalRandom(2)+this.initialVelocity.y;
			v.exists	= true;
			v.count		= 0;
			return this;
		};
		return this;
	}

	Update(updates=true){
		if(!updates)	return this;
		super.Update();

		for(let v of this.entities){
			if(!v.exists)	continue;

			v.sprite
				.SetPosition(v.sprite.x+v.dx,v.sprite.y+v.dy)
				.SetOpacity(255-v.count*4)
				.SetScale(1.5+0.1*v.count);
			v.dx	+= this.acceleration.x;
			v.dy	+= this.acceleration.y;
			++v.count;
			v.exists	= v.count < 60;
			v.sprite.SetVisible(v.exists);
		}
		return this;
	}
}

})();	//File Scope