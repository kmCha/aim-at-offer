function getFirstSameNode(list1, list2) {
	if(!(list1 instanceof LinkedList) || !(list2 instanceof LinkedList)) {
		return "输入参数必须是链表";
	}
	var stack1 = new Stack(),
		stack2 = new Stack(),
		node1 = list1.head,
		node2 = list2.head,
		sameNode = null;
	while(node1) {
		stack1.push(node1);
		node1 = node1.next;
	}
	while(node2) {
		stack2.push(node2);
		node2 = node2.next;
	}
	while(stack1.size() && stack2.size()) {
		node1 = stack1.pop();
		node2 = stack2.pop();
		if(node1 === node2) {
			sameNode = node1;
		}
	}
	return sameNode? sameNode : "不存在共同节点";
}