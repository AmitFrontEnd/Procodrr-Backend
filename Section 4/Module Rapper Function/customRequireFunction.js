const {addTwoNumber,multiplyTwoNumber} = myCustomLoadModule('./math')


console.log(addTwoNumber(3,4))
console.log(multiplyTwoNumber(3,4))


function myCustomLoadModule(filePath) {
  if (!filePath.endsWith('.js')) filePath += ".js"
  const fs = require('fs')
  let send = {}
  try {
    const fileContent = fs.readFileSync(filePath).toString()
    eval(fileContent)
  } catch (err) {
    console.log('Module Load Failed...')
  }
  return send
}