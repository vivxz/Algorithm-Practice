/*
Given an integer, write a function to determine if it is a power of two.

Example 1:
Input: 1
Output: true 
Explanation: 2⁰ = 1

Example 2:
Input: 16
Output: true
Explanation: 2⁴ = 16

Example 3:
Input: 218
Output: false
*/

var isPowerOfTwo = function(n) {
  var num = 1;
  while (num < n){
      num *= 2;
  }
  return num === n;
};