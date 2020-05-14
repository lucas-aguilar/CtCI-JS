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

let linkedList = new Node('L');
linkedList.appendToTail('u');
linkedList.appendToTail('c');
linkedList.appendToTail('a');
linkedList.appendToTail('s');

console.log(linkedList.printAll());
linkedList.deleteNode('c');
console.log(linkedList.printAll());
