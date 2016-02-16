function getMirrorTree(tree) {
	if(!tree || !tree.root) {
		return "请输入正确的非空二叉树";
	}
	var root = tree.root;
	exchangeChild(root);
	return tree;

	function exchangeChild(node) {
		var middle;
		if(node.left === null && node.right === null) {
			return;
		}
		middle = node.right;
		node.right = node.left;
		node.left = middle;
		if(node.left !== null) {
			exchangeChild(node.left);
		}
		if(node.right !== null) {
			exchangeChild(node.right);
		}
	}
}