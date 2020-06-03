const grid = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
function findPathToBottomRight(grid, pos = { l: 0, r: 0 }) {
  const r = grid.length;
  const c = r ? grid[0].length : 0;
  if (!r || !c) return [];
  let path = [];
}

console.log(findPathToBottomRight(grid));
