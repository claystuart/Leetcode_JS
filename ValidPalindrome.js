"use strict"
/**
 * @param {string} s
 * @return {boolean}
 */
/*Results
Runtime: 63 ms, faster than 98.68% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 44.1 MB, less than 90.44% of JavaScript online submissions for Valid Palindrome.
*/
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    for (let left = 0, right = s.length - 1; left <= right; left++, right--) {
        if (s[left] != s[right])
            return false;
    }
    return true;
};

(function main() {
    console.log(isPalindrome("A man, a plan, a canal: Panama"));
    console.log(isPalindrome("race a car"));
    console.log(isPalindrome(""));
}())