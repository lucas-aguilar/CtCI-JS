function isAllUniqueHash(str) {
  const hashTable = {};
  if (str.length === 1) return true;
  for (let i = str.length - 1; i >= 0; i--) {
    if (hashTable[str.charAt(i)]) return false;
    hashTable[str.charAt(i)] = true;
  }
  return true;
}

function isAllUnique(str) {
  if (str.length === 1) return true;
  for (let i = str.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (str.charAt(i) === str.charAt(j)) return false;
    }
  }
  return true;
}

console.log(isAllUnique('100000000000000000000000000000'));
