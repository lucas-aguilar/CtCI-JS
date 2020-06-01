const bottles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.1];

class singleUseScale {
  constructor(v) {
    this.val = v;
  }
  getValue() {
    return this.val;
  }
}

function findBottle(arr) {
  let i = 1;
  let total = 0;
  bottles.forEach((a) => {
    total += a * i++;
  });
  return (total - 210) / 0.1 - 1;
}

const res = findBottle(bottles);

console.log(res);
