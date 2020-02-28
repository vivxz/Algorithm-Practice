/*
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:
Input: 2.00000, 10
Output: 1024.00000

Example 2:
Input: 2.10000, 3
Output: 9.26100

Example 3:
Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range 
[−231, 231 − 1]
*/

var myPow = function(x, n){
  if (n === 0) {
    return 1;
  }

  if (n === 1){
    return x;
  }

  if (x === 0){
    return 0;
  }

  var pow = myPow(x * x, Math.floor(n/2));
  if (n > 0) {
    if (n % 2 === 0){
      return pow;
    } else {
      return x * pow;
    }
  } else {
    return myPow(1/x, -n)
  }
};

/*
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  var absoluteN = Math.abs(n);
  var results;
  if (absoluteN % 2 === 0) {
    results = myPow(x * x, absoluteN / 2)
  } else {
    results = myPow(x * x, (absoluteN - 1) / 2) * x;
  }

  if (n < 0) {
    return 1 / results;
  } else {
    return results;
  }
};
*/

/*
var myPow = function(x, n) {
  return Math.pow(x,n)
};
*/
