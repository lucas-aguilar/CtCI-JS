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
      if (n.data) printStr += '-' + n.data;
      n = n.next;
    }
    if (n.data) printStr += '-' + n.data;
    return printStr;
  }
}

const linkedList = new Node(3);
linkedList.appendToTail(5);
linkedList.appendToTail(8);
linkedList.appendToTail(5);
linkedList.appendToTail(10);
linkedList.appendToTail(2);
linkedList.appendToTail(1);

const val = 5;
console.log(partition(linkedList, val));

function partition(head, value) {
  console.log('head start');
  console.log(head.printAll());
  let partNode = null;
  const biggerList = [];
  const smallerList = [];
  if (head.data === value) {
    partNode = head;
  } else if (head.data > value) {
    biggerList.push(head);
    head = head.next;
  }
  let n = head;
  while (n.next) {
    if (!partNode && n.next.data === value) partNode = n.next;
    else {
      console.log('n.next.data');
      console.log(n.next.data);
      console.log('value');
      console.log(value);
      if (!partNode && n.next.data > value) {
        biggerList.push(n.next);
        n.next = n.next.next;
      } else if (partNode && n.next.data < value) {
        smallerList.push(n.next);
        n.next = n.next.next;
      }
      console.log('smallerList');
      console.log(smallerList);
    }
    n = n.next;
  }
  if (!partNode) return false;
  if (n.data < value) {
    smallerList.push(n);
    if (biggerList.length) {
      n.data = biggerList[0].data;
      n.next = null;
    }
  } else {
    if (biggerList.length) {
      n.next = biggerList[0];
    }
  }
  console.log('head middle');
  console.log(head.printAll());
  for (let i = 1; i < biggerList.length; i++) {
    n = n.next;
    n.next = biggerList[i];
    n.next.next = null;
  }
  console.log('biggerList');
  console.log(biggerList);
  console.log('smallerList');
  console.log(smallerList);
  console.log('head after');
  return head.printAll();
}

// SOLUTION
// Start iteration over the list
// For each node:
//  > Check if the node value is bigger than partitionValue
//    > If so, remove it form the list and add it to another list
//  > Find the partition value node
//  > After the partition node is found,
//  > start checking and separating smaller values in another list instead of bigger
// After getting to the end
// Assign the head of the bigger list into .next property of the last node
// Assign the head of the initial list to the .next property of the last node of the smaller list
