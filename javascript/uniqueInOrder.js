var uniqueInOrder = function (iterable) {
  let array = typeof iterable == "string" ? iterable.split("") : iterable;
  return array.filter((item, index) => item !== array[index - 1]);
};
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
