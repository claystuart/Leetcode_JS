"use strict"

/**
 * @param {number} num
 * @return {string}
 */
/**Results
 * Runtime: 121 ms, faster than 90.14% of JavaScript online submissions for Integer to Roman.
 * Memory Usage: 46.8 MB, less than 89.83% of JavaScript online submissions for Integer to Roman.
 */
var intToRoman = function (num) {
    /**Pseudocode
     * Parse number lowest to highest
     * Convert to appropriate power of ten
     * Apply to lookup table
     * Append result onto head of table
     */
    let result = "";
    let number = 0;
    let temp = 0;

    //power stands for power of ten multiplier
    for (let power = 0; num > 0; power++) {
        number = num % 10;              //get rightmost digit
        number = number * 10 ** power;      //multiply number by power of ten
        num = Math.floor(num / 10)          //remove rightmost digit from num

        // matching true against the expressions in case or default if no match
        switch (true) {
            case "I":
            case (number < 4):
                for (let x = 0; x < number; x++) result = "I" + result;
                break;
            case (number === 4):
                result = "IV";
                break;
            case (number < 9):
                result = "V";
                number = number - 5;
                for (let x = 0; x < number; x++) result = result + "I";
                break;
            case (number === 9):
                result = "IX";
                break;
            case (number < 40):
                for (let x = 0; x < number / 10; x++) result = "X" + result;
                break;
            case (number === 40):
                result = "XL" + result;
                break;
            case (number < 90):
                temp = "L";
                number = number - 50;
                for (let x = 0; x < number / 10; x++) temp = temp + 'X';
                result = temp + result;
                break;
            case (number === 90):
                result = "XC" + result;
                break;
            case (number < 400):
                for (let x = 0; x < number / 100; x++) result = "C" + result;
                break;
            case (number === 400):
                result = "CD" + result;
                break;
            case (number < 900):
                temp = "D";
                number = number - 500;
                for (let x = 0; x < number / 100; x++) temp = temp + "C";
                result = temp + result;
                break;
            case (number === 900):
                result = "CM" + result;
                break;
            case (number <= 3999):
                for (let x = 0; x < number / 1000; x++) result = "M" + result;
                break;
            default:
                console.log("Error!");
                break;
        }
    }

    return result;
};


(function () {
    // console.log("III: " + intToRoman(3));
    // console.log("IV: " + intToRoman(4));
    // console.log("VIII: " + intToRoman(8));
    // console.log("IX: " + intToRoman(9));
    // console.log("XXXIII: " + intToRoman(33));
    // console.log("X: " + intToRoman(10));
    // console.log("LVIII: " + intToRoman(58));
    // console.log("XCVIII: " + intToRoman(98));
    // console.log("C: " + intToRoman(100));
    // console.log("CCC: " + intToRoman(300));
    // console.log("CDXCVII: " + intToRoman(497));
    // console.log("CCCLI: " + intToRoman(351));
    // console.log("D: " + intToRoman(500));
    // console.log("XLIV: " + intToRoman(44));
    // console.log("LXXXIV: " + intToRoman(84));
    // console.log("DCCLXXXIV: " + intToRoman(784));
    // console.log("MCMXCIV: " + intToRoman(1994));
})()