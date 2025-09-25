function persistence(num) {
  let counter = 0
  while(num >= 10){
    num = num.toString().split("").map(Number).reduce((acc, curr) => acc * curr); 
    console.log(num)
    counter++
  }
  return counter
}
