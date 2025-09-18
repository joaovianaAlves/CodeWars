function wave(str){
  let array = []
  for(let idx = 0; idx < str.length; idx++){
    if (str[idx] === " ") continue;
    let singleWave = str.slice(0, idx) + str[idx].toUpperCase() + str.slice(idx + 1)
    array.push(singleWave)
  }
  return array
}

wave("Hello")
