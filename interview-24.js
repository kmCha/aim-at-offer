function isPostOrder(arr) {
	if(!(arr instanceof Array)) {
		return "请输入正确的数组";
	}
	if(arr.length < 1) {
		return "请输入长度至少为1的数组";
	}
	var start = 0,
		end = arr.length - 1;
	return compare(start, end);

	function compare(start, end) {
		if(start === end) {
			return true;
		}
		var i = start,
			last = arr[end];
		while(arr[i] < last) {
			i++;
		}
		if(i === end) {
			return compare(start, i - 1);
		}
		else if(i === start) {
			return compare(i, end - 1);
		}
		else {
			for(var j = i; j <= end - 1; j++) {
				if(arr[j] < last) {
					return false;
				}
			}
			return compare(start, i - 1) && compare(i, end - 1);
		}
	}
}