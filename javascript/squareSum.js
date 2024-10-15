function squareSum(numbers) {
  return numbers.reduce((sum, curr) => sum + curr * curr, 0);
}
console.log(squareSum([]));
