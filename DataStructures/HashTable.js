class HashTableStringKey {
  constructor() {
    this.hashObj = {};
  }
  put(key, value) {
    this.hashObj[key] = value;
  }
  get(key) {
    return this.hashObj[key];
  }
}

class HashTableIntKey {
  constructor(arrSize = 16, hashFunction) {
    const N = 37;
    this.arrSize = arrSize;
    this.table = [];
    this.defaultHashFunction = (key) => {
      let total = 0;
      for (let i = key.length - 1; i >= 0; i--) {
        total += N * key.charCodeAt(i);
      }
      if (this.table.length === 0) return 0;
      if (this.table.length === 1) return 1;
      if (this.table.length < arrSize + 1)
        return parseInt(total % this.arrSize);
      return -1;
    };
    this.hashFunction =
      hashFunction && typeof hashFunction === 'function'
        ? hashFunction
        : this.defaultHashFunction;
  }
  put(key, val) {
    const index = this.hashFunction(key);
    if (index === -1) {
      console.log('ERROR: TABLE FULL.');
      return 'ERROR: TABLE FULL.';
    }
    if (!this.table[index]) this.table[index] = [];
    this.table[index].push(val);
  }
  get(key) {
    return this.table[this.hashFunction(key)];
  }
  logTable() {
    console.log('Hash table:');
    console.log(this.table);
    console.log('Length:' + this.table.length);
  }
}

let hash = new HashTableStringKey();
hash.put('testy', { test: 'yes' });
hash.put('testo', { test: 'no' });
hash.put('testei', { test: 'ahahha' });
hash.put('tdsadastei', { test: 'ahahha' });
hash.put('123dsai', { test: 'ahahha' });
hash.put('21eee', { test: 'ahahha' });
hash.put('1i', { test: 'ahahha' });
hash.put('14y9r84i', { test: 'ahahh23323' });
hash.put('589gj', { test: 'ahahh23323' });
hash.put('gmk9823', { test: 'ahahh23323' });
hash.put('49823n', { test: 'ahahh23323' });
hash.put('23nk90234', { test: 'ahahh23323' });
hash.put('gh4', { test: 'ahahh23323' });
hash.put('htr3', { test: 'ahahh23323' });
hash.put('wqe2', { test: 'ahahh23323' });
hash.put('mfioe2', { test: 'ahahh23323' });
hash.put('dsfsd', { test: 'ahahh23323' });
hash.put('dsfsdsad2d', { test: 'ahahh23323' });
hash.put('34r', { test: 'ahahh23323' });
hash.put('1ww', { test: 'ahahh23323' });
hash.put('3', { test: '333333333' });
console.log(hash.get('dsfsd'));
hash.logTable();
