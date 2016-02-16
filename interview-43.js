function getSumAndProbability(n) {
	if(!n || typeof n !== "number" || n <= 0 || n % 1 !== 0) {
		return "请输入正整数";
	}
	var sum = 0,
		count = {},
		calculation = 0;
	cal(n);
	for(var key in count) {
		if(count.hasOwnProperty(key)) {
			count[key] = 100 * count[key] / Math.pow(6,n) + "%";
		}
	}
	return {
		result:count,
		count: "一共计算了" + calculation + "次"
	};

	function cal(n) {
		if(n === 0) {
			count[sum] = count[sum] ? count[sum] + 1 : 1;
			return;
		}
		for(var i = 1; i <= 6; i++) {
			sum += i;
			cal(n - 1);
			sum -= i;
			calculation++;
		}
	}
}