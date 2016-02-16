function printToLargest(n) {
	var i, num;
	if(n <= 0) return console.log("输入必须大于0");
	if(typeof n !== "number" || n % 1 !== 0) return console.log("请输入整数");
	for(i = 0; i < 10; i++) {
		num = i + "";
		printRecursive(num, n, 1);
	}

	function printRecursive(num, length, index) {
		var i,
			numberToNext;
		if(index === length) {
			printNum(num);
			return;
		}
		for(i = 0; i < 10; i++) {
			numberToNext = num + "" + i;
			printRecursive(numberToNext, length, index + 1);
		}
	}
	function printNum(str) {
		var i = 0,
			l = str.length;
		while(i < l) {
			if(str[i] !== "0") {
				break;
			}
			i++;
		}
		if(i === l) {
			console.log("0");
		}
		else {
			str = str.substr(i, l);
			console.log(str);
		}
	}
}