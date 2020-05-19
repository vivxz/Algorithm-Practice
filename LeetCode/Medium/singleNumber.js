/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Example:
Input:  [1,2,1,3,2,5]
Output: [3,5]
Note:

The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/

var singleNumber = function(nums) {
  var numsTracker = {};
 for (var i = 0; i < nums.length; i++){
     if(numsTracker[nums[i]]){
         numsTracker[nums[i]]++;
     } else {
         numsTracker[nums[i]] = 1 
     }
 }
  
  var single = [];
  for (var key in numsTracker){
      if (numsTracker[key] === 1){
          single.push(key);
      }
  }
  return single;
};