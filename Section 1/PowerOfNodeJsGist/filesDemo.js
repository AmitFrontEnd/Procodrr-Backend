const fs=require('fs')

// fs.writeFileSync('demo.txt',"hello from node js")

const fileContent=fs.readFileSync('demo.txt')
console.log(fileContent.toString())