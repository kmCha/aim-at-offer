function lookForNum(arr, num) {
	var i = arr.length - 1,
		j = 0;
	if(!arr.length) {
		return "必须输入二维数组";
	}
	for(var n = 0; n < arr.length; n++) {
		if(!(arr[n] instanceof Array)) {
			return "请输入正确的二维数组";
		}
		var rowLength = arr[0].length;
		if(arr[n].length !== rowLength) {
			return "二维数组每行必须一样长";
		}
	}
	if(typeof num !== "number" || num % 1 !== 0) {
		return "请输入正确的整数";
	}
	while(i >= 0 && j <= arr[0].length - 1) {
		if(arr[i][j] === num) {
			return true;
		}
		else if(arr[i][j] > num) {
			i--;
		}
		else if(arr[i][j] < num) {
			j++;
		}
	}
	return false;
}