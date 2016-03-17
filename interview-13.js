function deleteNode(list, node) {
	var oldValue,
		head = list.head;
	// console.log(head === node);
	if(head === null) {
		throw new Error("链表头指针不能为空");
	}
	if(!node || node.next === undefined || node.value === undefined) {
		throw new Error("第二个参数必须为链表节点");
	}
	if(node.next === null) {
		if(head !== node) {
			while(head.next !== node) {
				head = head.next;
			}
			head.next = null;
			oldValue = node.value;
			node = null;
			return console.log("删除" + oldValue + "成功");
		}
		else {
			list.head = null;
			oldValue = node.value;
			node = node.next;
			return console.log("删除" + oldValue + "成功");
		}
	}
	oldValue = node.value;
	node.value = node.next.value;
	node.next = node.next.next;
	console.log("删除" + oldValue + "成功");
}