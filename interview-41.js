function findTwoNumbersSum(arr, num) {
	if(!arr || !(arr instanceof Array) || arr.length < 2) {
		return "第一个参数为常度至少为2的排序整数数组";
	}
	if(!num || typeof num !== "number" || num % 1 !== 0) {
		return "第二个参数必须为整数";
	}
	var left = 0,
		right = arr.length - 1,
		result = [];
	while(left < right) {
		if(arr[left] + arr[right] < num) {
			left++;
		}
		else if(arr[left] + arr[right] > num) {
			right--;
		}
		else {
			result.push(arr[left], arr[right]);
			break;
		}
	}
	return result.length ? result : "数组中不存在和为" + num + "的一对整数";
}

function findSequenceSum(num) {
	if(!num || typeof num !== "number" || num % 1 !== 0) {
		return "请输入正整数";
	}
	var left = 1,
		right = 2,
		ret = [],
		result = [];
	while(left < Math.ceil(num / 2)) {
		if(sum(left, right) < num) {
			right++;
		}
		else if(sum(left, right) > num) {
			left++;
		}
		else {
			for(var i = left; i <= right; i++) {
				result.push(i);
			}
			ret.push(result.join(","));
			result = [];
			left++;
		}
	}
	return ret.length ? ret : "没有和为" + num + "的正整数序列";

	function sum(left, right) {
		var i = left,
			result = 0;
		for(;i <= right; i++) {
			result += i;
		}
		return result;
	}
}