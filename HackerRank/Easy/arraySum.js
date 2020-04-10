/*
 * Complete the 'arraySum' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY inputs
 *  2. INTEGER_ARRAY tests
 */

/*
Output: Boolean –– true is sum is in tests else false
Input: 2 arrays
Constaints: None
Edge Cases: None that I can think of (refer to notes below)

Notes:
- 1 < array < 200
- array >= 1
*/

/*
PSEUDOCODE:
function arraySum(inputs, tests) {
    // create a varible that is false
    // iterate through the inputs array with two pointers
    // check to see if sum in included in the tests array
     // if sum is included, return true
     // else return false
}
*/

function arraySum(inputs, tests) {
  // Write your code here
  var results = false;
  for (var i = 0; i < inputs.length - 1; i++){
      for (var j = i + 1; j < inputs.length; j++){
          if (tests.includes(inputs[i] + inputs[j])){
              results = true;
          }
      }
  }
  return results
};