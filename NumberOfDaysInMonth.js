"use strict"

/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
/** Results
 * Runtime: 74 ms, faster than 70.00% of JavaScript online submissions for Number of Days in a Month.
 * Memory Usage: 42.3 MB, less than 20.00% of JavaScript online submissions for Number of Days in a Month.
 */
var numberOfDays = function (year, month) {
    if (month === 2) {
        if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0))
            return 29;
        else
            return 28;
    }
    else if (month === 9 || month === 4 || month === 6 || month === 11)
        return 30;
    else
        return 31;
};

(function () {
    console.log("31 " + numberOfDays(1992, 7));
    console.log("29 " + numberOfDays(2000, 2));
    console.log("28 " + numberOfDays(1900, 2));
})()