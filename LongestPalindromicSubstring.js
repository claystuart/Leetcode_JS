"use strict"
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let longest = "";
    let substring = "";

    if (isPalindrome(s))
        return s

    for (let x = 0; x < s.length; x++) {
        for (let y = s.length; y >= x; y--) {
            substring = s.slice(x, y)
            if (isPalindrome(substring) && longest.length < substring.length)
                longest = substring;
        }

    }
    return longest;

    /**
    * @param {string} s
    * @return {string}
    */
    function isPalindrome(substring) {
        for (let x = 0, y = substring.length - 1; x <= substring.length; x++, y--) {
            if (substring[x] !== substring[y])
                return false;
        }
        return true;
    }
};


(function test() {
    console.log("bab " + longestPalindrome("babad"));
    console.log("bb " + longestPalindrome("cbbd"));
    console.log("a " + longestPalindrome("a"));
})()