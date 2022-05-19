"use strict"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/* Results
Runtime: 110 ms, faster than 63.67% of JavaScript online submissions for Zigzag Conversion.
Memory Usage: 48.6 MB, less than 45.21% of JavaScript online submissions for Zigzag Conversion.
*/
var convert = function (s, numRows) {
    if (numRows === 1)
        return s;

    let arr = new Array();
    for (let x = 0; x < numRows; x++)
        arr.push(new Array());

    for (let stringIndex = 0, arrayIndex = 0, offset = 1; stringIndex < s.length; stringIndex++) {
        arr[arrayIndex].push(s[stringIndex]);
        if (arrayIndex === 0)
            offset = 1;
        if (arrayIndex === numRows - 1)
            offset = -1;
        arrayIndex = arrayIndex + offset;
    }

    arr = arr.flat();
    return arr.join("").toString();
};



(function test() {
    console.log("AB " + convert("AB", 1));
    console.log("PAHNAPLSIIGYIR " + convert("PAYPALISHIRING", 3));
    console.log("PINALSIGYAHRPI " + convert("PAYPALISHIRING", 4));
})()