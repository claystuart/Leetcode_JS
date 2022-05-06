"use strict"

/**
 * @param {string} s
 * @return {number}
 */
/* Results:
Runtime: 55 ms, faster than 96.16% of JavaScript online submissions for Length of Last Word.
Memory Usage: 41.7 MB, less than 94.67% of JavaScript online submissions for Length of Last Word.
*/
var lengthOfLastWord = function (s) {
    //Plan: trim whitespace from the right until a letter is found
    //when found, set wordFound flat and count until we find a space or loop exits

    let wordFound = false;
    let count = 0;
    for (let x = s.length - 1; x >= 0; x--) {
        if (s[x] != " ") {          
            wordFound = true;
            count++;
        }
        else if (wordFound == false) //trim whitespace
            continue;
        else
            break;
    }
    return count;
};

console.log('Correct(5) => ' + lengthOfLastWord("Hello World"));
console.log('Correct(4) => ' + lengthOfLastWord("   fly me   to   the moon  "));
console.log('Correct(6) => ' + lengthOfLastWord("luffy is still joyboy"));
console.log('Correct(1) => ' + lengthOfLastWord("a"));
console.log('Correct(1) => ' + lengthOfLastWord("a "));