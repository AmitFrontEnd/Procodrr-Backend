console.log('Exporting ready...')

const add=(num1,num2)=>{
  return num1+num2
}
const subtract=(num1,num2)=>{
  return num1-num2
}
const multiply=(num1,num2)=>{
  return num1*num2
}
const divide=(num1,num2)=>{
  return num1/num2
}

const send=module.exports
send.add=add
send.subtract=subtract
send.multiply=multiply
send.divide=divide

// module.exports=[
//   add,subtract,multiply,divide
// ]