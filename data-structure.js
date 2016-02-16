function LinkedNode(value) {
	this.value = value;
	this.next = null;
}
function ComplexLinkedNode(value) {
	this.value = value;
	this.next = null;
	this.sibling = null;
}

function LinkedList() {
	this.head = null;
	this.print = function() {
		var head = this.head,
			result = [];
		if(head) {
			result.push(head.value);
			while(head.next) {
				head = head.next;
				result.push(head.value);
			}
			return console.log(result);
		}
		else {
			console.log("链表为空");
		}
	};
}

function TreeNode(value) {
	this.value = value || null;
	this.left = null;
	this.right = null;
}

function BinaryTree(root) {
	this.root = root || null;

	this.inOrderTraverse = function(node) {
		if(node) {
			this.inOrderTraverse(node.left);
			console.log(node.value);
			this.inOrderTraverse(node.right);
		}
	};

	this.preOrderTraverse = function(node) {
		if(node) {
			console.log(node.value);
			this.preOrderTraverse(node.left);
			this.preOrderTraverse(node.right);
		}
	};
}

function Queue() {
	var data = [];
	this.enqueue = function(elem) {
		data.push(elem);
	};
	this.dequeue = function() {
		return data.shift();
	};
	this.front = function() {
		return data[0];
	};
	this.size = function() {
		return data.length;
	};
}

function Stack() {
	var data = [];
	this.push = function(elem) {
		data.push(elem);
	};
	this.pop = function(elem) {
		return data.pop();
	};
	this.size = function() {
		return data.length;
	};
	this.top = function() {
		return data[data.length - 1];
	};
	this.clear = function() {
		data = [];
	};
}