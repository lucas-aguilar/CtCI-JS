function recursiveMultiply(a, b, total = 0) {
  if (a == 0 || b == 0) return total;
  total += a;
  return recursiveMultiply(a, b - 1, total);
}

console.log(recursiveMultiply(10, 50));
