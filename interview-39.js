function depthOfATree1(tree) {
	if(!tree || !(tree instanceof BinaryTree) || tree.root === null) {
		return "请输入非空二叉树";
	}
	var depth = 0,
		max = 0;
	inOrder(tree.root);
	return max;

	function inOrder(node) {
		if(node === null) {
			if(depth > max) {
				max = depth;
			}
			return;
		}
		depth++;
		inOrder(node.left);
		inOrder(node.right);
		depth--;
	}
}

function depthOfATree2(tree) {
	if(!tree || !(tree instanceof BinaryTree)) {
		return "请输入二叉树";
	}
	if(tree.root === null) {
		return 0;
	}
	return getDepth(tree.root);

	function getDepth(node) {
		if(node === null) {
			return 0;
		}
		var left = getDepth(node.left),
			right = getDepth(node.right);
		return 1 + max(left, right);

		function max(num1, num2) {
			if(num1 >= num2) {
				return num1;
			}
			return num2;
		}
	}
}

function isBalancedTree(tree) {
	if(!tree || !(tree instanceof BinaryTree)) {
		return "请输入二叉树";
	}
	if(tree.root === null) {
		return 0;
	}
	return ifBalanced(tree.root);

	function ifBalanced(node) {
		if(node === null) {
			return true;
		}
		var left = getDepth(node.left),
			right = getDepth(node.right);
		if(left - right > 1 || left - right < -1) {
			return false;
		}
		return ifBalanced(node.left) && ifBalanced(node.right) && true;
	}

	function getDepth(node) {
		if(node === null) {
			return 0;
		}
		var left = getDepth(node.left),
			right = getDepth(node.right);
		return 1 + max(left, right);

		function max(num1, num2) {
			if(num1 >= num2) {
				return num1;
			}
			return num2;
		}
	}
}