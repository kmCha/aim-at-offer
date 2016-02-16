function numOf1Inbin(n) {
	if(typeof n !== "number" || n % 1 !== 0) {
		return "请输入整数";
	}
	var flag = 1,
		count = 0;
	while(flag) { // javascript用32位表示数字字符
		if(n & flag) count++;
		flag = flag << 1;
	}
	return count;
}