/*
Given a m * n matrix grid which is sorted in non-increasing order 
both row-wise and column-wise. 

Return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0

Example 3:
Input: grid = [[1,-1],[-1,-1]]
Output: 3

Example 4:
Input: grid = [[-1]]
Output: 1
*/

var countNegatives = function (grid) {
  var count = 0;
  for (var row = 0; row < grid.length; row++) {
    for (var column = 0; column < grid[row].length; column++) {
      if (grid[row][column] < 0) {
        count++;
      };
    };
  };
  return count;
};