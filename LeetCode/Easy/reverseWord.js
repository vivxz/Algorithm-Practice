/*
Given a string, you need to reverse the order of characters in each word within a sentence 
while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

var reverseWords = function (s) {
  s = s.split(' ');
  var results = '';
  for (var i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      results += s[i].split('').reverse('').join('')
    } else {
      results += s[i].split('').reverse('').join('') + ' ';
    }
  }
  return results
};