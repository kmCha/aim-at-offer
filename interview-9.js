var fib_recursive = function() {	// 斐波那契数列递归写法
	var cache = {};
	return function(n) {
		if(n < 0) return "必须输入非负数";
		if(cache[n]) return cache[n];
		cache[n] = cal(n);
		return cal(n);
		function cal(n) {
			if(n === 0) return 0;
			if(n === 1) return 1;
			if(cache[n]) return cache[n];
			cache[n] = cal(n - 1) + cal(n - 2);
			return cache[n];
		}
	};
}();

var fib_traverse = function(n) {	// 斐波那契数列循环写法
	var data = [0,1],
		i;
	if(n < 0) return "必须输入非负数";
	if(n === 1 || n === 0) {
		return data[n];
	}
	for(i = 2; i <= n; i++) {
		data[i] = data[i - 1] + data[i - 2];
	}
	return data[n];
};