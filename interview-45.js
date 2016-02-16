function getTheLastOne(n, m) {
	if(typeof n !== "number" || typeof m !== "number" || n < 1 || m < 1 || n % 1 !== 0 || m % 1 !== 0) {
		return "输入参数必须为正整数";
	}
	var list = new LinkedList(),
		pNode = new LinkedNode(0),
		nNode,
		node;
	list.head = pNode;
	for(var i = 1; i < n; i++) {
		nNode = new LinkedNode(i);
		pNode.next = nNode;
		pNode = nNode;
	}
	pNode.next = list.head;
	node = list.head;
	while(node.next !== node) {
		if(m === 1) {
			list.head = node.next;
			pNode.next = list.head;
			node = list.head;
			continue;
		}
		for(i = 0; i < m - 2; i++) {
			node = node.next;
		}
		node.next = node.next.next;
		node = node.next;
	}
	return node.value;
}