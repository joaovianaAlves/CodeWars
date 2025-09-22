function tribonacci(signature,n){
  if(n == 0) return []
  if(n == 1) return [signature[1]]
  for(let index = 0; index < n - 3; index++){
    let soma = signature[index] + signature [index + 1] + signature[index + 2]
    signature.push(soma)
  }
  console.log(signature)
  return signature
}
