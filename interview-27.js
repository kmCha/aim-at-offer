function BST2List(tree) {
	if(!tree || tree.root === null) {
		return "输入必须为二叉搜索树";
	}
	var index = null;
	convert(tree.root);
	return tree;

	function convert(node) {
		node.prev = node.next = null;
		if(node.left !== null) {
			convert(node.left);
		}
		node.prev = index;
		if(index !== null) {
			index.next = node;
		}
		index = node;
		if(node.right !== null) {
			convert(node.right);
		}
	}
}