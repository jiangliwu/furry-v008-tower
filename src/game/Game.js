function Game(args) {

}

Game._tag = "PlayGame";

Game.playGame = function(args) {
	
	vv.gameEvent.callEvent(PLAY_GAME);
	
	vv.logd("play game " + JSON.stringify(args),Game._tag);
	var root = vv.lm.getLayer({name:vv.lm.gameLayer});
	
	var map = new cc.TMXTiledMap("maps/map"+args.lvl+".tmx");
	root.addChild(map);
}