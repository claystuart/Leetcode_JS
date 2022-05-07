"use strict"

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Constructor: Call with new
function ListNode(val, next) {
    this.val = (val === undefined) ? 0 : val;
    this.next = next === undefined ? null : next;
}

/*
Runtime: 76 ms, faster than 84.23% of JavaScript online submissions for Remove Duplicates from Sorted List.
Memory Usage: 44.2 MB, less than 72.36% of JavaScript online submissions for Remove Duplicates from Sorted List.
*/
function deleteDuplicates(head) {
    let temp = head;

    while (head != null) {
        //if a duplicate is found
        if (head.next != null && head.val == head.next.val) {
            head.next = head.next.next;
            continue;
        }

        head = head.next;
    }

    return temp;
}

//framework for testing various solutions
(function main() {
    console.log("Entry: " + [1, 1, 2]);
    let list = new ListNode(1, new ListNode(1, new ListNode(2)));
    list = deleteDuplicates(list);
    printList(list);

    console.log("\nEntry: " + [1, 1, 1]);
    list = new ListNode(1, new ListNode(1, new ListNode(1)));
    list = deleteDuplicates(list);
    printList(list);
})()

//helper function for printing list
function printList(head) {
    while (head != null) {
        console.log(head.val);
        head = head.next;
    }
}


