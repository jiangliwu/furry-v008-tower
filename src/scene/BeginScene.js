var BeginLayer = cc.Layer.extend({
	sprite:null,
	ctor:function () {
		this._super();
		
		return true;
	},

	showLogoAnimation : function() {
		self.logoNode = cc.Node.create();
//		this.addChild(self.logoNode);
//
//		var logoBg = extendNode(cc.LayerColor.create(cc.c4b(255, 255, 255, 255))).addTo(self.logoNode);
//		var logo = extendNode(cc.Sprite.create("loading/logo.png")).pos(320, 960 * 0.618).addTo(self.logoNode);
//
//		this.addImages();
//		vv.playBGMusic(bg1);
//		logo.runAction(cc.Sequence.create(
//				cc.CallFunc.create(function() {
//					vv.initMusic();
//				}),
//				cc.DelayTime.create(2),
//				cc.FadeOut.create(0.5),
//				cc.CallFunc.create(function() {
//					self.logoNode.removeFromParent(true);
//					self.showWelcome();
//				})
//		));
	}
	
});

var BeginScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new BeginLayer();
		this.addChild(layer);
	}
});

