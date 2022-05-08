 //Simpler Strategy to address runtime performance using fast-runner and slow-runner
        //Runtime: 63 ms, faster than 84.56% of JavaScript online submissions for Remove Element.
        //Memory Usage: 41.9 MB, less than 83.25% of JavaScript online submissions for Remove Element.
        var removeElement = function (nums, val) {
            //slow-runner (i) and fast-runner (j)
            //slow-runner iterates ONLY when element-to-remove (val) not found
            let i = 0;
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] != val) { //Val not found: copy fast-runner into slow-runner and iterate slow-runner
                    nums[i] = nums[j];
                    i++;
                }
            }
            return i;
        }

        //Experiments
        console.log(removeElement([], 25));
        console.log(removeElement([1, 2, 3, 4, 5], 51));
        console.log(removeElement([3, 2, 2, 3], 3));
        console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
        console.log(removeElement([3, 2, 2, 3], 3));
        console.log(removeElement([1], 1));