function reverseList(list) {
	if(!list.head) {
		throw new Error("输入的链表不能为空");
	}
	if(list.head.next === null) {
		return list;
	}
	var left = null,
		middle = list.head,
		right = middle.next;
	while(middle.next) {
		middle.next = left;
		left = middle;
		middle = right;
		right = right.next;
	}
	middle.next = left;
	list.head = middle;
	return list;
}