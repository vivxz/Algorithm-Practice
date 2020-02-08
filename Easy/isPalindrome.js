/*
Determine whether an integer is a palindrome. An integer is a 
palindrome when it reads the same backward as forward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, 
it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

var isPalindrome = function (x) {
  var num = '';
  var pal = x.toString();
  for (var i = pal.length - 1; i >= 0; i--) {
    num += pal[i];
  }
  return Number(num) === x;
};

/*
Alternative solution without converting to string:

var isPalindrome = function(x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;

  var pop,
    reverse = 0;
  while (x != 0) {
    pop = x % 10;
    reverse = reverse * 10 + pop;
    x = Math.floor(x / 10);
  }

  return x === reverse;
};
*/