"use strict"
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    {//Pseudocode:
    //Goal: find the subarray with the largest sum
    //Create leftPost and rightPost
    //loop through list, summing elements from leftPost and resetting leftPost whenever a 
    //new element is largest than previous sum. Then we just keep iterating through, looking for 
    //rightPost that gives us the largest sum.
    }
    
};

// console.log('Correct(6) => ' + maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// console.log('Correct(1) => ' + maxSubArray([1]));
// console.log('Correct(23) => ' + maxSubArray([5, 4, -1, 7, 8]));