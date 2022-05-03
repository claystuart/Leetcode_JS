//Name: ValidParentheses.js
//Date: 5/3/2022
//Auth: Clay Stuart
//Description: Create Parentheses checker: '()[]{}'
/*Constraints: Input string length: 1..10,000 char long and is only '()[]{}'
An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
*/

/* Pseudocode: 
* Create empty array named stack to act as LIFO stack
* Iterate over s
*   Whenever an open bracket is encountered in s, push a matching close bracket onto stack
*   Whenever a close bracket is encountered in s, push stack and compare.
* If non-match occurs before iteration completes, return false; otherwise, return true 

/**
 * @param {string} s
 * @return {boolean}
 */
//Results: Runtime: 61 ms, faster than 90.18% of JavaScript online submissions for Valid Parentheses.
//Results: Memory Usage: 43.3 MB, less than 15.31% of JavaScript online submissions for Valid Parentheses.
var isValid = function (s) {
    if (s.length <= 1 || s.length > 10000) return false;
    let stack = [];
    let compare = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ])
    for (let letter of s) {
        if (['(', '{', '['].includes(letter))
            stack.push(compare.get(letter)); //push matching bracket onto stack
        else if ([')', '}', ']'].includes(letter)) {
            let temp = stack.pop();
            if (letter == temp)
                continue;
            else
                return false;
        }
        else
            return false;
    }
    if (stack.length > 0)
        return false;
    return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("["));
console.log(isValid("(("));