"use strict"

/**
 * @param {string} s
 * @return {string}
 */
/**Results
 * Runtime: 75 ms, faster than 47.00% of JavaScript online submissions for Remove Vowels from a String.
 * Memory Usage: 42.2 MB, less than 44.50% of JavaScript online submissions for Remove Vowels from a String.
 */
var removeVowels = function (s) {
    let result = "";
    let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let x = 0; x < s.length; x++)
        if (!(s[x] in vowels))
            result += s[x];

    return result;
};

(function () {
    console.log("ltcdscmmntyfrcdrs\n" + removeVowels("leetcodeisacommunityforcoders" + "\n"));
    console.log("" + removeVowels("aeiou"));
})()