"use strict"

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/* Results
Runtime: 102 ms, faster than 72.57% of JavaScript online submissions for Reverse String.
Memory Usage: 49.6 MB, less than 28.84% of JavaScript online submissions for Reverse String.
*/
 var reverseString = function(s) {
    let temp = 0;

    for(let head = 0, tail = s.length-1; head < tail; head++, tail--){
        temp = s[head];
        s[head] = s[tail];
        s[tail] = temp;
    }

    return s;
};


(function test(){
    console.log(reverseString(["h","e","l","l","o"]));
    console.log(reverseString(["H","a","n","n","a","h"]));
})()
