let digits = [0, 1]

const digitsToNumber2 = digitsArray => {
  let rev = 0;
  for (let i = 0; i < digitsArray.length; i++) {
    rev += digitsArray[i] * Math.pow(2, i);
  }
  return rev
}
console.log(digitsToNumber2(digits))