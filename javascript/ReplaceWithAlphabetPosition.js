function alphabetPosition(text) {
  let asciiLowerSub = 96 //a = 97 - 96
  return text.toLowerCase().replace(/[^a-z]/g, "").split("").map(x => x.charCodeAt() - asciiLowerSub).join(" ");
}
