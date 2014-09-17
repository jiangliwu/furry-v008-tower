var Util = Util || {};


// 对象和数组的深拷贝
Util.clone = function(sObj){ 
	if(typeof sObj !== "object"){ 
		return sObj; 
	} 
	var s = {}; 
	if(sObj.constructor == Array){ 
		s = []; 
	}
	for(var i in sObj){ 
		s[i] = Util.clone(sObj[i]); 
	}
	return s; 
}

// 对象扩展，tObj被扩展对象，sObj扩展对象
Util.extend = function(tObj,sObj){ 
	for(var i in sObj){ 
		if(typeof (sObj[i]) !== "object"){ 
			tObj[i] = sObj[i];
		}else if(sObj[i] === null || sObj[i] === undefined){
			tObj[i] = sObj[i];
		}else if (sObj[i].constructor == Array){ 
			tObj[i] = Util.clone(sObj[i]);
		}else{
			tObj[i] = tObj[i] || {}; 
			Util.extend(tObj[i],sObj[i]); 
		} 
	} 
} 


function extendNode(node) {
	node.addTo = function(father, z, t) {
		father.addChild(this, z || 0, t || 0);
		return this;
	}
	return node;
}