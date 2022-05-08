/**
         * @param {string[]} strs
         * @return {string}
         */
        //Plan - Iterate over strs[], using first word as prefix 
        //Runtime: 62 ms, faster than 93.09% of JavaScript online submissions for Longest Common Prefix.
        //Memory Usage: 42.8 MB, less than 44.56% of JavaScript online submissions for Longest Common Prefix.
        var longestCommonPrefix = function (strs) {
            if (strs.length < 1) return "";
            let limit = strs[0].length;
            for (let x = 1; x < strs.length; x++) {
                for (let y = 0; y < limit; y++)
                    if (strs[0][y] != strs[x][y]) { //compare first word to rest
                        limit = y;
                    }
            }
            return strs[0].slice(0, limit);
        };

        console.log(longestCommonPrefix(["flower", "flow", "flight"]));
        console.log(longestCommonPrefix(["dog", "racecar", "car"]));
        console.log(longestCommonPrefix(["a"]));
        console.log(longestCommonPrefix([""]));