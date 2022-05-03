//Name: ValidParentheses.js
//Date: 5/3/2022
//Auth: Clay Stuart
//Description: Create Parentheses checker: '()[]{}'
/*Constraints: Input string length: 1..10,000 char long and is only '()[]{}'
An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length < 1 || s.length > 10000) return false;
};

isValid("()");
isValid("()[]{}");
isValid("(]");