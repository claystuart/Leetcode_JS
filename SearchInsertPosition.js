"use strict";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* Results
Runtime: 58 ms, faster than 92.87% of JavaScript online submissions for Search Insert Position.
Memory Usage: 42.3 MB, less than 41.10% of JavaScript online submissions for Search Insert Position.
*/
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target)
            return i;
        else if (nums[i] > target)
            return i;
    }
    return nums.length;
};

console.log('Correct(2) => ' + searchInsert([1, 3, 5, 6], 5));
console.log('Correct(1) => ' + searchInsert([1, 3, 5, 6], 2));
console.log('Correct(4) => ' + searchInsert([1, 3, 5, 6], 7));