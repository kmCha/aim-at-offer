function ifSuccessive(arr) {
	if(!arr || !(arr instanceof Array) || arr.length !== 5) {
		return "请输入长度为5的数组";
	}
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] % 1 !== 0 || arr[i] > 13 || arr[i] < 0) {
			return "数组元素必须为0～13的整数";
		}
	}
	var number = [],
		sorted = [],
		toFill = 0,
		j;
	for(i = 0; i < arr.length; i++) {
		number[arr[i]] = number[arr[i]] ? number[arr[i]] + 1 : 1;
	}
	if(number[0] > 2) {
		return "最多只有两个王";
	}
	for(i = 0; i < number.length; i++) {
		if(i !== 0 && number[i] > 1) {
			return false;
		}
		if(number[i]) {
			for(j = 0; j < number[i]; j++) {
				sorted.push(i);
			}
		}
	}
	for(i = 0; i < sorted.length - 1; i++) {
		if(sorted[i] !== 0) {
			toFill += sorted[i+1] - sorted[i] - 1;
		}
	}
	if(number[0] < toFill) {
		return false;
	}
	return true;
}