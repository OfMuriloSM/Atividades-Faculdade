function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && !archerIsAwake;
}

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  if (petDogIsPresent) {
    return !archerIsAwake;
  }
  return prisonerIsAwake && !knightIsAwake && !archerIsAwake;
}

console.log(canExecuteFastAttack(true));
console.log(canSpy(false, true, false));
console.log(canSignalPrisoner(false, true));
console.log(canFreePrisoner(false, true, false, false));
