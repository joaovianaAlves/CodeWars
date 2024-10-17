function digPow(n, p) {
  const array = n
    .toString()
    .split("")
    .map((digit) => Math.pow(digit, p++));
  k = array.reduce((accum, num) => num + accum) / n;
  return Number.isInteger(k) ? k : -1;
}

digPow(92, 1);
