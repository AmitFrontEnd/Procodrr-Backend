import fs, { createReadStream } from "fs"

// import fs from "fs/promises"

// console.time()
// const fileContent=await fs.readFile("C:\\Users\\Amit Kumar\\Desktop\\between 1 to 2 gb.mkv")

// await fs.writeFile("movie.mkv",fileContent)
// console.timeEnd()

console.time()
const readStream = createReadStream("C:\\Users\\Amit Kumar\\Desktop\\between 1 to 2 gb.mkv")

let totalSize = 1541754866
let currentRead = 0
readStream.on('data', (chunk) => {
  fs.appendFileSync("test.mkv",chunk)
  currentRead += chunk.byteLength
  let percent = ((currentRead / totalSize) * 100).toFixed(2)
  console.log(percent + " % " + 'has been written')
})

readStream.on('end', () => {
  console.timeEnd()
})