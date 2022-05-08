//Description: Remove given element(s) in-place from an array
        //Description: Non-swapped elements should all be in first part of array
        //Description: Return length of array after removal(s)
        //Constraints: Array length: 0..100
        //Constraints: Range of numbers in array: 0..50
        //Constraints: Value to find 0..100 -> target larger than array range
        //Note: upper range of val (51..100) should be out of range of possible array values (0..50)
        //Will implement an early return for val > 50 and see if it passes submission. Note..it did work.
        /**
        * @param {number[]} nums
        * @param {number} val
        * @return {number} //elements in array after removal(s)
        */
        /*
        Runtime: 109 ms, faster than 11.66% of JavaScript online submissions for Remove Element.
        Memory Usage: 41.6 MB, less than 97.75% of JavaScript online submissions for Remove Element.
        */
        var removeElement = function (nums, val) {
            //Pseuocode:
            //Create variable index to run loop
            //Create variable tail to track where substitutions ought to occur
            //Create variable removals to count each val found (for return value)

            //**logic**
            //if nums.length < 1: return 0;
            //if val > 50: return nums.length since no removals occurred
            //while index < nums.length
            //if val not found at index && index == tail: (no vals found yet)
            //  increment both index and tail
            //if val not found at index && index != tail: (vals found previously)
            //  copy element at index into tail
            //  set element at index to null since it's been swapped
            //  increment both index and tail
            //
            //if val is found at index:
            //  set element at index to null
            //  increment index
            //  increment removals
            //
            //return index - removals

            let index = 0;
            let tail = 0;
            let removals = 0;

            //shortcut returns
            if (nums.length < 1) return 0;
            if (val > 50) return nums.length;

            while (index < nums.length) {
                if (nums[index] != val && index == tail) {        //value not found yet
                    index++;
                    tail++
                }
                else if (nums[index] != val && index != tail) {   //value found before, but not this time
                    nums[tail] = nums[index];
                    nums[index] = null;
                    index++;
                    tail++;
                }
                else {                                            //value found
                    nums[index] = null;
                    index++;
                    removals++;
                }
            }
            return (index - removals);

        };

        //Experiments
        // console.log(removeElement([], 25));
        // console.log(removeElement([1, 2, 3, 4, 5], 51));
        // console.log(removeElement([3, 2, 2, 3], 3));
        // console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
        // console.log(removeElement([3, 2, 2, 3], 3));
        // console.log(removeElement([1], 1));