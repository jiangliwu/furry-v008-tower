var vv = vv || {};

(function(){
	
	var Log = Log || {};
	Log.DEBUG = 4;
	Log.INFO = 3;
	Log.WARN = 2;
	Log.ERROR = 1;
	
	Log._defaultlvl = Log.DEBUG;
	

	
	Log.d = function(msg,tag) {
		if(Log._defaultlvl < Log.DEBUG) return;
		cc.log("[DEBUG"+ (tag?(" - "+tag):"")+"] : " + msg);
	}

	Log.i = function(msg,tag) {
		if(Log._defaultlvl < Log.INFO) return;
		cc.log("[INFO "+ (tag?(" - "+tag):"")+"] : " + msg);
	}

	Log.w = function(msg,tag) {
		if(Log._defaultlvl < Log.WARN) return;
		cc.log("[WARN "+ (tag?(" - "+tag):"")+"] : " + msg);
	}

	Log.e = function(msg,tag) {
		if(Log._defaultlvl < Log.ERROR) return;
		cc.log("[ERROR"+ (tag?(" - "+tag):"")+"] : " + msg);
	}
	
	Log.setLogLvl = function( lvl) {
		Log._defaultlvl = lvl;
	}
	
	vv.log = Log;
	vv.logd = vv.log.d;
	vv.logi = vv.log.i;
	vv.logw = vv.log.w;
	vv.loge = vv.log.e;
})();


vv.loge("a");
