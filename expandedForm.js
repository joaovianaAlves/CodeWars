function expandedForm(num) {
  const arr = num.toString().split("");
  return arr
    .map((value, index) => {
      return value + "0".repeat(arr.length - index - 1);
    })
    .filter((number) => parseInt(number) !== 0)
    .join(" + ");
}
console.log(expandedForm(12));
