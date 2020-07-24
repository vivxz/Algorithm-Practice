/*
In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
Each order is represented by an "order id" (an integer).
We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

// function mergeArrays(myArray, alicesArray) {

//   // Combine the sorted arrays into one large sorted array
//   const merged = myArray.concat(alicesArray);
//   return merged.sort((a, b) => a -b);
// }


function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array

  const mergedArray = [];
  let alicesIndex = 0;
  let myIndex = 0;
  let mergedIndex = 0;

  while (mergedIndex < (myArray.length + alicesArray.length)) {
    const myEnd = myIndex >= myArray.length;
    const alicesEnd = alicesIndex >= alicesArray.length;
    if (!myEnd && (alicesEnd ||
      (myArray[myIndex] < alicesArray[alicesIndex]))) {
      mergedArray[mergedIndex] = myArray[myIndex];
      myIndex++;
    } else {
      mergedArray[mergedIndex] = alicesArray[alicesIndex];
      alicesIndex++;
    }
    mergedIndex++;
  }
  return mergedArray;
}