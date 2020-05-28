class MyQueue {
  constructor() {
    this.newer = [];
    this.older = [];
  }
  add(data) {
    this.newer.push(data);
  }
  remove() {
    if (this.older.length) return this.older.pop();
    if (this.newer.length === 1) return this.newer.pop();
    while (this.newer.length > 1) {
      this.older.push(this.newer.pop());
    }
    return this.newer.pop();
  }
  log() {
    console.log('Arr 1:');
    console.log(this.newer);
    console.log('Arr 2:');
    console.log(this.older);
  }
}

const q = new MyQueue();
q.add(1);
q.add(2);
q.add('ff');
q.add('aa');
q.log();
console.log(q.remove());
console.log(q.remove());
q.log();
q.add(987);
q.log();
console.log(q.remove());
console.log(q.remove());
q.log();
console.log(q.remove());
q.log();

// []
// [a] , []
// [g] , [a]
// [t, g, a] , []
// [] , [g, t]
// [a] , [g, t]
// [r, a] , [g, t]
// [t, r, a] , [g, t] > add t
// [t, r, a] , [t] > remove (g)
// [t, r, a] , [] > remove (t)
// [] , [r,t] > remove (a)
