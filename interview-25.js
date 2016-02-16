function printPathSumEqual(tree, num) {
	if(!tree || !tree.root) {
		return "第一个参数必须为非空二叉树";
	}
	if(typeof num !== "number") {
		return "第二个参数必须为数字";
	}
	var result = [],
		path = [],
		sumArr = (function() {
		var cache = {};
		return function(arr) {
			var sum = 0;
			if(cache[arr.toString()]) {
				return cache[arr.toString()];
			}
			else {
				for(var i = 0; i < arr.length; i++) {
					sum += arr[i];
				}
				cache[arr.toString()] = sum;
				return sum;
			}
		};
	})();
	goRecursive(tree.root);
	return result;

	function goRecursive(node) {
		if(node === null) {
			return;
		}
		if(node.left === null && node.right === null) {
			path.push(node.value);
			if(sumArr(path) === num) {
				result.push(path.toString());
			}
			return path.pop();
		}
		path.push(node.value);
		goRecursive(node.left);
		goRecursive(node.right);
		path.pop();
	}
}