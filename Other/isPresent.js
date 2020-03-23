/*
Each node of a Binary Search Tree (BST) has an integer value and pointers to as many as two
children. The children of a parent node are referred to as the left child and the right child. The value of left child is always less than the value of its parent node, and the value of right child is always greater than or equal to the value of its parent node.

Function Description:
Write a function called "isPresent" in the editor below. The function must return 1 if the value is present in the BST, or 0 if it's not.

isPresent has the following parameter(s):
root: reference to the root node of a singly-linked list of integers
val: integer to search for

Constraints:
  1 ≤ total nodes ≤ 10
  1 ≤ val ≤ 5 × 10

/* For your reference
class Node {
  Node left, right;
  int data;
  Node(int newData) {
    left = right = null;
    data = newData;
  }
}
*/

const isPresent = (root, val) => {
  if (root.data === val) {
    return 1;
  } else if (root.data > val && root.left !== null) {
    return isPresent(root.left, val);
  } else if (root.data < val && root.right !== null) {
    return isPresent(root.right, val);
  } else {
    return 0;
  }
}