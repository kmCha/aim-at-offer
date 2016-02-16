function QueueByStack() {
	var stack1 = new Stack(),
		stack2 = new Stack();
	this.appendTail = function(elem) {
		stack1.push(elem);
	};
	this.deleteHead = function() {
		var l = stack1.size(),
			i;
		if(!stack2.size()) {
			for(i = 0; i < l; i++) {
				stack2.push(stack1.pop());
			}
		}
		if(stack2.size() === 0) {
			return "队列已经为空";
		}
		return stack2.pop();
	};
}

function StackByQueue() {
	var queue1 = new Queue(),
		queue2 = new Queue();
	this.push = function(elem) {
		queue1.enqueue(elem);
	};
	this.pop = function() {
		var i,
			l1 = queue1.size(),
			l2 = queue2.size();
		if(!l1) {
			for(i = 0; i < l2; i++) {
				queue1.enqueue(queue2.dequeue());
			}
		}
		l1 = queue1.size();
		for(i = 0; i < l1 - 1; i++) {
			queue2.enqueue(queue1.dequeue());
		}
		if(queue1.size() === 0) {
			return "栈已经为空";
		}
		return queue1.dequeue();
	};
}