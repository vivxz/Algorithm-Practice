/*
Given an array, you must increment any duplicate elements until all its elements are unique.
In addition, the sum of its elements must be the minimum possible within the rules. For
example, if arr = [3, 2, 1, 2, 7], then arr(unique) = [3, 2, 1, 4, 7] and its elements sum to a
minimal value of 3 + 2 + 1 + 4 + 7 = 17.

Function Description:
Write a function called "getMinimumUniqueSum" in the editor below to create an array of
unique elements with a minimal sum. Return the integer sum of the resulting array.

getMinimumUniqueSum has the following parameter(s):
  arr: an array of integers to process

Constraints:
  1 ≤ n ≤ 2000
  1 ≤ arr[i] ≤ 3000 where 0 ≤ i < n
*/

const getMinimumUniqueSum = (arr) => {
  var unique = [];
  var current_index = 0;
  while (unique.length < arr.length) {
    if (unique.includes(arr[current_index])) {
      arr[current_index]++;
    } else {
      unique.push(arr[current_index]);
      current_index++;
    }
  }
  return unique;
}