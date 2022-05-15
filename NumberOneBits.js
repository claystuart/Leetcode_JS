/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/* Results
Runtime: 74 ms, faster than 73.73% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 42.4 MB, less than 68.51% of JavaScript online submissions for Number of 1 Bits.
*/
var hammingWeight = function (n) {
    let num = n.toString(2);
    let count = 0;
    for (let x = 0; x < num.length; x++)
        if (num[x] == 1) count++;

    return count;
};

(function test() {
    console.log(hammingWeight(00000000000000000000000000001011));
})()