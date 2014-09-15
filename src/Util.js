var Util = Util || {};





function extendNode(node) {
	node.addTo = function(father, z, t) {
		father.addChild(this, z || 0, t || 0);
		return this;
	}
	
	/**
	 * @type cc.Node()
	 */
	return node;
}