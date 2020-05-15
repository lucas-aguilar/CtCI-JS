class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  appendToTail(data) {
    if (typeof data === 'string' && data.length === 1) {
      const end = new Node(data);
      let n = this;
      while (n.next) {
        n = n.next;
      }
      n.next = end;
    } else {
      console.log('Only characters accepted! xD');
      return 'Only characters accepted! xD';
    }
  }
}
function setCircularList(head, str) {
  let n = head;
  for (let i = 0; i < str.length; i++) {
    n.next = new Node(str.charAt(i));
    n = n.next;
  }
  n.next = head;
  return head;
}
function logCircularList(head, max = 8) {
  let h = head;
  for (let i = 0; i < max; i++) {
    console.log(h.data);
    h = h.next;
  }
}
const circularList = setCircularList(new Node('L'), 'oop');
logCircularList(circularList);

function loopDetection(head) {}

// SOLUTION
// Note: the node at the beggining of the loop is the "last node"
// Seems like an opportunity to use THE RUNNER technique
// Run two pointers over the list.
// If they encounter at the same node, it is a circular list
// If not return null
// ... to be continued
