var vv = vv || {};
(function() {
	var GameEvent = GameEvent || {};
	GameEvent.___leventTable = {};
	GameEvent.___leventTableUID = 0;
	GameEvent.__tag = "GameEvent";
	GameEvent.getEventID = function(eventName) {
		var ret = GameEvent.___leventTableUID++;
		GameEvent.___leventTable[ret] = {
			func : null,
			name : eventName
		};
		return ret;
	}

	GameEvent.addEvent = function(event, func) {
		if (!GameEvent.___leventTable[event]) {
			vv.loge("you need getEventID", GameEvent.__tag);
		}
		GameEvent.___leventTable[event].func = func;
	}

	GameEvent.removeEvent = function(event) {
		if (GameEvent.___leventTable[event])
			GameEvent.___leventTable[event].func = null;
	}

	GameEvent.callEvent = function(event, args) {
		if (typeof (event) === "string") {
			throw "call Event do not support string key ";
		} else if (typeof (event) === "number") {
			if (GameEvent.___leventTable[event]
					&& GameEvent.___leventTable[event].func) {
				vv.logd("call event name = "
								+ GameEvent.___leventTable[event].name,
								GameEvent.__tag);
				return GameEvent.___leventTable[event].func(args);
			}
		} else if (typeof (event) === "object") {
			for (var i = 0; i < event.length; i++) {
				if (GameEvent.___leventTable[event[i]]
						&& GameEvent.___leventTable[event[i]].func) {
					vv.logd("call event" + i + " name = "
							+ GameEvent.___leventTable[event[i]].name,
							GameEvent.__tag);
					GameEvent.___leventTable[event[i]].func(args);
				}
			}
		}
	}
	vv.gameEvent = GameEvent;
	vv.ge = vv.GameEvent;
})();
