"use strict"
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    //Goal: find the subarray with the largest sum
    //Pseudocode: loop through every possible combination, searching for the largest sum
    //create largestSum variable to track return value; initialize to -Infinity

    //outside loop, loops through each index in the array
    //inside loop, starts with outside loop index and sums every combination to the end
        //compare each iteration against largestSum. If greater, assign to largestSum
    //return largestSum

    
};

console.log('Correct(6) => ' + maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log('Correct(1) => ' + maxSubArray([1]));
console.log('Correct(23) => ' + maxSubArray([5,4,-1,7,8]));