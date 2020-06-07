// O(b) one liner
function recursiveMultiplyOneLiner(a, b, total = 0) {
  return a == 0 || b == 0
    ? total
    : recursiveMultiplyOneLiner(a, b - 1, total + a);
}

// O(log n) optimized
function recursiveMultiply(a, b) {
  const bigger = a < b ? b : a;
  const smaller = a < b ? a : b;
  return minProductHelper(smaller, bigger);
}
function minProductHelper(smaller, bigger) {
  if (smaller == 0) return 0;
  else if (smaller == 1) return bigger;

  const s = smaller >> 1; // Math.floor(smaller/2)
  const halfProd = minProductHelper(s, bigger);

  if (smaller % 2 == 0) {
    return halfProd + halfProd;
  } else {
    return halfProd + halfProd + bigger;
  }
}

const A = 10;
const B = 50;

console.time('recursiveMultiplyOneLiner');
console.log(recursiveMultiplyOneLiner(A, B));
console.timeEnd('recursiveMultiplyOneLiner');

console.time('recursiveMultiply');
console.log(recursiveMultiply(A, B));
console.timeEnd('recursiveMultiply');
