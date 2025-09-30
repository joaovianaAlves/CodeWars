function order(words){
  let wordArray = words.split(" ").sort((prev, next) => {
    const prevNumber = prev.split("").filter((char) => Number(char))[0]
    const nextNumber = next.split("").filter((char) => Number(char))[0]
    return prevNumber - nextNumber
  })
  return wordArray.join(" ")
}
