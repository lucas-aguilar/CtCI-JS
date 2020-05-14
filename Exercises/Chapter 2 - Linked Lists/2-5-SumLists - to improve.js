class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  appendToTail(data) {
    if (typeof data === 'number') {
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

let A = new Node(6);
A.appendToTail(1);
A.appendToTail(7);

let B = new Node(2);
B.appendToTail(9);
B.appendToTail(5);
console.log(sumLists(A, B));
// OPTIMIZE
function sumListsReversed(a, b) {
  let m = 1;
  let total = 0;
  let A = a;
  let B = b;
  if (A.data) total += A.data;
  if (B.data) total += B.data;
  while (A.next || B.next) {
    m *= 10;
    if (A.next) {
      if (A.next.data) total += A.next.data * m;
      A.next = A.next.next;
    }
    if (B.next) {
      if (B.next.data) total += B.next.data * m;
      B.next = B.next.next;
    }
  }
  total = total.toString();
  console.log(total);
  const totalList = new Node(parseInt(total.charAt(total.length - 1)));
  for (let i = total.length - 2; i >= 0; i--) {
    totalList.appendToTail(parseInt(total.charAt(i)));
  }
  return totalList;
}
function sumLists(a, b) {
  if (!a && !b) return null;
  function getLinkedListLength(head) {
    let total = 1;
    let n = head;
    while (n.next) {
      total++;
      n = n.next;
    }
    return total;
  }
  let aLen = getLinkedListLength(a) - 1;
  let bLen = getLinkedListLength(b) - 1;
  let A = a;
  let B = b;
  let total = 0;
  if (A.data) total += A.data * 10 ** aLen;
  if (B.data) total += B.data * 10 ** bLen;
  while (A.next || B.next) {
    if (A.next) {
      if (A.next.data) {
        aLen--;
        total += A.next.data * 10 ** aLen;
      }
      A.next = A.next.next;
    }
    if (B.next) {
      if (B.next.data) {
        bLen--;
        total += B.next.data * 10 ** bLen;
      }
      B.next = B.next.next;
    }
  }
  total = total.toString();
  const totalList = new Node(parseInt(total.charAt(0)));
  for (let i = 1; i < total.length; i++) {
    totalList.appendToTail(parseInt(total.charAt(i)));
  }
  return totalList;
}

// SOLUTION FORWARD
// Iterate over each list to find each list length
// m = listLength;
// Use the same process as before, but with this formula
// In the sum iteration
//  > m--;
//  > total *= a * (10 ** m)

// SOLUTION REVERSE
// let m = 1;
// let total = 0;
// Iterate over the list
//  > a *= m
//  > b *= m
//  > total += a + b
//  > m *= 10
// Transform the result in a string
// Iterate over the digits of the result
//  > Insert each one into another linked list
