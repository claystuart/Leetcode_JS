/**
 * @param {string} s
 * @return {number}
 */
/* Details:
Runtime: 98 ms, faster than 83.24% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 45 MB, less than 90.86% of JavaScript online submissions for Longest Substring Without Repeating Characters.
*/
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;

    let maxLength = -Infinity;
    let set = new Set();
    for (let left = 0, right = 0; right < s.length; right++) {
        let currentLetter = s[right];
        if (!set.has(currentLetter)) { //found letter not in set
            set.add(currentLetter);
            if (maxLength < right - left + 1) maxLength = right - left + 1;
        }

        else { //we have a duplicate - iterate left until it moves past old duplicate
            while (s[left] != currentLetter) {
                set.delete(s[left]); //delete other letters along the way
                left++;
            }
            left++; //we need to increment once more to move past duplicate
        }
    }

    return maxLength;
};

(function test() {
    console.log(lengthOfLongestSubstring("tmmzuxt"));
    console.log(lengthOfLongestSubstring("dvdf"));
    console.log(lengthOfLongestSubstring("abcabcbb"));
    // console.log(lengthOfLongestSubstring("bbbbb"));
    // console.log(lengthOfLongestSubstring("pwwkew"));
    // console.log(lengthOfLongestSubstring(""));
    // console.log(lengthOfLongestSubstring("aab"));
}())