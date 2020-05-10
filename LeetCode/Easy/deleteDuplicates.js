/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3
*/

var deleteDuplicates = function(head) {    
  var current = head;
  while (current){
      if (current.next !== null  && current.val === current.next.val){
          current.next = current.next.next;
      } else {
          current = current.next;
      }
  }
  return head;
};