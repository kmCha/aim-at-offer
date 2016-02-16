function concatOrderedList(list1, list2) {
	var list = new LinkedList();
	if(!list1.head && !list2.head) {
		return list;
	}
	if(!list1.head) {
		list.head = list2.head;
		return list;
	}
	if(!list2.head) {
		list.head = list1.head;
		return list;
	}
	list.head = list1.head.value  <= list2.head.value ? list1.head : list2.head;
	while(list1.head && list2.head) {
		if(list1.head.value <= list2.head.value) {
			changeLink(list1, list2);
		}
		else {
			changeLink(list2, list1);
		}
	}
	return list;

	function changeLink(smallList, largeList) {
		if(smallList.head.next === null) {
			smallList.head.next = largeList.head;
			smallList.head = null;
			return;
		}
		var middle;
		if(smallList.head.next.value > largeList.head.value) {
			middle = smallList.head.next;
			smallList.head.next = largeList.head;
			smallList.head = middle;
		}
		else {
			smallList.head = smallList.head.next;
		}
	}
}