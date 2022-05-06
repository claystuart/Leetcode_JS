"use strict"
/**
 * @param {number[]} digits
 * @return {number[]}
 */
/* Results
Runtime: 53 ms, faster than 97.90% of JavaScript online submissions for Plus One.
Memory Usage: 41.9 MB, less than 79.64% of JavaScript online submissions for Plus One.
*/
var plusOne = function (digits) {
    {
        //Assignment: Create an adder for the array
        //Pseudocode: 
        //
        //Create variable carry
        //Increment last element by one
        //
        //Resolve carry
        //iterate through digits[] in reverse order adding carry to each element
        //if carry is 1 when loop exits, unshift carry onto front of array
        //return digits
    }

    let carry = 0;
    digits[digits.length - 1]++; //increment last element by 1

    //resolve carry
    for (let x = digits.length - 1; x >= 0; x--) {
        let temp = digits[x] + carry;
        if (temp < 10) {
            digits[x] = temp;
            carry = 0;
        }
        else if (temp === 10) {
            digits[x] = 0;
            carry = 1;
        }
        else {
            digits[x] = temp - 10;
            carry = 1;
        }
    }
    if (carry === 1)
        digits.unshift(carry);
    return digits;

};

console.log('Correct([1,2,4]) => ' + plusOne([1, 2, 3]));
console.log('Correct([4,3,2,2]) => ' + plusOne([4, 3, 2, 1]));
console.log('Correct([1,0]) => ' + plusOne([9]));
console.log('Correct([9,0,0,0]) => ' + plusOne([8, 9, 9, 9]));
console.log('Correct([9,0]) => ' + plusOne([8, 9]));