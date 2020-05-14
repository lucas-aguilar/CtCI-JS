function URLify(str) {
  str.trim();
  const charArr = getCharArray(str);
  let qty = 0;
  for (let i = 0; i < charArr.length; i++) 
    if (charArr.charAt(i) === ' ') {
      qty++;
    }
  }
  for (let i = charArr - 1; i >= 0; i--) {

  }
  return charArr.reduce((a, b) => a + b);
}

const getCharArray = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i));
  }
  return arr;
};

console.log(URLify(' hello world!  '));
