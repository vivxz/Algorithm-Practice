/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

var isAnagram = function (s, t) {
  // if (s === "" && t === "") {
  //   return true;
  // }

  // s = s.split('').sort()
  // t = t.split('').sort()

  // console.log(s)
  // console.log(t)

  // console.log(s[1] === t[1])

  // for (var i = 0; i < s.length; i++) {
  //   if (s[i] !== t[i] || s.length !== t.length) {
  //     return false;
  //   } 
  // }
  // return true

  var container = {};

  if (s.length !== t.length){
    return false;
  } else if (s === "" && t === "") {
    return true;
  }

  for (var i = 0; i < s.length; i++){
    if (container[s[i]]){
      container[s[i]]++;
    } else {
      container[s[i]] = 1;
    }
  }

  for (var j = 0; j < t.length; j++){
    if (container[t[j]]){
      container[t[j]]--;
    } else {
      return false;
    }
  }

  for (var key in container){
    if (container[key] !== 0){
      return false; 
    } else {
      return true;
    }
  }
};