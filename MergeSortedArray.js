"use strict"

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/* Results
Runtime: 74 ms, faster than 59.90% of JavaScript online submissions for Merge Sorted Array.
Memory Usage: 42.1 MB, less than 70.18% of JavaScript online submissions for Merge Sorted Array.
*/
var merge = function (nums1, m, nums2, n) {
    //Plan: Reverse iterate through both lists, selecting the highest value and putting it 
    //  at the end of nums1 and then moving the end of nums1 forward for the next highest value
    //  and repating until we've walked the entirety of nums1.
    let index = nums1.length - 1;
    m--; n--;
    while (index >= 0) {
        if(nums1[m] > nums2[n] || nums2[n] == undefined){
            nums1[index--] = nums1[m--];
        }
        else {
            nums1[index--] = nums2[n--]
        }     
    }
    return nums1;
};

console.log('Correct([1,2,2,3,5,6]) => ' + merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log('Correct([1]) => ' + merge([1], 1, [], 0));