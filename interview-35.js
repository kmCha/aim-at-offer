function findFirstShowOnce(str) {
	if(!str || typeof str !== "string" || str.length < 1) {
		return "请输入非空字符串";
	}
	var hash = {};
	for(var i = 0; i < str.length; i++) {
		if(!hash[str[i]]) {
			hash[str[i]] = 1;
		}
		else {
			hash[str[i]]++;
		}
	}
	for(i = 0; i < str.length; i++) {
		if(hash[str[i]] === 1) {
			return str[i];
		}
	}
	return "没有仅出现一次的字符";
}