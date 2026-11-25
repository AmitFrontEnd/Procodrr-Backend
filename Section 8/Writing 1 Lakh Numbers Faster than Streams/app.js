import fs from "fs"

const fd = fs.openSync("numbers.txt", "w")

console.time()

for (let i = 1; i <= 100000; i++) {
  fs.writeSync(fd, `${i} `)
}

fs.closeSync(fd)

console.timeEnd()