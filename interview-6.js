function rebuildBT(preOrder, inOrder) {
	if(preOrder.length !== inOrder.length) {
		return console.log("输入两个长度相同的数组");
	}
	var tree = new BinaryTree(),
		root = new TreeNode();
		rebuildSub = function(preOrder, inOrder, root) {
			if(preOrder.length > 1 && preOrder.length === inOrder.length) {
				var head = preOrder[0],
					i,
					l = preOrder.length,
					middle;
				for(i = 0; i < l; i++) {
					if(inOrder[i] === head) {
						middle = i;
						break;
					}
				}
				var leftIn = inOrder.slice(0, middle),
					rightIn = inOrder.slice(middle + 1, l),
					leftPre = preOrder.slice(1, leftIn.length + 1),
					rightPre = preOrder.slice(leftIn.length + 1, preOrder.length),
					leftNode,
					rightNode;

				leftNode = leftPre.length ? (new TreeNode(leftPre[0])) : null;
				rightNode = rightPre.length ? (new TreeNode(rightPre[0])) : null;
				root.value = head;
				root.left = leftNode;
				root.right = rightNode;
				rebuildSub(leftPre, leftIn, leftNode);
				rebuildSub(rightPre, rightIn, rightNode);
			}
			else if(preOrder.length === 1 && inOrder.length === 1) {
				root.value = preOrder[0];
			}
		};
	rebuildSub(preOrder, inOrder, root);
	tree.root = root;
	tree.inOrderTraverse(tree.root);
}