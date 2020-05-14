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
      console.log('Only numbers accepted! xD');
      return 'Only numbers accepted! xD';
    }
  }

  deleteNode(d) {
    let n = this;
    const head = this;
    if (head.data == d) {
      head.data = head.next.data;
      head.next = head.next.next;
      return head;
    }
    while (n.next) {
      if (n.next.data == d) {
        n.next = n.next.next;
        return head;
      }
      n = n.next;
    }
    return head;
  }

  printAll() {
    let printStr = '';
    let n = this;
    while (n.next) {
      if (n.data) printStr += n.data;
      n = n.next;
    }
    if (n.data) printStr += n.data;
    return printStr;
  }
}

let A = new Node('l');
A.appendToTail('u');
A.appendToTail('c');
A.appendToTail('u');
A.appendToTail('l');

console.log(checkPalindrome(A));
function checkPalindrome(head) {
  let n = head;
  const values = [];
  if (n.data) values.push(n.data);
  else return false;
  while (n.next) {
    values.push(n.next.data);
    n = n.next;
  }
  n = head;
  let cur = values.pop();
  if (n.data !== cur) return false;
  while (n.next) {
    // Only the first half needs to be evaluated
    cur = values.pop();
    if (n.next.data !== cur) return false;
    n = n.next;
  }
  return true;
}

// SOLUTION
// Iterate over the list
//  > Add each element to an array
// Iterate over the list again
//  > Pop an element from the array
//  > Compare it with the current list value
//  > If false return false
// return true
