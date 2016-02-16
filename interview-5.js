function LinkedList_5_1() {
	this.head = null;
	this.printFromTail = function() {
		var outStack = [];
		while(this.head.next !== null) {
			outStack.push(this.head.value);
			this.head = this.head.next;
		}
		outStack.push(this.head.value);
		var l = outStack.length;
		for(var i = 0; i < l; i++) {
			console.log(outStack.pop());
		}
	};
}

function LinkedList_5_2() {
	this.head = null;
	this.printFromTail = function(head) {
		if(head.next !== null) {
			this.printFromTail(head.next);
		}
		console.log(head.value);
	};
}