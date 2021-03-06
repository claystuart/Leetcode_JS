//Problem #9 in LeetCode
        //@param {number} x
        //@return {boolean}
        //Description: Check if integer x reads the same forwards and backwards.
        // Leetcode results: Runtime: 165 ms, faster than 87.75% of JavaScript online submissions for Palindrome.
        // Memory usage: 49.6MB, less than 99.49% pf Javascript online submissions for Palindrome Number.
        var isPalindrome = function (x) {
            if (x < 0) return false;
            else if (x < 10) return true;
            else {
                //Compare first and last
                //PopCount = Math.floor(Math.log10(number) + 1) (e.g. floor(log10(1234) + 1) = 4)
                //FirstDigit = Math.floor(number / Math.pow(10, Math.log10(number)))
                let log = Math.floor(Math.log10(x));
                while (log > 0) {
                    //compare first digit to last digit
                    let firstDigit = Math.floor(x / Math.pow(10, log));
                    let lastDigit = x % 10;
                    if (firstDigit != lastDigit) return false;

                    //shave off first digit and last digit  //e.g. 1234 -> 23
                    x = x - firstDigit * Math.pow(10, log); //e.g. 1234 - 1000 = 234
                    x = Math.floor(x / 10);                 //e.g. 234 // 10 = 23
                    log -= 2;  //subtract log by 2 to account for 2 removed digits
                }
                return true;
            }
        };

        console.log(isPalindrome(1000021));
        console.log(isPalindrome(1223443221));
        console.log(isPalindrome(-121));
        console.log(isPalindrome(10));
        console.log(isPalindrome(-121));
        console.log(isPalindrome(-121));