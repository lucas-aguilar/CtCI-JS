const matrix = [
  [1, 2, 3, 4, 5, 0, 8, 6],
  [1, 2, 3, 4, 5, 2, 8, 6],
  [3, 5, 7, 8, 5, 1, 8, 6],
];
console.log(zeroMatrix(matrix));
function zeroMatrix(m) {
  const hash = {
    x: {},
    y: {},
  };
  for (let x = 0; x < m.length; x++) {
    for (let y = 0; y < m[x].length; y++) {
      if (m[x][y] === 0) {
        hash.x[x] = true;
        hash.y[y] = true;
      }
    }
  }
  for (let x = 0; x < m.length; x++) {
    for (let y = 0; y < m[x].length; y++) {
      if (hash.x[x] || hash.y[y]) {
        m[x][y] = 0;
      }
    }
  }
  return m;
}

// SOLUTION
// Iterate over each line of the matrix
//  > Check if cur value is 0
//    > if so, add its indexes to a hash table
// Iterate over each line of the matrix again
//  > check if coords of this position is in the hash
