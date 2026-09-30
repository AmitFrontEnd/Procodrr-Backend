const fs = require('fs')

const fileContent = fs.readFileSync('.env').toString()
fileContent.split('\r\n').forEach(env => {
  const [key, value] = env.split('=')
  process.env[key]=value
  console.log(key,value)
})
const envirenmentsVariables = process.env

console.log(envirenmentsVariables)