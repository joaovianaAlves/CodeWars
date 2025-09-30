function lastDigit(n, m) {  
  if(m === 0n) return 1n
  if(m === 1n) return n
  
  let base = BigInt(n) % 10n
  let exp = BigInt(m)
  let cycles = [base]

  while(true){
    let prevCycle = cycles[cycles.length - 1]
    let nextCycle = (prevCycle * base) % 10n
    let debugNext = (prevCycle * base)
    console.log(`${base}^${cycles.length} = (${prevCycle} * ${base}) = ${debugNext} % 10 == ${nextCycle}`)
    if(nextCycle === cycles[0]) break
    cycles.push(nextCycle)
  }
  console.log(cycles)
  // ex 153 - 1 [0...152] 
  let index = (m - 1n) % BigInt(cycles.length)
  console.log(index)
  console.log(cycles[index])
  return cycles[index]
}

lastDigit(892n, 3n)
