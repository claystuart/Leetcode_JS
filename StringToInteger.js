"use strict"

/**
 * @param {string} s
 * @return {number}
 */
/* Result
Runtime: 85 ms, faster than 75.47% of JavaScript online submissions for String to Integer (atoi).
Memory Usage: 45.3 MB, less than 31.47% of JavaScript online submissions for String to Integer (atoi).
*/
var myAtoi = function (s) {
    let result = 0;
    let index = 0;
    let sign = 1;

    //trim off leading whitespace
    while (s[index] === " ") {
        index++;
    }

    if (s[index] + s[index + 1] === "+-") return 0;
    if (s[index] === "+") index++;

    //check for negative sign
    if (s[index] == "-") {
        sign = -1;
        index++;
    }

    while (s.charCodeAt(index) >= 48 && s.charCodeAt(index) <= 57) {
        result = result * 10 + (s.charCodeAt(index) - 48);
        index++;
    }
    result = result * sign;

    if (result < -2147483648)
        return -2147483648
    else if (result > 2147483647)
        return 2147483647;
    else
        return result;
};

(function test() {
    console.log("0 " + myAtoi("+-12"));
    console.log("42 " + myAtoi("+42"));
    console.log("42 " + myAtoi("42"));
    console.log("-42 " + myAtoi("   -42"));
    console.log("4193 " + myAtoi("4193 with words"));
})()