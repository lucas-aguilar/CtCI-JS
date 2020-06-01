function simulateRegularBirth(
  families = DEFAULT_FAMILIES,
  avgPerFamily = DEFAULT_AVG_KIDS
) {
  let boys = 0,
    girls = 0,
    kids;
  for (let qty = 0; qty < families; qty++) {
    kids = 0;
    while (kids < avgPerFamily) {
      if (getRandomBool()) boys++;
      else girls++;
      kids++;
    }
  }
  return {
    boys: boys,
    girls: girls,
  };
}

function simulateBirthPolicy(families = DEFAULT_FAMILIES) {
  let boys = 0,
    girls = 0;
  for (let qty = 0; qty < families; qty++) {
    while (getRandomBool()) boys++;
    girls++;
  }
  return {
    boys: boys,
    girls: girls,
  };
}

function getRandomBool() {
  return Math.random() >= 0.3;
}

var DEFAULT_FAMILIES = 10000;
var DEFAULT_AVG_KIDS = 2;

console.log('BirthPolicy:');
console.log(simulateBirthPolicy());

console.log('RegularBirth:');
console.log(simulateRegularBirth());
