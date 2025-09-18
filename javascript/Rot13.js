let alpha13 = "abcdefghijklmABCDEFGHIJKLM"
let alpha26 = "nopqrstuvwxyzNOPQRSTUVWXYZ"

function rot13(message){
  let result = message.split("").map((letter) => {
    if(alpha13.includes(letter)){
      return alpha26[alpha13.indexOf(letter)]   
    } else if(alpha26.includes(letter)) { 
      return alpha13[alpha26.indexOf(letter)]  
    } else {
      return letter
    }
  })
  return result.join("")
}

rot13("Test failed with messsage")
