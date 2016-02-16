function getNumOfOnes(n) {
	if(!n || typeof n !== "number" || n % 1 !== 0) {
		return "请输入整数";
	}
	if(n < 1) {
		return "请输入正整数";
	}
	var count = 0,
		num;
	for(var i = 1; i <= n; i++) {
		num = i.toString();
		if(num.indexOf("1") !== -1) {
			for(var j = 0; j < num.length; j++) {
				if(num[j] === "1") {
					count++;
				}
			}
		}
	}
	return count;
}