function getMinCombination(arr) {
	if(!arr || !(arr instanceof Array)) {
		return "请输入数组";
	}
	for(var i = 0; i < arr.length; i++) {
		if(!arr[i] || typeof arr[i] !== "number" || arr[i] % 1 !== 0 || arr[i] < 1) {
			return "数组元素必须为正整数";
		}
	}
	var combinations= [],
		result = "",
		used = [];
	getCombinations(0);
	return getMinFrom(combinations);

	function getCombinations(count) {
		if(count === arr.length) {
			combinations.push(Number(result));
			return;
		}
		for(var i = 0; i < arr.length; i++) {
			if(!used[i]) {
				used[i] = true;
				result += arr[i].toString();
				getCombinations(count + 1);
				result = result.substr(0, result.length - arr[i].toString().length);
				used[i] = false;
			}
		}
	}

	function getMinFrom(arr) {
		var min = arr[0];
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] < min) {
				min = arr[i];
			}
		}
		return min;
	}
}