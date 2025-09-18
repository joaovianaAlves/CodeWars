function rowSumOddNumbers(n) {
  let rows = (n * (n +1))/2
  let row = (n * (n - 1)) + 1
  let array = []
  
  for(let idx = 1; idx <= rows * 2; idx ++){
    if(idx % 2 !== 0){
      array.push(idx)
    }
  }
  
  let lastRow = array.slice(-n)
  let result = lastRow.reduce((acc, sum) => acc + sum)

  return result
  //or 
  return n ** 3
}
