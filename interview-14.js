function reOrderArray(arr, fn) {
	if(!Array.isArray(arr)) {
		return "请输入正确的数组";
	}
	if(arr.length === 0) {
		return "数组长度必须大于0";
	}
	var head = 0,
		tail = arr.length - 1;
	while(head <= tail) {
		if(arr[head] % 1 !== 0 || arr[tail] % 1 !== 0) {
			return "数组中每个元素必须为整数";
		}
		while(head <= tail && fn(arr[head])) {
			head++;
		}
		while(head <= tail && !fn(arr[tail])) {
			tail--;
		}
		if(head <= tail) {
			swap(head, tail);
			head++;
			tail--;
		}
	}
	return arr;

	function swap(head, tail) {
		var middle = arr[tail];
		arr[tail] = arr[head];
		arr[head] = middle;
	}
}