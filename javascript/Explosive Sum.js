function sum(num) {
  const counter = Array(num + 1).fill(0);
  counter[0] = 1;
  for (let k = 1; k <= num; k++) {
    for (let s = k; s <= num; s++) {
      counter[s] += counter[s - k];
    }
  }
  return counter[num]
}
