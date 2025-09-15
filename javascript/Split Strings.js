function solution(str){
  let array = [];
  for(let index = 0; index <= str.length - 1; index += 2){
    array.push(str[index] + (str[index + 1] ?? '_'));
  }
  
  return array
}
