"use strict"

/**
 * @param {number} x
 * @return {number}
 */
/*Results
Runtime: 73 ms, faster than 88.45% of JavaScript online submissions for Reverse Integer.
Memory Usage: 44.2 MB, less than 36.15% of JavaScript online submissions for Reverse Integer.
*/
var reverse = function (x) {
    let result = 0;
    let negative = false;
    if (x < 0) {
        negative = true;
        x = -x;
    }
    while (x !== 0) {
        let ones = x % 10;
        result = result * 10 + ones;
        x = Math.floor(x / 10);
    }

    if(negative === true)
        result = -result;

    if (result < -2147483648 || result > 2147483647)
        return 0;
    else
        return result;
};


(function test() {
    console.log("321 " + reverse(123));
    console.log("-321 " + reverse(-123));
    console.log("21 " + reverse(-120));
})()