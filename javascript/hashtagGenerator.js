function generateHashtag(str) {
  const arr = str.split(" ");
  let result = "#";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) result += arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return str.trim() === "" || result.length > 140 ? false : result;
}
console.log(generateHashtag(" "));
