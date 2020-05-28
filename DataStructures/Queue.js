class QueueNode {
  constructor(data, next) {
    this.data = data ? data : null;
    this.next = next ? next : null;
  }
}
class Queue {
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
  remove() {
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

const q = new Queue();
q.add(3);
q.add(54);
q.add(96);
console.log(q.remove());
q.add(12);
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
// q.log();
