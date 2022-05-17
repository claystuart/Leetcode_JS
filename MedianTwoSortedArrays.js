"use strict"

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/* Details
Runtime: 113 ms, faster than 80.00% of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 45.4 MB, less than 99.67% of JavaScript online submissions for Median of Two Sorted Arrays.
*/
var findMedianSortedArrays = function (nums1, nums2) {
    let totalSize = nums1.length + nums2.length;
    let middle = totalSize >> 1;
    let resultArray = [];
    let i = 0, j = 0;

    while (resultArray.length <= middle) {
        //if nums1 element less than nums2 element OR if nums2 is out of bounds
        if (nums1[i] < nums2[j] || j >= nums2.length)
            resultArray.push(nums1[i++])
        else
            resultArray.push(nums2[j++])
    }

    if (totalSize % 2 == 0)
        return (resultArray[middle - 1] + resultArray[middle]) / 2;
    else
        return resultArray[middle];
};

(function test() {
    console.log("2: " + findMedianSortedArrays([1], [2, 3]));
    console.log(findMedianSortedArrays([2, 3], [1]));
    // console.log(findMedianSortedArrays([1, 3], [2]));
    // console.log(findMedianSortedArrays([1, 2], [3, 4]));
    // console.log(findMedianSortedArrays([], [1, 2, 3, 4]));
    // console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5]));
    // console.log(findMedianSortedArrays([4, 5, 6, 8, 9], []));
})()