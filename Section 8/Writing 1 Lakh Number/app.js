import { createWriteStream } from "fs"

// console.time()
// for (let i = 1; i <= 100000; i++) {
//   if (i === 1) fs.writeFileSync("numbers.txt", `${i}, `)
//   else fs.appendFileSync("numbers.txt", `${i} `)
// }

// console.timeEnd()

console.time()
const writeStream = createWriteStream("streamNumbers.txt")
for (let i = 1; i <= 100000; i++) {
  writeStream.write(`${i}, `)
}

writeStream.end()

writeStream.on('finish', () => {
  console.timeEnd()
})