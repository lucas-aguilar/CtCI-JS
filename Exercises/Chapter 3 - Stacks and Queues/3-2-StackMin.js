class StackNode {
  constructor(data, next) {
    this.data = data ? data : null;
    this.next = next ? next : null;
    this.min = Number.MAX_SAFE_INTEGER;
  }
}
class Stack {
  constructor() {
    this.top = new StackNode();
  }
  pop() {
    if (!this.top) return null;
    const item = this.top.data;
    this.top = this.top.next;
    return item;
  }
  push(data) {
    const n = new StackNode(data);
    n.min = this.top.min > n.data ? n.data : this.top.min;
    n.next = this.top;
    this.top = n;
  }
  peek() {
    if (!this.top) return null;
    return this.top.data;
  }
  min() {
    if (!this.top) return null;
    return this.top.min;
  }
  isEmpty() {
    return this.top === null;
  }
}

const stack = new Stack();
stack.push(9);
stack.push(7);
console.log(stack.min());
stack.push(5);
console.log(stack.min());
stack.push(1);
console.log(stack.min());
stack.push(3);
console.log(stack.min());
stack.pop();
console.log(stack.min());
stack.pop();
console.log(stack.min());
