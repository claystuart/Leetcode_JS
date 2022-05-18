"use strict"
/**
 * @param {string} s
 * @return {string}
 */
/*Results
Runtime: 111 ms, faster than 83.61% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 45.7 MB, less than 62.18% of JavaScript online submissions for Longest Palindromic Substring.
*/
/* Explanation: utilizes the Expand Around Center algorithm.
    Basically, the function iterates through the string. For each letter forward, it uses an internal 
    function--expandAroundCenter()--to start at a center index and spread outwards, checking for 
    palindromes. It calls expandAroundCenter twice each time--one for odd and one for even--because it 
    can't know in advance if the palindrome--assuming there is one--will have an even or odd number of 
    elements.
*/
var longestPalindrome = function (s) {
    let result = "";

    //iterate through string: O(n^2)
    for (let i = 0; i < s.length; i++) {

        // check odd numbered palindrome
        let currentOdd = expandAroundCenter(s, i, i);

        //check even numbered palindrome
        let currentEven = expandAroundCenter(s, i, i + 1);

        // set longest to longer of either currentOdd or currentEven
        let longestCurrent = currentOdd.length > currentEven.length ? currentOdd : currentEven;

        // set result to longer of either longestCurrent or result
        result = longestCurrent.length > result.length ? longestCurrent : result;
    }
    return result;

    /**
     * expandAroundCenter expands out from center until no palindrome is found
     * @param {string} str 
     * @param {number} left 
     * @param {number} right 
     * @returns {string}
     */
    function expandAroundCenter(str, left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            // spread the variables out from the center checking for palindromes
            right += 1; //move right by 1
            left -= 1;  //move left by 1
        }
        // slice the qualified substring
        // slice uses half-open syntax [left,right) so left++ to undo last iteration
        return str.slice(left + 1, right);
    }
};


(function test() {
    console.log("b " + longestPalindrome("b"));
    console.log("b " + longestPalindrome("ba"));
    console.log("bab " + longestPalindrome("bab"));
    console.log("bab " + longestPalindrome("babad"));
})()