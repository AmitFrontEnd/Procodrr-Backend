let digits = ["A", 5, 4, 8]

const digitsToNumber2 = digitsArray => {
  let hexMap = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  }
  let rev = 0;
  for (let i = 0; i < digitsArray.length; i++) {
    if (typeof digitsArray[i] === 'string' && hexMap[digitsArray[i].toLowerCase()]) rev += hexMap[digitsArray[i].toLowerCase()] * Math.pow(16, i);
    else rev += digitsArray[i] * Math.pow(16, i);
  }
  if (Number.isNaN(rev)) {
    console.log("Incorrect hex value")
    return
  }
  return rev
}
console.log(digitsToNumber2(digits))