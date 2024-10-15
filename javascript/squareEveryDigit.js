function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((number) => Math.pow(number, 2))
      .join("")
  );
}
console.log(squareDigits(2323));
