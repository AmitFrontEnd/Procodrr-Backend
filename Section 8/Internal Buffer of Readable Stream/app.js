import { createReadStream} from "fs"

const readStream = createReadStream("abc.txt", { highWaterMark: 4 })
console.log(readStream.read())

readStream.on('readable', () => {
  console.log(readStream.readableLength)
  console.log(readStream.read(1))
  console.log(readStream.readableLength)
})

