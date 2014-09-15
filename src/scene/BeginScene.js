var BeginLayer = cc.Layer.extend({
	
	_tag : "BeginLayer",
	
	ctor:function () {
		this._super();
		
		//this.showLogoAnimation();
		this.showWelcome();
		return true;
	},

	showLogoAnimation : function() {
		var self = this;
		var logoNode = extendNode(new cc.Node()).addTo(self);
		logoNode.addChild(new cc.LayerColor(cc.color(255,255,255,255)));
		
		var logo = extendNode(new cc.Sprite("load/logo.png")).addTo(logoNode);
		
		logo.attr({
			x: cc.winSize.width/2,
			y : cc.winSize.height/2
		});
		
		logo.runAction(cc.Sequence.create(
				cc.CallFunc.create(function() {
				}),
				cc.DelayTime.create(2),
				cc.FadeOut.create(0.5),
				cc.CallFunc.create(function() {
					logoNode.removeFromParent(true);
					self.showWelcome();
				})
		));
	},
	
	showWelcome : function() {
		
	}
	
});

var BeginScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new BeginLayer();
		this.addChild(layer);
	}
});

