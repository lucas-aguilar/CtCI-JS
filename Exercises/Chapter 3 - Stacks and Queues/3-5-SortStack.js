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

// using only another stack
function sortStack(stack) {
  if (stack.isEmpty()) return null;
  const aux = new Stack();
  let data = null;
  let removed = 0;
  while (!stack.isEmpty()) {
    data = stack.pop();
    removed = 0;
    while (!aux.isEmpty() && aux.peek() > data) {
      stack.push(aux.pop());
      removed++;
    }
    aux.push(data);
    while (removed > 0) {
      aux.push(stack.pop());
      removed--;
    }
  }
  while (!aux.isEmpty()) {
    stack.push(aux.pop());
  }
}

const stack = new Stack();
stack.push(9);
stack.push(7);
stack.push(5);
stack.push(1);
stack.push(3);

console.log('stack:');
stack.logElems();

sortStack(stack);

console.log('sorted stack:');
stack.logElems();

// STEP-BY-STEP SOLUTION:
// [9,8,7,5,10,1,11] , []
// [8,7,5,10,1,11] , [9]

// [7,5,10,1,11] , [9], 8
// [9,7,5,10,1,11] , [] , 8
// [9,7,5,10,1,11] , [8]
// [7,5,10,1,11] , [9, 8]

// [5,10,1,11] , [9, 8], 7
// [9, 5,10,1,11] , [8], 7
// [8, 9, 5,10,1,11] , [], 7
// [8, 9, 5,10,1,11] , [7]
// [9, 5,10,1,11] , [8, 7]
// [5,10,1,11] , [9, 8, 7]
// [10,1,11] , [9, 8, 7], 5
// [9, 10,1,11] , [8, 7], 5
// [8, 9, 10,1,11] , [7], 5
// [7, 8, 9, 10,1,11] , [], 5
// [7, 8, 9, 10,1,11] , [5]
// [8, 9, 10,1,11] , [7, 5]
// [9, 10,1,11] , [8, 7, 5]
// [10,1,11] , [9, 8, 7, 5]
// [1,11] , [10, 9, 8, 7, 5]
// [11] , [10, 9, 8, 7, 5], 1
// [] , [11, 10, 9, 8, 7, 5], 1
// [11] , [10, 9, 8, 7, 5], 1
// [10, 11] , [9, 8, 7, 5], 1
// [9, 10, 11] , [8, 7, 5], 1
// [8, 9, 10, 11] , [7, 5], 1
// [7, 8, 9, 10, 11] , [5], 1
// [5, 7, 8, 9, 10, 11] , [], 1
// [5, 7, 8, 9, 10, 11] , [1]
// [7, 8, 9, 10, 11] , [5, 1]
// [8, 9, 10, 11] , [7, 5, 1]
// [9, 10, 11] , [8, 7, 5, 1]
// [10, 11] , [9, 8, 7, 5, 1]
// [11] , [10, 9, 8, 7, 5, 1]
// [] , [11, 10, 9, 8, 7, 5, 1]
// pop and push to the other stack to revert the order
