function duplicateEncode(word){
    word = word.toLowerCase()
    let result = ""
    for(let index = 0; index < word.length; index++){
      if(word.indexOf(word[index]) === word.lastIndexOf(word[index])){
        result += "("
      } else {
        result += ")"
      }
    }
    return result
}
