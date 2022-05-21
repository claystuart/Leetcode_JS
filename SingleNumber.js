"use strict"

/**
 * @param {number[]} nums
 * @return {number}
 */
/**Results
 * Runtime: 78 ms, faster than 80.05% of JavaScript online submissions for Single Number.
 * Memory Usage: 43.2 MB, less than 87.31% of JavaScript online submissions for Single Number.
 */
var singleNumber = function (nums) {
    let result = nums[0];
    for (let x = 1; x < nums.length; x++)
        result = result ^ nums[x];

    return result;
};

(function () {
    console.log("1 " + singleNumber([2, 2, 1]));
    console.log("4 " + singleNumber([4, 1, 2, 1, 2]));
    console.log("1 " + singleNumber([1]));
})()