
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//Note: current implementation converts to numbers, adds, and then converts back to linked list.
//Test 1565 probably uses numbers so big it exceeds the size of a double.
//Need to reimplement solution using just linked list manipulation.
var addTwoNumbers = function (l1, l2) {
    let num1 = 0, num2 = 0;
    let multiple = 1;

    while (l1 != null) {
        num1 = multiple * l1.val + num1;
        multiple *= 10;
        l1 = l1.next;
    }

    multiple = 1;
    while (l2 != null) {
        num2 = multiple * l2.val + num2;
        multiple *= 10;
        l2 = l2.next;
    }
    let sum = num1 + num2;
    //good so far

    if (sum === 0)
        return new ListNode(0);

    function makeList(number) {
        if (number > 0)
            return new ListNode(number % 10, makeList(Math.floor(number / 10)));
        else
            return;
    }

    let head = makeList(sum);

    return head;
}

function test() {
    // let a = new ListNode(2, new ListNode(4, new ListNode(3)));
    // let b = new ListNode(5, new ListNode(6, new ListNode(4)));

    // let list = addTwoNumbers(new ListNode([0]), new ListNode([0]));
    // printList(list);

    let d = arrayToList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);  
    let e = arrayToList([5,6,4]);
    let list = addTwoNumbers(d,e);
    printList(list);
}

test();

function printList(list) {
    while (list != null) {
        console.log(list.val);
        list = list.next;
    }
}

function arrayToList(array) {
    if (array.length > 0)
        return new ListNode(array.shift(), arrayToList(array));
}

