"use strict";

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/* Results
Runtime: 67 ms, faster than 79.15% of JavaScript online submissions for Implement strStr().
Memory Usage: 41.9 MB, less than 87.91% of JavaScript online submissions for Implement strStr().
*/
var strStr = function (haystack, needle) {
    {   //Pseudocode 
        /* Shortcircuit - empty needle returns 0 
        Create fastRunner to iterate list
        Create slowRunner to mark beginning of possible match
        Create matchFound (bool) to track if we've found a match or not
        While fastRunner is not at end of list
            If first letter match found at fastRunner:
                set matchFound to true
                set slowRunner equal to fastRunner
                advance fastRunner by needle.length - 1 (to end of possible match)
                if fastRunner > haystack.length, there's no match: return -1
                else //compare the strings from the end and go backwards (avoids pathological behavior)
                    while(fastRunner >= slowRunner)
                        needleIndex = needle.length - 1;
                        if(haystack[fastRunner] == needle[needleIndex])
                            fastRunner-- and needleIndex--;
                        else
                            matchFound = false
                            fastRunner = slowRunner + 1;
                            break; // go all the way back to top while loop
                    
                    if we've exited the while loop, then the needle has been found
                        return slowRunner
            else
                fastRunner += 1
    
        If we've exited the top while loop, then needle never found, so return -1
        */
    }
    //Early exits
    if (needle.length == 0) return 0;
    if (needle.length > haystack.length) return -1;

    //Main logic
    let slowRunner = 0;
    let fastRunner = 0;
    let matchFound = false;
    while (fastRunner < haystack.length) {
        if (haystack[fastRunner] == needle[0]) { //possible match found
            matchFound = true;
            slowRunner = fastRunner;
            fastRunner = fastRunner + (needle.length - 1);
            if (fastRunner > haystack.length) return -1; //exceeded haystack length without match
            else {
                for (let needleIndex = needle.length - 1; fastRunner > slowRunner;) {
                    if (haystack[fastRunner] == needle[needleIndex]) {
                        fastRunner--;
                        needleIndex--;
                    }
                    else { //match not found
                        matchFound = false;
                        fastRunner = slowRunner + 1;
                        break;
                    }
                }

                if(matchFound)
                    return slowRunner;
            }
        }
        else //no match found so advance fastRunner and loop again
            fastRunner++;
    }
    //no match ever found
    return -1;
};

console.log('0 => ' + strStr("hello", ""));
console.log('2 => ' + strStr("hello", "ll"));
console.log('-1 => ' + strStr("aaaaa", "bba"));
console.log('2 => ' + strStr("abc", "c"));
console.log('0 => ' + strStr("mississippi", "mississippi"));
console.log('4 => ' + strStr("mississippi", "issip"));