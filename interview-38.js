function getNumOfValue(arr, num) {
	if(!arr || !(arr instanceof Array) || arr.length < 1) {
		return "请输入非空数组";
	}
	if(!num || typeof num !== "number") {
		return "第二个参数为数字";
	}
	var left = getLeft(0, arr.length - 1),
		right = getRight(0, arr.length - 1);
	if(left === -1) {
		return "没有这个数";
	}
	return right - left + 1;

	function getLeft(left, right) {
		if(left > right) {
			return -1;
		}
		var middle = Math.floor((left + right) / 2);
		if(arr[middle] === num) {
			if(arr[middle - 1] !== num) {
				return middle;
			}
			else {
				return getLeft(left, middle - 1);
			}
		}
		else if(arr[middle] > num) {
			return getLeft(left, middle - 1);
		}
		else {
			return getLeft(middle + 1, right);
		}
	}
	function getRight(left, right) {
		if(left > right) {
			return -1;
		}
		var middle = Math.floor((left + right) / 2);
		if(arr[middle] === num) {
			if(arr[middle + 1] !== num) {
				return middle;
			}
			else {
				return getRight(middle + 1, right);
			}
		}
		else if(arr[middle] < num) {
			return getRight(middle + 1, right);
		}
		else {
			return getRight(left, middle - 1);
		}
	}
}