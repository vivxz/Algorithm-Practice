/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in 
the array, and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

var containsDuplicate = function (nums) {
  if (nums.length === 0) {
    return false;
  }

  var obj = {};
  for (var i = nums.length - 1; i >= 0; i--) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (var key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
};