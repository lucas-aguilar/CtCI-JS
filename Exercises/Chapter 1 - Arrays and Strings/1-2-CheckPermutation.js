// check which string is shortest
// put each char of the shortest string in a hash table
// iterate over the other string:
//    - check if current value is one of the characters
//    -

function checkPermutation(str1, str2) {
  let shortStr = '';
  let longStr = '';
  if (str1.length < str2.length) {
    shortStr = str1;
    longStr = str2;
  } else {
    shortStr = str2;
    longStr = str1;
  }
  const shortHash = getStrHashTable(shortStr);
  var auxHash = shortHash;
  for (let i = 0; i < longStr.length; i++) {
    if (auxHash[longStr.charAt(i)]) {
      auxHash[longStr.charAt(i)]--;
      if (auxHash[longStr.charAt(i)] <= 0) delete auxHash[longStr.charAt(i)];
    } else {
      auxHash = shortHash;
    }
    if (Object.keys(auxHash).length === 0) return true;
  }
  return false;
}

const getStrHashTable = (str) => {
  const table = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (!table[char]) table[char] = 1;
    else table[char]++;
  }
  return table;
};

const str1 = 'rwtq';
const str2 = 'trew';
console.log(checkPermutation(str1, str2));
