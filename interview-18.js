function containSubTree(tree1, tree2) {
	var root1 = tree1.root,
		root2 = tree2.root;
	return contain(root1, root2);

	function contain(root1, root2) {
		if(root1 === null && root2 === null) {
			return true;
		}
		if(root1 === null) {
			return false;
		}
		var result = startWith(root1, root2);
		if(!result && root1.left !== null) {
			result = contain(root1.left, root2);
		}
		if(!result && root1.right !== null) {
			result = contain(root1.right, root2);
		}
		return result;
	}
	function startWith(index1, index2) {
		if(index1 === null && index2 !== null) {
			return false;
		}
		if(index2 === null) {
			return true;
		}
		if(index1.value === index2.value) {
			return startWith(index1.left, index2.left) && startWith(index1.right, index2.right);
		}
		if(index1.value !== index2.value) {
			return false;
		}
	}
}