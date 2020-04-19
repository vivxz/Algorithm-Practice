/*
Given an array containing n distinct numbers taken from 
0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:
Input: [3,0,1]
Output: 2

Example 2:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity. Could you 
implement it using only constant extra space complexity?
*/

// var missingNumber = function (nums) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   var count = 0
//   for (var i = 0; i < nums.length; i++) {
//     if (!nums.includes(i)) {
//       return i;
//     } else {
//       count++;
//     }
//   }
//   return count;
// };

// var missingNumber = function (nums) {
//   var elementSum = 0;
//   var indexSum = 0;

//   for (var i = 0; i < nums.length; i++) {
//     elementSum += nums[i];
//     indexSum += i;
//   }

//   indexSum += nums.length;
//   return indexSum - elementSum;
// };

var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b)

  for (var i = 0; i <= nums.length; i++) {
    if (nums.length === 1 && nums[0] === 0) {
      return 1;
    } else if (i !== nums[i]) {
      return i;
    }
  }
};

