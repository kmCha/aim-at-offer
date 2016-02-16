function StackWithMin() {
	var normal = new Stack(),
		min = new Stack();
	this.pop = function() {
		min.pop();
		return normal.pop();
	};
	this.min = function() {
		return min.top();
	};
	this.push = function(num) {
		normal.push(num);
		if(num < min.top() || min.top() === undefined) {
			min.push(num);
		}
		else {
			min.push(min.top());
		}
	};
}