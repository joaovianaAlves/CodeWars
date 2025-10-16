function comp(array1, array2){
  if (!array1 || !array2) return false;
  
  let squaredArray1 = array1.map((item) => item * item).sort((a, b) => a - b)
  let sortedArray2 = array2.sort((a, b) => a - b)
  
  if (squaredArray1.length !== sortedArray2.length) return false;
  
  for(let index = 0; index < squaredArray1.length; index++){
    if(squaredArray1[index] !== sortedArray2[index]){
      return false
    }
  }
  return true
}
