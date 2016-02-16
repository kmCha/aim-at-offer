function leftShiftString(str, num) {
	if(!str || typeof str !== "string" || str.length < 2) {
		return "旋转字符串长度至少为2";
	}
	if(typeof num !== "number" || num % 1 !== 0) {
		return "第二个参数为整数";
	}
	var index = (num % str.length) - 1,
		left = str.substring(0, index + 1),
		right = str.substring(index + 1, str.length),
		result = right.split().concat(left.split()).join("");
	return result;
}