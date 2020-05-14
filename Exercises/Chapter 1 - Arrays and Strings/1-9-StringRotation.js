function isRotation(s1, s2) {
  const len = s1.length;
  return len === s2.length && len > 0 ? (s2 + s2).includes(s1) : false;
}
const s1 = 'qwerty';
const s2 = 'tyqwer';
console.log(isRotation(s1, s2));
