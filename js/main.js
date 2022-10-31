function getRandom(min, max) {
  if (min >= max || min <= 0) {
    return NaN;
  } else {
    return Math.random() * (max - min + 1) + min;
  }
}

function getRandomNumber(min,max){
  return Math.round(getRandom(min, max))
}


function getRandomNumberDot(min, max, dot) {
  return getRandom(min, max).toFixed(dot);
}
