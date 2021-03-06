//Description: Convert Roman Numeral to Integer
//Constraints: Only letters I V X L C D M
//Constraints: Number ranges from 1 to 3999
/**
* @param {string} s
* @return {number}
*/
// Leetcode results: Runtime: 146 ms, faster than 73.52% of JavaScript online submissions for Roman to Integer.
// Memory usage: 50.1MB, less than 12.68% of Javascript online submissions for Roman to Integer.
var romanToInt = function (s) {
    //Pseudocode:
    // Create a map named convert[string -> integer] to convert roman numerals into numeric values
    // Create variable named accumulator to accumulate final value
    // Create array named numerals
    // Split argument string (s) into array and assign to numerals
    // Create variable named register to hold temporary roman letters that get shifted off numerals

    //**logic**
    // if numerals.length <= 0, return zero
    //
    // While numerals.length > 0, shift numerals[0] into register
    // if register == V, L, D, or M, convert register and += into accumulator
    // if register == I, X, or C, it could modify next letter in numerals, so...
    // if numerals.length < 1, no letters with which to modify, so just convert register and += into accumulator.
    // else, check numerals[0] to see if it modifies with the letter in register.
    // if numerals[0] modifies with register, push numerals[0] into register and then convert register and += accumulator
    // else convert register and += accumulator
    // return final

    let convert = new Map([
        ['I', 1], ['IV', 4], ['IX', 9],
        ['V', 5],
        ['X', 10], ['XL', 40], ['XC', 90],
        ['L', 50],
        ['C', 100], ['CD', 400], ['CM', 900],
        ['D', 500],
        ['M', 1000],
    ])

    let accumulator = 0;
    let numerals = [];
    numerals = s.split("");
    let register = "";

    if (numerals.length <= 0) return 0;
    while (numerals.length > 0) {
        register = numerals.shift();
        if (['V', 'L', 'D', 'M'].includes(register))    //Non-modifiable roman numerals
            accumulator += convert.get(register);

        else if (numerals.length < 1)
            accumulator += convert.get(register);       //Modifiable, but numerals[] is empty so nothing to modify with

        else if ((register == 'I' && (numerals[0] == 'V' || numerals[0] == 'X')) ||
            (register == 'X' && (numerals[0] == 'L' || numerals[0] == 'C')) ||
            (register == 'C' && (numerals[0] == 'D' || numerals[0] == 'M'))) {
            register = register.concat(numerals.shift());
            accumulator += convert.get(register);
        }
        else
            accumulator += convert.get(register);       //Modifiable, but numerals[0] doesn't modify
    }

    return accumulator;
};

console.log(romanToInt(""));        // 0
console.log(romanToInt("VLDM"));    // 1555
console.log(romanToInt("III"));     // 3
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994