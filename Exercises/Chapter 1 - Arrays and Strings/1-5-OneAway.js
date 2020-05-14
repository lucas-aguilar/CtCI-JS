function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  if (str1.length === str2.length) {
    let diffQty = 0;
    for (let i = str1.length - 1; i >= 0; i--) {
      if (str1.charAt(i) !== str2.charAt(i)) diffQty++;
      if (diffQty > 1) return false;
    }
  } else {
    const smaller = getSmaller(str1, str2);
    const bigger = getBigger(str1, str2);
    let biggerI = 0;
    for (let i = 0; i < smaller.length; i++) {
      if (bigger.charAt(biggerI) !== smaller.charAt(i)) {
        biggerI++;
        if (bigger.charAt(biggerI) !== smaller.charAt(i))
          // || biggerI - i > 1)
          return false;
      }
      biggerI++;
    }
  }
  return true;
  // function getHash(str) {
  //   const hash = {};
  //   for (let i = str.length - 1; i >= 0; i--) hash[str.charAt(i)] = true;
  //   return hash;
  // }
  function getSmaller(str1, str2) {
    if (str1.length > str2.length) return str2;
    else return str1;
  }
  function getBigger(str1, str2) {
    if (str1.length > str2.length) return str1;
    else return str2;
  }
}
console.log(oneAway('pal', 'lpal'));
// SOLUTION
// Check if the difference of the strings' length is between -1 and 1
//  > If not, return false

// If one string is bigger than the other
//  > Check if the bigger has all smaller chars
//    > If not, return false

// Iterate over the chars of each string simultaneously
//  > Compare the chars at the same position
//  > Count how many times they are different
// If they are different more than once, return false
// Else return true
