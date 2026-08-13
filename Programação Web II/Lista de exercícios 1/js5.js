const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(remainingMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - remainingMinutesInOven;
}

function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

console.log(remainingMinutesInOven(30));
console.log(preparationTimeInMinutes(2));
console.log(totalTimeInMinutes(3, 20));
