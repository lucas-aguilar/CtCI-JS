const str = 'AAAAAABBBEEEXXXXXXXZ';
console.log(compression(str));

function compression(str) {
  if (str.length < 3) return str;
  const hashTable = {};
  for (let i = 0; i < str.length; i++) {
    if (!hashTable[str.charAt(i)]) hashTable[str.charAt(i)] = 1;
    else hashTable[str.charAt(i)]++;
  }
  if (Object.keys(hashTable).length === str.length) return str;
  let compressed = '';
  for (const key in hashTable) {
    if (hashTable.hasOwnProperty(key)) {
      compressed += key + hashTable[key];
    }
  }
  return compressed.length < str.length ? compressed : str;
}

// SOLUTION
// Iterate over the string chars
//  > Put each char in a hash table
//    > the char is the key
//    > the value is the occurences qty
// Iterate over the table building a string value+key...
