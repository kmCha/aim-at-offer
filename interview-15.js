function getLastKNode(list, k) {
	if(!list.head) {
		return "请输入非空链表";
	}
	if(typeof k !== "number" || k < 1 || k % 1 !== 0) {
		return "第二个参数必须为大于1的整数";
	}
	var count = 0,
		left = list.head,
		right = list.head;
	while(count < k - 1) {
		if(right && right.next) {
			right = right.next;
			count++;
		}
		else {
			return "输入的第二个参数超过了链表的长度";
		}
	}
	while(right.next !== null) {
		right = right.next;
		left = left.next;
	}
	return left;
}