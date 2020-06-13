/*
Write a function that takes an array of characters and reverses the letters in place.

Why an array of characters instead of a string?
The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.
*/

function reverse(arrayOfChars) {
  // Reverse the input array of characters in place

  if (arrayOfChars.length <= 1){
    return arrayOfChars;
  }
  
  var left = 0;
  var right = arrayOfChars.length - 1;
  
  while (left < right) {
    var temp = arrayOfChars[left];
    arrayOfChars[left] = arrayOfChars[right];
    arrayOfChars[right] = temp;
    
    left++;
    right--;
  }
}
