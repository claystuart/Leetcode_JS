"use strict"

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
/**Result
 * Runtime: 89 ms, faster than 42.64% of JavaScript online submissions for Remove Digit From Number to Maximize Result.
 * Memory Usage: 44 MB, less than 20.47% of JavaScript online submissions for Remove Digit From Number to Maximize Result.
 */
var removeDigit = function (number, digit) {
    let num = Array.from(number);
    let result = "";

    for (let x = 0; x < num.length; x++) {
        if (num[x] == digit) {
            num.splice(x, 1);
            let temp = num.join("");
            if (result < temp)
                result = temp;
            num.splice(x,0,digit);
        }
    }
    return result;
};

(function () {
    console.log("12 " + removeDigit("123", "3"));
    console.log("231 " + removeDigit("1231", "1"));
    console.log("51 " + removeDigit("551", "5"));
    console.log("13325 " + removeDigit("133235", "3"));
})()