cc.game.onStart = function(){
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(480, 800, cc.ResolutionPolicy.FIXED_WIDTH);
    
    var searchPaths = [];
    searchPaths.push(jsb.fileUtils.getWritablePath() + "update/res");
    searchPaths.push("res");
    jsb.fileUtils.setSearchPaths(searchPaths);	// 优先查找 update目录下
    
    cc.director.runScene(new BeginScene());
};

cc.game.run(); // 这里加载文件