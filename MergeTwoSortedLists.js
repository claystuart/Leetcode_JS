
//Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//  Results: 
//  Runtime: 121 ms, faster than 14.75% of JavaScript online submissions for Merge Two Sorted Lists.
//  Memory Usage: 44.2 MB, less than 67.05% of JavaScript online submissions for Merge Two Sorted Lists.
var mergeTwoLists = function (list1, list2) {
    if (list1 == null)
        return list2;
    else if (list2 == null)
        return list1;

    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else{
        list2.next = mergeTwoLists(list2.next, list1)
        return list2;
    }
};




