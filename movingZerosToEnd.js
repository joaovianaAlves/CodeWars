function moveZeros(arr) {
  const filteredZeros = [];
  return arr
    .filter((number) =>
      number === 0 ? filteredZeros.push(number) && false : true
    )
    .concat(filteredZeros);
}
moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
