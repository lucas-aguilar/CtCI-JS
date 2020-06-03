function findMagicIndex(a, start = 0, end = a.length - 1) {
  if (end < start) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (a[mid] == mid) return mid;
  if (a[mid] > mid) {
    return findMagicIndex(a, start, mid - 1);
  } else {
    return findMagicIndex(a, mid + 1, end);
  }
}

const arr = [0, 3, 4, 5];
const res = findMagicIndex(arr);
console.log(res);
