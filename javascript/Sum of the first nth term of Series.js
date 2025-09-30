function SeriesSum(n) {
  let result = 0
  let startingNum = 1
  for(let index = 0; index < n; index++){
    result += 1 / startingNum
    startingNum += 3
  }
  return result.toFixed(2).toString()
}
