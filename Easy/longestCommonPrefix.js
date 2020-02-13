/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function (strs) {
    if (strs.length === 0 || strs[0] === "") {
        return "";
    }
    var str = strs[0];
    for (var i = 0; i < strs.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (strs[i][j] !== str[j]) {
                str = str.slice(0, j)
            }
        }
    }
    return str;
};