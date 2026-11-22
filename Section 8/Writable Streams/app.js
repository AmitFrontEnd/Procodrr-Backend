import { createReadStream, createWriteStream } from "fs"

console.time()
const readStream = createReadStream("C:\\Users\\Amit Kumar\\Desktop\\between 1 to 2 gb.mkv")

const writeStream = createWriteStream("movie.mkv")
readStream.on("data", (chunk) => {
  let isFilled = writeStream.write(chunk)
  if (!isFilled) readStream.pause()
})

writeStream.on('drain', () => {
  readStream.resume()
})
readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("finish", () => {
  console.timeEnd();
  console.log("File copied successfully");
});