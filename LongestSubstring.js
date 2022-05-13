/**
 * @param {string} s
 * @return {number}
 */
/* Details:
Runtime: 279 ms, faster than 26.48% of JavaScript online submissions 
    for Longest Substring Without Repeating Characters.
Memory Usage: 48.6 MB, less than 42.10% of JavaScript online submissions 
    for Longest Substring Without Repeating Characters.
*/
 var lengthOfLongestSubstring = function(s) {
     if(s.length === 0) return 0;

     let maxLength = -Infinity;
     let substring = new Set();

     for(let fastRunner = 0, slowRunner = 0; fastRunner < s.length; /* fastRunner++ */){
        let currentLetter = s[fastRunner];
        if(substring.has(currentLetter)){ //duplicate char found
            slowRunner++;
            fastRunner = slowRunner;
            substring.clear();
        }
        else{
            substring.add(currentLetter);
            if(substring.size > maxLength)
                maxLength = substring.size;
            fastRunner++;
        }
     }

     return maxLength;
};

(function test() {
    console.log(lengthOfLongestSubstring("abcabcbb"));
    console.log(lengthOfLongestSubstring("bbbbb"));
    console.log(lengthOfLongestSubstring("pwwkew"));
    console.log(lengthOfLongestSubstring(""));
    console.log(lengthOfLongestSubstring("aab"));
}())