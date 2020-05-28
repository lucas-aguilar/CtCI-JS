class TripleStacks {
  constructor(stackSize = 10, stackQty = 3) {
    this.arr = new Array(stackSize * stackQty);
    this.stackSize = stackSize;
    this.stackQty = stackQty;
  }

  push(val, stackNum) {
    let i = stackNum * 10 - 10;
    const max = stackNum * 10 - 1;
    if (this.arr[max]) {
      console.error('Error: this stack is full!');
      return false;
    }
    if (!this.arr[i]) {
      this.arr[i] = val;
      return true;
    }
    let aux = this.arr[i];
    let aux2 = null;
    this.arr[i] = val;
    i++;
    while (i < max + 1) {
      if (this.arr[i] === undefined) {
        this.arr[i] = aux;
        return true;
      } else {
        aux2 = this.arr[i];
        this.arr[i] = aux;
        aux = aux2;
      }
      i++;
    }
    console.error('Error: this stack is full!');
    return false;
  }

  pop(stackNum) {
    let i = stackNum * 10 - 10;
    const data = this.arr[i];
    const max = stackNum * 10;
    this.arr[i] = undefined;
    i++;
    while (i < max) {
      if (this.arr[i] === undefined) {
        return data;
      }
      this.arr[i - 1] = this.arr[i];
      this.arr[i] = undefined;
      i++;
    }
    return data;
  }

  peek(stackNum) {
    const i = stackNum * 10 - 10;
    return this.arr[i];
  }

  log(stackNum) {
    let i = stackNum * 10 - 10;
    const max = stackNum * 10;
    while (i < max) {
      if (this.arr[i] !== undefined) {
        console.log(this.arr[i]);
        i++;
      } else return;
    }
  }
}

let stack = new TripleStacks();

// stack.push(10, 3);
// stack.push(1, 3);
// stack.push(12, 3);
// console.log('log:');
// stack.log(3);
// console.log('pop:');
// console.log(stack.pop(3));
// console.log('log:');
// stack.log(3);

stack.push(3, 1);
stack.push(2, 1);
stack.push(1, 1);
console.log('log:');
stack.log(1);
console.log('pop:');
console.log(stack.pop(1));
console.log('log:');
stack.log(1);
