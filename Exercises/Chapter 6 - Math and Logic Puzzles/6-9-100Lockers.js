function findOpenLockers(qty = 100) {
  const lockers = new Array(qty);
  let j = 0;
  for (let i = 0; i < qty; i++) {
    j = i;
    while (j < qty) {
      lockers[j] = lockers[j] === undefined ? true : !lockers[j];
      j += i + 1;
    }
  }
  for (let i = 0; i < qty; i++) {
    if (lockers[i]) console.log(i + 1);
  }
}

function findPerfectSquares(max = 100) {
  let maxRes = 0;
  let i = 2;
  while (maxRes < max) {
    maxRes = i * i;
    console.log(maxRes);
    i++;
  }
}

findOpenLockers();
