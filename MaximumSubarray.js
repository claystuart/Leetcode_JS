"use strict"
/**
 * @param {number[]} nums
 * @return {number}
 */
/* Results
Runtime: 85 ms, faster than 83.83% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 50.3 MB, less than 61.24% of JavaScript online submissions for Maximum Subarray.
*/
var maxSubArray = function (nums) {
    {//Pseudocode:
        //Goal: find the subarray with the largest sum
        //Iterate from either side, eliminating sections of the array as largest sums are found, but 
        //also tracking the maximum value found overall 
    }
    //short circuit for single element array
    if (nums.length === 1) return nums[0];

    let leftSum = -Infinity, rightSum = -Infinity, max = -Infinity;
    for (let x = 0, y = nums.length - 1; x <= y; x++, y--) {

        //guard against tricky situations where we pass maximum value
        max = Math.max(nums[x], nums[y], max, leftSum, rightSum);

        //if new value greater than previous leftSum - reset leftSum to new value
        (nums[x] > leftSum + nums[x]) ? leftSum = nums[x] : leftSum += nums[x];

        if (x == y) break; //avoids situation where x and y indices are the same

        //if new value greater than previous rightSum - reset rightSum to new value
        (nums[y] > rightSum + nums[y]) ? rightSum = nums[y] : rightSum += nums[y];
    }
    return Math.max(leftSum, rightSum, leftSum + rightSum, max);

};

console.log('Correct(5) => ' + maxSubArray([-3, 1, 0, -1, -2, 3, 2, -1]));
console.log('Correct(0) => ' + maxSubArray([-1, -2, -3, 0]));
console.log('Correct(1) => ' + maxSubArray([-2, 1]));
console.log('Correct(6) => ' + maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log('Correct(1) => ' + maxSubArray([1]));
console.log('Correct(6) => ' + maxSubArray([1, 2, 3]));
console.log('Correct(23) => ' + maxSubArray([5, 4, -1, 7, 8]));