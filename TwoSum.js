/* Description:  Given an array and a target, return the indices of two different numbers that equal target.
           Constraints: Every problem has one solution and can't use same element twice.
        */
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
// Brute Force Solution: Simple, but slower
// Leetcode results: Runtime: 115 ms, faster than 48.61% of JavaScript online submissions for Two Sum.
var twoSum = function (nums, target) {
    for (let x = 0; x < nums.length; x++)
        for (let y = x + 1; y < nums.length; y++) { //let y=x+1 avoids duplicating with outer for loop
            if (nums[x] + nums[y] === target)
                return [x, y];
        }

};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 5, 5, 10], 10));

// One-pass Hash solution: More complicated, but eliminates multiple array passes, so faster. 
// Leetcode results: Runtime: 76 ms, faster than 82.91% of JavaScript online submissions for Two Sum.
/* Explanation: Iterate through array. Take complement of target-current value. 
   Use complement as key and index as value in map. Check map for complement.
   If complement is in map, then current index, plus map[complement] value will yield other index.
*/
var twoSumHash = function (nums, target) {
    let map = {};
    for (let index = 0; index < nums.length; index++) {
        complement = target - nums[index];
        if (complement in map) {
            return [index, map[complement]];
        }
        else //add value:index to map (key:value inverted from array)
        {
            map[nums[index]] = index;
        }
    }
}
console.log(twoSumHash([2, 7, 11, 15], 9));
console.log(twoSumHash([2, 5, 5, 10], 10));