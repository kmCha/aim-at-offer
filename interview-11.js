function exponent(base, exp) {
	var result,
		_exp;
	if(base === 0 && exp < 0) {
		return "底数为0时指数不能为负";
	}
	if(base === 0 && exp === 0) {
		return "0的0次方无意义";
	}
	if(!isNumber(base) || !isNumber(exp) || (exp % 1 !== 0)) {
		return "请输入正确的数字，exp必须为整数";
	}
	if(exp >= 0) {
		result = calculate(base, exp);
	}
	else {
		_exp = exp * -1;
		result = 1 / calculate(base, _exp);
	}
	return result;

	function isNumber(num) {
		return typeof num === "number";
	}
	function calculate(base, exp) {
		var i, result = 1;
		for(i = 0; i < exp; i++) {
			result *= base;
		}
		return result;
	}
}