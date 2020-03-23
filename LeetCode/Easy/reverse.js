/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store 
integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when 
the reversed integer overflows.
*/

var reverse = function (x) {
  var numStr = x.toString();
  var numReverse = '';

  if (numStr[0] === '-') {
    for (var i = numStr.length - 1; i >= 1; i--) {
      numReverse += numStr[i]
    }
    numReverse = '-' + numReverse;
  } else if (numStr[numStr.length - 1] === '0') {
    for (var i = numStr.length - 2; i >= 0; i--) {
      numReverse += numStr[i]
    }
  } else {
    for (var i = numStr.length - 1; i >= 0; i--) {
      numReverse += numStr[i];
    }
  }

  if (numReverse < Math.pow(-2, 31) || numReverse > Math.pow(2, 31) - 1) {
    numReverse = 0;
  }
  return Number(numReverse);
};