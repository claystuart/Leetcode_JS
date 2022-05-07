"use strict"
/**
 * @param {number} x
 * @return {number}
 */
/* Results:
Runtime: 105 ms, faster than 52.05% of JavaScript online submissions for Sqrt(x).
Memory Usage: 42.2 MB, less than 99.81% of JavaScript online submissions for Sqrt(x).
*/
var mySqrt = function (x) {

    for (var i = 0; i * i <= x; i++) /* Empty - using var for return value*/;
    return i - 1;
};

console.log('Correct(2) => ' + mySqrt(4));
console.log('Correct(2) => ' + mySqrt(8));