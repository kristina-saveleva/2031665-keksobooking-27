function getRandomNumber(min, max) {
  if (min >= max || min <= 0) {
    return NaN;
  } else {
    return Math.random() * (max - min + 1) + min;
  }
}

function roundRandomNumber() {
  return Math.round(randomNumber);
}

function getRandomNumberDot(dot) {
  return randomNumber.toFixed(dot);
}

let randomNumber = getRandomNumber(2, 33);
roundRandomNumber();
getRandomNumberDot(2);
