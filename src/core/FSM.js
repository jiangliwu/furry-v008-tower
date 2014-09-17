
var vv = vv || {};
(function() {
    
    /**
     *  fsm..
     */
	var FSM = {};	
	FSM.__stateList = {};
	FSM.__currentState = "none";
	FSM.__stateTable = {};
	FSM.__stateDebug = true;
	
	/*
     * 单条状态 {action:"a",cb:func,from:"a",to:"b"}
     */
	FSM.registerFSM = function( fsm ) {
	    this.__log(JSON.stringify(fsm));
	    for(var i in fsm )
	        this.__stateTable[fsm[i].action] = {from:fsm[i].from, to:fsm[i].to , cb : fsm[i].cb};
	}
	
	FSM.removeFSM = function() {}
	
	FSM.doAction = function(actionName,args) {
	    
	    this.__log(" -- doAction actionName -- " + actionName);
		if(this.__stateTable[actionName]){
		    if(this.__canConvert(this.__stateTable[actionName].from)){
		        this.__stateTable[actionName].cb.call(this,args);
		        this.__log(" --- [" + this.__currentState + "] to [" + this.__stateTable[actionName].to+"]");
		        this.__currentState = this.__stateTable[actionName].to;
		    }else{
		        this.__log(" -- not in states , cannot do action ["+actionName+"] from " + JSON.stringify(this.__stateTable[actionName].from));
		    }
		}else{
			this.__log(" -- cannot find action ---" + actionName);
		}
	}
	
	FSM.__canConvert = function(states) {
	    if(this.__currentState === "none") return true;
	    if(states.constructor === Array){
	        for(var i in states){
	            if(this.__currentState === states[i]) return true;
	        }
	        return false;
	    }else{
	        if(states === this.__currentState) 
	            return true;
	        return false;
	    }
    }
	
	FSM.buildAFSM = function(actionName, cb , from , to) {
        return {action:actionName,cb:cb,from:from,to:to};
    }
	FSM.__log = function(msg) {
		if(this.__stateDebug)
			vv.logd(msg,"FSM");
	}
	
	vv.fsm = function(obj) {
		Util.extend(obj,FSM);
	}
	
})();




/*
var people = cc.Layer.extend({
	a1 : "eat",
	a2 : "seat",
	a3 : "walk",
	a4 : "sleep",
	a5 : "eatend",
	
	s1 : "ready",
	s2 : "eating",
	s3 : "walking",
	s4 : "sleeping",
	ctor : function (){
		vv.fsm(this);
		
		
		this.registerFSM([
		                  {action:this.a1,cb:this.eat,from:this.s1,to:this.s2},
		                  this.buildAFSM(this.a5,this.eatEnd,this.s2,this.s1),
		                  this.buildAFSM(this.a2,this.seat,[this.s3,this.s4],this.s1),
		                  this.buildAFSM(this.a4,this.sleep,this.s1,this.s4)
		                  ]);
		
	},
	eat : function (args){
		vv.logd("eat.....");
	},
	eatEnd : function() {
	    vv.logd("eatend .... ");
    },
	seat : function() {
		vv.logd("seat ....");
	},
	walk : function (){
		vv.logd("walk....");
	},
	sleep : function (){
		vv.logd("sleep ... ");
	}
});


var a = new people();
a.doAction(a.a1);
a.doAction(a.a2);
a.doAction(a.a5);
a.doAction(a.a4);
a.doAction(a.a2);
*/