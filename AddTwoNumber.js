
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
//Solved: used BigInt()
/* Results:
Runtime: 110 ms, faster than 81.35% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 49.3 MB, less than 11.06% of JavaScript online submissions for Add Two Numbers.
*/
var addTwoNumbers = function (l1, l2) {
    if (l1.val == 0 && l1.next == null && l2.val == 0 && l2.next == null)
        return (new ListNode(0));

    let num1 = BigInt(0), num2 = BigInt(0);
    let multiple = BigInt(1);

    while (l1 != null) {
        num1 = (multiple * BigInt(l1.val)) + num1;
        multiple = multiple * BigInt(10);
        l1 = l1.next;
    }

    multiple = BigInt(1);
    while (l2 != null) {
        num2 = (multiple * BigInt(l2.val)) + num2;
        multiple = multiple * BigInt(10);
        l2 = l2.next;
    }
    let sum = num1 + num2;
    //good so far

    if (sum === 0)
        return new ListNode(0);

    function makeList(number) {
        if (number > 0)
            return new ListNode(number % BigInt(10), makeList(number / BigInt(10)));
        // return new ListNode(number % BigInt(10), makeList(number / BigInt(10)));
        else
            return;
    }

    let head = makeList(sum);

    return head;
}

function test() {
    let a = new ListNode(0);
    let b = new ListNode(0);
    console.log(`a: ${a.val}, b: ${b.val}`);
    let list = addTwoNumbers(a, b);
    printList(list);

    // let d = arrayToList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    // let e = arrayToList([5, 6, 4]);
    // let list = addTwoNumbers(d, e);
    // printList(list);
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

