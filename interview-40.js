function getSingleNumbers(arr) {
	if(!arr || !(arr instanceof Array)) {
		return "请输入数组";
	}
	var xor = arr[0],
		first = [],
		second = [],
		l = arr.length,
		index,
		result = [];
	for(var i = 1; i < l; i++) {
		xor = arr[i] ^ xor;
	}
	xor = xor.toString(2);
	for(i = xor.length - 1; i >= 0 ; i--) {
		if(xor[i] === "1") {
			index = xor.length - 1 - i;
			break;
		}
	}
	for(i = 0; i < l; i++) {
		if(arr[i].toString(2)[arr[i].toString(2).length - 1 - index] === "1") {
			first.push(arr[i]);
		}
		else {
			second.push(arr[i]);
		}
	}
	xor = first[0];
	for(i = 1; i < first.length; i++) {
		xor = first[i] ^ xor;
	}
	result.push(xor);
	xor = second[0];
	for(i = 1; i < second.length; i++) {
		xor = second[i] ^ xor;
	}
	result.push(xor);
	return result;
}