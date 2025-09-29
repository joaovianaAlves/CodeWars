function count(string) {
  let char = {}
  for(let index = 0; index < string.length; index++){
    let currChar = string[index];
    char[currChar] = (char[currChar] ?? 0) + 1
  }
  return char
}
