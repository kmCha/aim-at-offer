function minInSpinArr(arr) {
	function find(arr, left, right) {
		var middle = Math.floor((left + right) / 2);
		if(left + 1 === right) {
			return arr[right];
		}
		if(arr[middle] === arr[left] && arr[left] === arr[right]) {	// 类似[1,0,1,1,1]和[1,1,1,0,1]这种，改为顺序搜索
			for(; left < right - 1; left++) {
				if(arr[left] > arr[left + 1]) {
					return arr[left + 1];
				}
				if(left === right - 2) {		// [2,2,2,2,2]元素全相同
					return arr[right - 1];
				}
			}
		}
		if(arr[middle] <= arr[left] && arr[middle] <= arr[right]) {	// 中间数在右子数组
			return find(arr, left, middle);
		}
		if(arr[middle] >= arr[left] && arr[middle] >= arr[right]) {	// 中间数在左子数组
			return find(arr, middle, right);
		}
		if(arr[middle] >= arr[left] && arr[middle] <= arr[right]) {	// 旋转0个元素
			return arr[left];
		}
	}
	var left = 0,
		right = arr.length - 1;
	if(arr.length === 1) {				// 只有一个元素[1]
		return arr[0];
	}
	if(!arr.length) {
		return "数组不能为空";
	}
	return find(arr, left, right);
}