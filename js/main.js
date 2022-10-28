function rundomNumber(min, max) {
  if (min >= max || min <= 0) {
    return NaN;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
console.log(rundomNumber(4, 22));

function rundomNumbersDot(min, max, dot) {
  if (min >= max || min <= 0) {
    return NaN;
  } else {
    let number = Math.random() * (max - min + 1) + min;
    return number.toFixed(dot);
  }
}
console.log(rundomNumbersDot(2, 400, 4));
