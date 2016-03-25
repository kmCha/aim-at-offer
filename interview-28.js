function getAllSequence(str) {
	if(typeof str !== "string") {
		return "请输入字符串";
	}
	if(str.length === 0) {
		return "字符串不能为空";
	}
	var result = "",
		l = str.length,
		index = 0,
		used = {},
		ret = [];
	fill(index);
	return ret;

	function fill(index) {
		if(index < l) {
			for(var i = 0; i < l; i++) {
				if(!used[str[i]]) {
					used[str[i]] = true;
					result = result.concat(str[i]);
					fill(index + 1);
					result = result.substring(0, index);
					used[str[i]] = false;
				}
			}
		}
		else {
			ret.push(result);
		}
	}
}