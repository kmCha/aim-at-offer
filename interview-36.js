function getNumOfInversePair(arr) {
	if(!arr || !(arr instanceof Array) || arr.length < 1) {
		return "请输入长度至少为1的数组";
	}
	for(var i = 0; i < arr.length; i++) {
		if(typeof arr[i] !== "number") {
			return "数组元素必须为数字";
		}
	}
	var count = 0;
	merge(arr);
	return count;

	function merge(arr) {
		if(arr.length === 1) {
			return arr;
		}
		var middle = Math.floor(arr.length / 2),
			left = arr.slice(0, middle),
			right = arr.slice(middle, arr.length);
		return sort(merge(left), merge(right));

		function sort(left, right) {
			var li = left.length - 1,
				ri = right.length - 1,
				result = [];
			while(li >= 0 && ri >= 0) {
				if(left[li] > right[ri]) {
					result.unshift(left[li--]);
					count += ri + 1;
				}
				else {
					result.unshift(right[ri--]);
				}
			}
			while(li >= 0) {
				result.unshift(left[li--]);
			}
			while(ri >= 0) {
				result.unshift(right[ri--]);
			}
			return result;
		}
	}
}