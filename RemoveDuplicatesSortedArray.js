/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    /*Pseudcode:
    Create fastRunner and use in For-loop
    Create slowRunner and use for tracking next-open space for non-duplicate to get copied to
    While not at end of array
        Check the current index. 
            If fast-runner > slow-runner: (found new, non-duplicate number)
                iterate slow-runner
                copy fast-runner into slow-runner, 
                and iterate fast-runner
            Else // (duplicate)
                iterate fast-runner
    */
    let slowRunner = 0
    for(let fastRunner = 0; fastRunner < nums.length; fastRunner++){
        if(nums[fastRunner] > nums[slowRunner]){
            slowRunner++;
            nums[slowRunner] = nums[fastRunner];
        }
    }
    return slowRunner + 1;
};

removeDuplicates([1,1,2]);