/*
Given a string, find the first non-repeating character in it and 
return it's index. If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

var firstUniqChar = function (s) {
  var obj = {}
  for (var key of s) {
    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
  }

  for (var j = 0; j < s.length; j++) {
    if (obj[s[j]] === 1) {
      return j
    }
  }
  return -1;
};