function highAndLow(numbers) {
  const numArray = numbers.split(" ").map(Number);
  return `${Math.max(...numArray)} ${Math.min(...numArray)}`;
}
console.log(highAndLow("1 2 3 4 5"));
