// Rules for palindromes:
//  > n = str.length
//  > str must have (n - 1) / 2 repeated chars, excluding spaces
// total combinations = ((n - 1) / 2)!

// Steps to solution
// Count how many times chars repeats:
//  > for each char in str
//    > map char to hash w/ counter++
// Verify if there is (n - 1) / 2 repeated chars:
// -> Only one value of the hash can be odd

function pp(str) {
  const hashtable = {};
  const n = str.length;
  // REMOVE NON LETTER CHARS
  for (let i = n - 1; i >= 0; i--) {
    if (hashtable[str.charAt(i)]) hashtable[str.charAt(i)]++;
    else hashtable[str.charAt(i)] = 1;
  }
  let oddQty = 0;
  for (const key in hashtable) {
    if (hashtable.hasOwnProperty(key) && hashtable[key] % 2 > 0) {
      oddQty++;
    }
    if (oddQty > 1) return false;
  }
  return oddQty > 1 ? false : true;
}

console.log(pp('asd122das'));
