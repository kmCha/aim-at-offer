function inFixesOut(arrIn, arrOut) {
	if(!(arrIn instanceof Array) || !(arrOut instanceof Array)) {
		throw new Error("输入的序列必须为数组");
	}
	if(arrIn.length !== arrOut.length) {
		throw new Error("输入的两个序列长度必须相同");
	}
	var l = arrIn.length,
		i,
		j = 0,
		stack = new Stack();
	for(i = 0; i < l; i++) {
		stack.push(arrIn[i]);
		if(stack.top() === arrOut[j]) {
			stack.pop();
			j++;
		}
	}
	for(; j < l; j++) {
		if(stack.top() !== arrOut[j]) {
			return false;
		}
		stack.pop();
	}
	return true;
}