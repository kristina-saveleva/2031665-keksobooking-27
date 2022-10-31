function getRandomNumber(min, max) {
  if (min >= max || min <= 0) {
    return NaN;
  } else {
    return Math.random() * (max - min + 1) + min;
  }
}

let randomNumber = getRandomNumber(2, 33);

function roundRandomNumber() {
  return Math.round(randomNumber);
}

function getRandomNumberDot(dot) {
  return randomNumber.toFixed(dot);
}

roundRandomNumber();
getRandomNumberDot(2);
