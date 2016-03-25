function quickSort(arr) {	// 快速排序
	function partition(arr, left, right) {
		var middle = Math.floor((left + right) / 2),
			num = arr[middle];
		while(left <= right) {
			while(arr[left] < num) {
				left++;
			}
			while(arr[right] > num) {
				right--;
			}
			if(left <= right) {
				swap(arr, left, right);
				left++;
				right--;
			}
		}
		return left;
	}
	function swap(arr, left, right) {
		var middle = arr[right];
		arr[right] = arr[left];
		arr[left] = middle;
	}
	function sort(arr, left, right) {
		var index = partition(arr, left, right);
		if(left < right) {
			if(index > left) {
				sort(arr, left, index - 1);
			}
			if(index < right) {
				sort(arr, index, right);
			}
		}
	}
	var left = 0,
		right = arr.length - 1;
	if(left > right) {
		return "数组不能为空";
	}
	sort(arr, left, right);
	return arr;
}

function mergeSort(arr) {	// 并归排序
	if(!arr || !(arr instanceof Array) || arr.length < 1) {
		return "请输入长度至少为1的数组";
	}
	return splitAndMerge(arr);

	function splitAndMerge(arr) {
		if(arr.length === 1) {
			return arr;
		}
		var middle = Math.floor(arr.length / 2),
			leftArr = arr.slice(0, middle),
			rightArr = arr.slice(middle, arr.length);
		return mergeAndSort(splitAndMerge(leftArr), splitAndMerge(rightArr));

		function mergeAndSort(left, right) {
			var li = 0,
				ri = 0,
				result = [];
			while(li < left.length && ri < right.length) {
				if(left[li] <= right[ri]) {
					result.push(left[li++]);
				}
				else {
					result.push(right[ri++]);
				}
			}
			while(li < left.length) {
				result.push(left[li++]);
			}
			while(ri < right.length) {
				result.push(right[ri++]);
			}
			return result;
		}
	}
}

function addRecursively(n) {	// 1+2+3+...+n
	if(n < 1) return "起始数字不能比1小";
	if(n === 1) return 1;
	return n + addRecursively(n-1);
}

function dec2Bin(num) {		// 十进制到二进制转换
	var result = [],
		remain,
		i,
		l;
	while(num !== 0) {
		remain = num % 2;
		num = Math.floor(num / 2);
		result.unshift(remain);
	}
	console.log(result);
}

function addThousandIdentifier(str) {	// 添加千分符
	if(typeof str === "number") {
		str = str + "";
	}
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

function generateGrey(N) {		// 生成格雷码
	if(typeof N !== "number" || N % 1 !== 0 || N < 1) {
		return "请输入大于0的整数";
	}
	return getGery(N);

	function getGery(N) {
		if(N === 1) {
			return ["0", "1"];
		}
		else {
			var lastArr = getGery(N - 1);
			return addToTail(lastArr, "0").concat(addToTail(lastArr.reverse(), "1"));
		}
	}
	function addToTail(arr, str) {
		var ret = [];
		for(var i = 0; i < arr.length; i++) {
			ret[i] = arr[i].concat(str);
		}
		return ret;
	}
}