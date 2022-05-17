"use strict"
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let longest = "";
    let substring = "";

    if (s.length === 1 || isPalindrome(s))
        return s

    for (let x = 0; x < s.length; x++) {
        for (let y = s.length; y >= x; y--) {
            substring = s.slice(x, y)
            if (isPalindrome(substring) && longest.length < substring.length)
                longest = substring;
        }
        //exit early when remaining palindromes can't exceed longest
        if (s.length - x < longest.length)
            return longest;
    }
    return longest;

    /**
    * @param {string} substring
    * @return {bool}
    */
    function isPalindrome(substring) {
        for (let i = 0, y = substring.length - 1; i <= substring.length; i++, y--) {
            if (substring[i] !== substring[y])
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