const str = 'ABCDEFGHI';
const matrix = generateMatrixByStr(str, 3);
function generateMatrixByStr(str, sides) {
  const matrix = [];
  let total = 0;
  for (let i = 0; i < sides; i++) {
    if (!matrix[i]) matrix[i] = [];
    for (let j = 0; j < sides; j++) {
      matrix[i][j] = str.charAt(total);
      total++;
    }
  }
  return matrix;
}

console.log(rotateMatrix(matrix));
function rotateMatrix(m) {
  const sideSize = m[0].length;
  const mArr = [...m[0], ...m[1], ...m[2]];
  const rotated = [];
  let total = 0;
  for (let i = sideSize - 1; i >= 0; i--) {
    for (let j = 0; j < sideSize; j++) {
      if (!rotated[j]) rotated[j] = [];
      rotated[j][i] = mArr[total];
      total++;
    }
  }
  const z = [...rotated[0], ...rotated[1], ...rotated[2]];
  console.log(z);
  return rotated;
}

// SOLUTION
// Concatenate the strings
