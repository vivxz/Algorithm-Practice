/*
You’re given the pointer to the head node of a linked list and an integer to add to the list. 
Create a new node with the given integer, insert this node at the head of the linked list and 
return the new head node. The head pointer given may be null meaning that the initial list is empty.

Input Format:
You have to complete the SinglyLinkedListNode Insert(SinglyLinkedListNode head, int data) method which 
takes two arguments - the head of the linked list and the integer to insert. You should NOT read any input from stdin/console.
The input is handled by code in the editor and is as follows:
The first line contains an integer , denoting the number of elements to be inserted at the head of the list.
The next  lines contain an integer each, denoting the element to be inserted.

Constraints:
1 ≤ n ≤ 1000
1 ≤ listi ≤ 1000

Output Format:
Insert the new node at the head and return the head of the updated linked list. Do NOT print anything to stdout/console.
The output is handled by the code in the editor and it is as follows:
Print the elements of linked list from head to tail, each in a new line.

Sample Input:
5
383
484
392
975
321

Sample Output:
321
975
392
484
383
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

};

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtHead(head, data) {
  // YOUR CODE HERE
  var node = new SinglyLinkedListNode(data);
  node.next = head;
  return node;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const llistCount = parseInt(readLine(), 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    const llist_head = insertNodeAtHead(llist.head, llistItem);
    llist.head = llist_head;
  }



  printSinglyLinkedList(llist.head, '\n', ws);
  ws.write('\n');

  ws.end();
}