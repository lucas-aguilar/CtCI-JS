function getPowerSet(set, subsets = [], index = 0) {
  if (index >= set.length) return subsets;
  subsets.push([set[index]]);
  for (let i = index + 1; i < set.length; i++) {
    let subset = [...subsets[subsets.length - 1]];
    subset.push(set[i]);
    subsets.push(subset);
  }
  return getPowerSet(set, subsets, index + 1);
}

// const set = ['a', 'b', 'c'];
const set = ['a', 'b', 'c', 'd'];
const res = getPowerSet(set);
console.log(res);
