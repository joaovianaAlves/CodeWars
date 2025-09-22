function hamming(n) {
  let nums = [1];
  let i2 = 0, i3 = 0, i5 = 0;
  console.log("number", n)
  for(let index = 0; index < n; index++){
      let next2 = nums[i2] * 2;
      let next3 = nums[i3] * 3;
      let next5 = nums[i5] * 5; 
      
      console.log('pot2:', next2)
      console.log('pot3:',next3)
      console.log('pot5:',next5)
      
      let result = Math.min(next2, next3, next5)
      nums.push(result);
    
      console.log("Smallest",result)
    
      if(result === next2) i2++
      if(result === next3) i3++
      if(result === next5) i5++
  }

  console.log(nums)
  return nums[n - 1];
}
