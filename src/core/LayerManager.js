var vv = vv || {};

(function() {
	
	
	var LM = LM || {};
	
	LM.gameLayer = "gameLayer";
	LM._layers = {};
	
	LM.init = function(root) {
		LM._layers[LM.gameLayer] = new cc.Layer();
		root.addChild(LM._layers[LM.gameLayer]);
		
		
		vv.logd(" layer init success !");
	}
	
	LM.getLayer = function (args) {
		return LM._layers[args.name];
	}
	
	LM.clearLayer = function(args) {
		LM._layers[args.name].removeAllChildren(true);
	}
	
	vv.lm = LM;
	
})();