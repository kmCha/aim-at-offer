function getUglyNumberOn(num) {
	if(!num || typeof num !== "number" || num < 1 || num % 1 !== 0) {
		return "请输入整数";
	}
	var result = [1],
		t2 = 0,
		t3 = 0,
		t5 = 0,
		max = 1;
	for(var i = 0; i < num - 1; i++) {
		max = min(result[t2]*2, result[t3]*3, result[t5]*5);
		result.push(max);
		while(result[t2]*2 <= max) {
			t2++;
		}
		while(result[t3]*3 <= max) {
			t3++;
		}
		while(result[t5]*5 <= max) {
			t5++;
		}
	}
	return max;

	function min(num1, num2, num3) {
		if(num1 <= num2 && num1 <= num3) {
			return num1;
		}
		if(num2 <= num1 && num2 <= num3) {
			return num2;
		}
		return num3;
	}
}