"use strict"

/**
 * @param {number} n
 * @return {number}
 */

//Note: this appears to be a disguised fibonacci sequence: number is sum of previous two in sequence

//Recursive version works, but times out...need iteration solution
// var climbStairs = function (n) {
//     if(n === 1){
//         return 1
//     }
//     else if (n === 2)
//         return 2;
//     else
//         return climbStairs(n - 1) + climbStairs(n-2);
// };

//Iterative Solution
/* Results
Runtime: 63 ms, faster than 80.75% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 41.5 MB, less than 95.25% of JavaScript online submissions for Climbing Stairs.
*/
var climbStairs = function (n) {
    let last = 0, middle = 1, first = 0;
    for (let x = 1; x <= n; x++) {
        first = middle + last;
        last = middle;
        middle = first;
    }
    return first;
};

//Testing
for (let x = 1; x <= 45; x++)
    console.log(`${x} = ${climbStairs(x)}`);