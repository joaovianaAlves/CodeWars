function towerBuilder(nFloors) {
  let array = [];
  for (let i = 0; i < nFloors; i++) {
    let stars = "*".repeat(i * 2 + 1);
    let space = " ".repeat(nFloors - i - 1);
    array.push(space + stars + space);
  }
  return array;
}
console.log(towerBuilder(3));
