let digits = [2, 4, 6, 5]

const digitsToNumber = digitsArray => {
  let rev = 0;
  for (let i = 0; i < digits.length; i++) {
    toMultiply = "1"
    for (let j = 1; j <= i; j++) {
      toMultiply += 0
    }
    rev += digits[i] * toMultiply
  }
  return rev
}

const digitsToNumber2 = digitsArray => {
  let rev = 0;
  for (let i = 0; i < digitsArray.length; i++) {
    rev += digitsArray[i] * Math.pow(10, i);
  }
  return rev
}
console.log(digitsToNumber2(digits))