import fs from "fs"

const fd1 = fs.openSync("numbers.txt")

const fd2 = fs.openSync("package.json")

const fd3 = fs.openSync("streamNumbers.txt")

console.log({ fd1, fd2, fd3 })