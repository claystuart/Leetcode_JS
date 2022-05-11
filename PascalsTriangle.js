"use strict"

/**
 * @param {number} numRows
 * @return {number[][]}
 */
/* Results
Runtime: 49 ms, faster than 99.45% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 42.3 MB, less than 20.43% of JavaScript online submissions for Pascal's Triangle.
*/
var generate = function (numRows) {
    //return for 1
    if (numRows === 1) return [[1]];

    //calculate for rest
    let result = [[1], [1, 1]];
    if (numRows === 2) return result;

    for (let row = 3; row <= numRows; row++) {
        let template = Array(0, ...result[row - 2], 0);
        let temp = [];
        for (let x = 0, y = 1; y < template.length; x++, y++) {
            let num = template[x] + template[y];
            temp.push(num);
        }
        result.push(temp);
    }
    return result;
};

(function main() {
    // console.log(generate(1));
    // console.log(generate(2));
    console.log(generate(4));
}())