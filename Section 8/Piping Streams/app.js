import { createReadStream, createWriteStream } from "fs"

console.time()
const readStream = createReadStream("C:\\Users\\Amit Kumar\\Desktop\\between 1 to 2 gb.mkv", { highWaterMark: 1 * 1024 * 1024 })

const writeStream = createWriteStream("movie.mkv", { highWaterMark: 1 * 1024 * 1024 })

readStream.pipe(writeStream)

writeStream.on("finish", () => {
  console.timeEnd();
  console.log("File copied successfully");
});