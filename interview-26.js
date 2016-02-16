function copyComlexList(list) {
	if(!list || list.head === null) {
		return "请输入长度至少为1的链表";
	}
	merge(list.head);
	connectSibling(list.head);
	return split(list.head);

	function merge(node) {
		var _node;
		if(node !== null) {
			_node = new ComplexLinkedNode(node.value);
			_node.next = node.next;
			node.next = _node;
			merge(_node.next);
		}
	}
	function connectSibling(node) {
		if(node !== null) {
			if(node.sibling !== null) {
				node.next.sibling = node.sibling.next;
			}
			connectSibling(node.next.next);
		}
	}
	function split(node) {
		var newList = new LinkedList();
		newList.head = node.next;
		splitLists(node);
		return newList;

		function splitLists(node) {
			var middle;
			if(node !== null) {
				middle = node.next.next;
				if(middle === null) {
					node.next.next = middle;
				}
				else {
					node.next.next = middle.next;
				}
				node.next = middle;
				splitLists(middle);
			}
		}
	}
}