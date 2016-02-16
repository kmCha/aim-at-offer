function getSmallestK(arr, k) {
	if(!arr || !(arr instanceof Array) || arr.length < 1) {
		return "第一个参数必须为长度至少为1的数组";
	}
	if(!k || typeof k !== "number" || k < 1 || k % 1 !== 0) {
		return "第二个参数必须为大于0的整数";
	}
	if(k > arr.length) {
		return "第二个参数不能大于数组长度";
	}
	var result = getArr(0, arr.length - 1);
	return result;

	function getArr(left, right) {
		var middle = partition(left, right);
		if(middle < k) {
			return getArr(middle, right);
		}
		else {
			return arr.slice(0, k);
		}
	}

	function partition(left, right) {
		var middle = arr[k - 1];
		while(left <= right) {
			while(arr[left] < middle) {
				left++;
			}
			while(arr[right] > middle) {
				right--;
			}
			if(left <= right) {
				swap(left, right);
				left++;
				right--;
			}
		}
		return left;
		function swap(left, right) {
			var middle = arr[right];
			arr[right] = arr[left];
			arr[left] = middle;
		}
	}
}