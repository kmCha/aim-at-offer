function findMaxSum(arr) {
	if(!arr || !(arr instanceof Array)) {
		return "请输入数组";
	}
	var maxSum = arr[0] || 0,
		sum = arr[0] || 0,
		l = arr.length;
	for(var i = 1; i < l; i++) {
		if(sum <= 0) {
			if(arr[i] >= sum) {
				sum = arr[i];
				maxSum = arr[i];
			}
		}
		else {
			sum += arr[i];
			if(sum > maxSum) {
				maxSum = sum;
			}
		}
	}
	return maxSum;
}