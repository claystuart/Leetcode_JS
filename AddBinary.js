"use strict"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/* Results:
Runtime: 73 ms, faster than 75.11% of JavaScript online submissions for Add Binary.
Memory Usage: 43.5 MB, less than 49.60% of JavaScript online submissions for Add Binary.
*/
var addBinary = function (a, b) {
    {
        //Task: add two strings of binary numbers -> return binary sum
        //Plan:
        //Create variable char carry
        //Create variable string result
        //Create variable int x set to longer input strings length
        //Create variable accumulator to hold each iteration's number
        //Iterate strings from end applying single digit binary arithmetic.
        //Build result with each iteration
        //Return result.
    }
    let carry = "0";
    let result = "";
    let temp = "";
    for (let x = a.length - 1, y = b.length - 1; x >= 0 || y >= 0 || carry === "1"; x--, y--) {
        let stringA = (x >= 0) ? a[x] : "0";
        let stringB = (y >= 0) ? b[y] : "0";
        temp = carry + stringA + stringB;

        switch (temp) {
            case "000":
                result = "0" + result;
                carry = "0";
                break;
            case "100":
            case "010":
            case "001":
                result = "1" + result;
                carry = "0";
                break;
            case "101":
            case "011":
            case "110":
                result = "0" + result;
                carry = "1";
                break;
            case "111":
                result = "1" + result;
                carry = "1"
                break;
            default:
                console.error("There's a bug somewhere!");
        }
    }
    return result;
};

console.log('Correct(100) => ' + addBinary("11", "1"));