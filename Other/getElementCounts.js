/*
Given a chemical formula (given as a string), return the count of each atom.
An atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.
1 or more digits representing the count of that element may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, H2O and H2O2 are possible, but H1O2 is impossible.
Two formulas concatenated together produce another formula. For example, H2O2He3Mg4 is also a formula.
A formula placed in parentheses, and a count (optionally added) is also a formula. For example, (H2O2) and (H2O2)3 are formulas.
Given a formula, output the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

Function Description:
Write a function called "getElementCounts" in the editor below to create a string of elements and the number of each.

getElementCounts has the following parameter(s):
  formula: The string representation of the formula

Example 1:
Input: 
formula = "H2O"
Output: "H2O"
Explanation: 
The count of elements are {'H': 2, 'O': 1}.

Example 2:
Input: 
formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: 
The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.

Example 3:
Input: 
formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
Explanation: 
The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.

Note:
  All atom names consist of lowercase letters, except for the first character which is uppercase.
  The length of formula will be in the range [1, 1000].
  formula will only consist of letters, digits, and round parentheses, and is a valid formula as defined in the problem.
*/

// creating helper function to simplify parentheses in formula
const helper = (str) => {
  // splits the string at the opening parentheses
  var parenths = str.split('(');
  // created a storage to hold contents of parentheses
  var withinParenths = {};
  // iterate over the content of the parentheses
  for (var i = 1; i < parenths.length; i++) {
    // split at the closing parentheses
    parenths[i].split(')')[0].split('').forEach((char) => {
      // iterate over every character and store it to the object with the following number as the values
      withinParenths[char] = Number(parenths[i].split(')')[1]);
    });
  }
  return withinParenths;
};

const getElementCounts = (formula) => {
  // creates an object to store the return value from helper function
  var object = {};
  // checking to see if there are any parentheses
  if (formula.includes('(')) {
    // using helper function if parentheses exists
    object = helper(formula);
    // formula holds all values before parentheses
    formula = formula.split('(')[0];
  }
  // splitting at the uppercase letter and keeping numbers as own values
  formula = formula.replace(/\d+|\(|\)/g, '~$&').split(/(?=[A-Z])|~/);
  // creating a new storage
  var obj = {};
  // iterating through the formula after splitting
  for (var i = 0; i < formula.length; i++) {
    // checking to see if the element exists and is a number
    if (formula[i] && (!isNaN(formula[i + 1]))) {
      // if element is a number then assign it to the element prior
      obj[formula[i]] = +(formula[i + 1]);
    } else {
      // else set the element to 1
      obj[formula[i]] = 1;
    }
  }
  // created a variable to hold the sorted object
  var keys = Object.keys(obj).sort().reduce((accum, curr) => {
    accum[curr] = obj[curr];
    return accum;
  }, {});

  // combining the sorted object with elements from parentheses
  var merging = { ...keys, ...object };
  return merging;
}