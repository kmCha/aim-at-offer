function findMoreThanHalf(arr) {
	if(!arr || !(arr instanceof Array) || arr.length < 1) {
		return "请输入至少长度为1的数组";
	}
	var m = Math.floor((arr.length - 1) / 2),
		middle = findMiddle(0, arr.length - 1);
	return isMoreThanHalf(middle) ? middle : "不存在这样的数";

	function findMiddle(left, right) {
		var index = partition(left, right);
		if(index > m) {
			return findMiddle(left, index - 1);
		}
		if(index < m) {
			return findMiddle(index, right);
		}
		if(index === m) {
			return arr[index];
		}

		function partition(left, right) {
			var middle = arr[Math.floor((left + right)/2)];
			while(left < right) {
				while(arr[left] <= arr[middle] && left < right) {
					left++;
				}
				while(arr[right] > arr[middle]) {
					right--;
				}
				if(left < right) {
					swap(left, right);
					left++;
					right--;
				}
			}
			return left;
		}
		function swap(left, right) {
			var middle = arr[right];
			arr[right] = arr[left];
			arr[left] = middle;
		}
	}

	function isMoreThanHalf(num) {
		var count = 0,
			i,
			l = arr.length;
		for(i = 0; i < l; i++) {
			if(arr[i] === num) {
				count++;
			}
		}
		if(count > l/2) {
			return true;
		}
		return false;
	}
}

function findMoreThanHalf2(arr) {
	if(!arr || !(arr instanceof Array) || arr.length < 1) {
		return "请输入至少长度为1的数组";
	}
	var number = arr[0],
		count = 1,
		l = arr.length;
	for(var i = 1; i < l; i++) {
		if(arr[i] !== number) {
			count--;
			if(count === 0) {
				count = 1;
				number = arr[i];
			}
		}
		else {
			count++;
		}
	}
	return isMoreThanHalf(number) ? number : "不存在";

	function isMoreThanHalf(num) {
		var count = 0,
			i,
			l = arr.length;
		for(i = 0; i < l; i++) {
			if(arr[i] === num) {
				count++;
			}
		}
		if(count > l/2) {
			return true;
		}
		return false;
	}
}