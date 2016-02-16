function printTopToButt(tree) {
	if(!tree || tree.root === null) {
		return "请输入至少有跟节点的二叉树";
	}
	var queue = new Queue(),
		result = [],
		front;
	queue.enqueue(tree.root);
	while(queue.front()) {
		front = queue.dequeue();
		result.push(front.value);
		if(front.left) {
			queue.enqueue(front.left);
		}
		if(front.right) {
			queue.enqueue(front.right);
		}
	}
	return result;
}