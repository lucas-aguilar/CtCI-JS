// staircase w/ n steps
// hops = 1 || 2 || 3
// possible ways to run up ?

// last hop ?
//

const HOP_STEPS = 3;

function possibleHopsCombinations(stepsQty) {
  if (stepsQty < 0) return 0;
  if (stepsQty === 0) return 1;
  function f(p) {
    return p > 0 ? 2 ** (p - 1) : 1;
  }
  return (
    f(HOP_STEPS) ** Math.floor(stepsQty / HOP_STEPS) * f(stepsQty % HOP_STEPS)
  );
}

console.log(possibleHopsCombinations(3));
