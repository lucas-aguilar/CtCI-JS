class StackNode {
  constructor(data, next) {
    this.data = data ? data : null;
    this.next = next ? next : null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  pop() {
    if (!this.top) return null;
    const item = this.top.data;
    this.top = this.top.next;
    return item;
  }
  push(data) {
    const n = new StackNode(data);
    n.next = this.top;
    this.top = n;
  }
  peek() {
    if (!this.top) return null;
    return this.top.data;
  }
  isEmpty() {
    return this.top === null;
  }
  logElems() {
    let n = this.top;
    console.log(n.data);
    while (n.next) {
      console.log(n.next.data);
      n = n.next;
    }
  }
}

const stack = new Stack();
stack.push(9);
stack.push(7);
stack.push(5);
stack.push(1);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
