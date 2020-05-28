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
class QueueNode {
  constructor(data, next) {
    this.data = data ? data : null;
    this.next = next ? next : null;
  }
}
class AnimalSingleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  add(data) {
    const item = new QueueNode(data);
    if (this.last !== null) {
      this.last.next = item;
    }
    this.last = item;
    if (this.first === null) {
      this.first = this.last;
    }
  }
  dequeueAny() {
    if (!this.first) {
      console.error('ERROR: No such element.');
      return null;
    }
    const data = this.first.data;
    this.first = this.first.next;
    if (!this.first) {
      this.last = null;
    }
    return data;
  }
  dequeueDog() {
    if (!this.first) {
      console.error('ERROR: No such element.');
      return null;
    }
    return this.dequeueType('dog');
  }
  dequeueCat() {
    if (!this.first) {
      console.error('ERROR: No such element.');
      return null;
    }
    return this.dequeueType('cat');
  }
  dequeueType(type) {
    if (this.first.data === type) {
      const data = this.first.data;
      this.first = this.first.next;
      if (!this.first) {
        this.last = null;
      }
      return data;
    }
    let data = this.first.data;
    if (data === type) {
      console.log('data');
      console.log(data);
      this.first = this.first.next;
      return data;
    }
    let n = this.first;
    while (n.next && data !== type) {
      data = n.next.data;
      if (data !== type) n = n.next;
    }
    if (data === type) {
      n.next = n.next ? n.next.next : null;
      return data;
    }
    return null;
  }
  peek() {
    if (!this.first) {
      console.error('ERROR: No such element.');
      return null;
    }
    return this.first.data;
  }
  isEmpty() {
    return this.first === null;
  }
  log() {
    let n = this.first;
    console.log(n.data);
    while (n.next) {
      console.log(n.next.data);
      n = n.next;
    }
  }
}
class AnimalDoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  add(data) {
    const item = new QueueNode(data);
    if (this.last !== null) {
      this.last.next = item;
    }
    this.last = item;
    if (this.first === null) {
      this.first = this.last;
    }
  }
  dequeueAny() {
    if (!this.first) {
      console.error('ERROR: No such element.');
      return null;
    }
    const data = this.first.data;
    this.first = this.first.next;
    if (!this.first) {
      this.last = null;
    }
    return data;
  }
  dequeueDog() {
    if (!this.first) {
      console.error('ERROR: No such element.');
      return null;
    }
    return this.dequeueType('dog');
  }
  dequeueCat() {
    if (!this.first) {
      console.error('ERROR: No such element.');
      return null;
    }
    return this.dequeueType('cat');
  }
  dequeueType(type) {
    if (this.first.data === type) {
      const data = this.first.data;
      this.first = this.first.next;
      if (!this.first) {
        this.last = null;
      }
      return data;
    }
    let data = this.first.data;
    if (data === type) {
      console.log('data');
      console.log(data);
      this.first = this.first.next;
      return data;
    }
    let n = this.first;
    while (n.next && data !== type) {
      data = n.next.data;
      if (data !== type) n = n.next;
    }
    if (data === type) {
      n.next = n.next ? n.next.next : null;
      return data;
    }
    return null;
  }
  peek() {
    if (!this.first) {
      console.error('ERROR: No such element.');
      return null;
    }
    return this.first.data;
  }
  isEmpty() {
    return this.first === null;
  }
  log() {
    let n = this.first;
    console.log(n.data);
    while (n.next) {
      console.log(n.next.data);
      n = n.next;
    }
  }
}

const q = new AnimalDoubleQueue();
q.add('cat');
q.add('dog');
q.add('cat');
q.log();
console.log('-');
console.log(q.dequeueDog());
console.log('-');
q.log();

// const q = new AnimalSingleQueue();
// q.add('cat');
// q.add('dog');
// q.add('cat');
// q.log();
// console.log('-');
// console.log(q.dequeueDog());
// console.log('-');
// q.log();
