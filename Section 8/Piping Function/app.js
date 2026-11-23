import { createReadStream, createWriteStream } from "fs"
import { pipeline } from "stream"

console.time()
const readStream = createReadStream("C:\\Users\\Amit Kumar\\Desktop\\between 1 to 2 gb.mkv", { highWaterMark: 1 * 1024 * 1024 })

const writeStream = createWriteStream("movie.mkv", { highWaterMark: 1 * 1024 * 1024 })

pipeline(readStream, writeStream, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.timeEnd()
  console.log("File copied successfully");
})
