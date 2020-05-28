// SOLUTION
// Create an array of stacks
// When the current stack hit the maximum length
// Push another stack into the array to add the element
// To pop, go to the last stack inside the array and pop it

class StackNode {
  constructor(data, next) {
    this.data = data ? data : null;
    this.next = next ? next : null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  pop() {
    if (!this.top) return null;
    const item = this.top.data;
    this.top = this.top.next;
    this.size--;
    return item;
  }
  push(data) {
    const n = new StackNode(data);
    n.next = this.top;
    this.top = n;
    this.size++;
  }
  peek() {
    if (!this.top) return null;
    return this.top.data;
  }
  isEmpty() {
    return this.top === null;
  }
  getSize() {
    return this.size;
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
class PlatesStack {
  constructor(stackMax = 10) {
    this.stackMax = stackMax;
    this.stacks = [new Stack()];
  }
  push(data) {
    let i = 0;
    while (this.stacks[i] && this.stacks[i].getSize() >= this.stackMax) {
      i++;
    }
    if (!this.stacks[i]) {
      this.stacks[i] = new Stack();
    }
    this.stacks[i].push(data);
  }
  pop() {
    const data = this.stacks[this.stacks.length - 1].pop();
    if (
      this.stacks.length > 1 &&
      this.stacks[this.stacks.length - 1].getSize() === 0
    ) {
      this.stacks.pop();
    }
    return data;
  }
  logStacks() {
    console.log('this.stacks');
    console.log(this.stacks);
  }
  logElems() {
    for (let i = 0; i < this.stacks.length; i++) {
      console.log(`Stack ${i + 1}:`);
      this.stacks[i].logElems();
    }
  }
}

const stack = new PlatesStack();
stack.push(9);
stack.push(7);
stack.push(5);
stack.push(1);
stack.push(3);
stack.push(9);
stack.push(7);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(9);
stack.push(7);
stack.push(5);
stack.push(1);
stack.push(3);

stack.logElems();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

// stack.logElems();
