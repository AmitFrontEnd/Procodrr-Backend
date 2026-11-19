import fs, { createReadStream } from "fs"

const readStream = createReadStream("text.txt", { highWaterMark: 4 })

console.log(readStream.readableFlowing)
console.log(readStream.readableEnded)

readStream.on('data', chunk => {
  if (readStream.bytesRead === readStream.readableHighWaterMark)
    fs.writeFileSync("abc.txt", chunk)
  else fs.appendFileSync("abc.txt", chunk)
  // console.log(chunk.toString())
  // readStream.pause()
  // setTimeout(() => {
  //   readStream.resume()
  // }, 1000)
})
// console.log(readStream.readableFlowing)

// readStream.on('resume',()=>{
//   console.log("Resumed")
// })

readStream.on('end', () => {
  // console.log(readStream.readableFlowing)
})

console.log(readStream.readableFlowing)

console.log(readStream.readableEnded)