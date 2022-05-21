"use strict"

/**
 * @param {number} n
 * @return {string[]}
 *//**Results
    Runtime: 77 ms, faster than 70.62% of JavaScript online submissions for Fizz Buzz.
    Memory Usage: 44.3 MB, less than 74.96% of JavaScript online submissions for Fizz Buzz.
*/
var fizzBuzz = function (n) {
    let result = new Array();
    for (let x = 1; x <= n; x++) {
        if (x % 3 === 0 && x % 15 === 0)
            result.push("FizzBuzz");
        else if (x % 3 === 0)
            result.push("Fizz");
        else if (x % 5 === 0)
            result.push("Buzz");
        else
            result.push(String(x));
    }
    return result;
};

(function () {
    console.log(fizzBuzz(3));
    console.log(fizzBuzz(5));
    console.log(fizzBuzz(15));
})()