import { createReadStream } from "fs";

const readStream = createReadStream("abc.txt", {
  highWaterMark: 4,
  encoding: "utf-8",
});

readStream.on("open", (fd) => {
  console.log("File opened with descriptor", fd);
});
readStream.on("ready", () => {
  console.log("Stream is ready to transfer data");
});
readStream.on("data", (chunk) => {
  console.log(chunk);
  if (readStream.bytesRead === 8) {
    readStream.destroy();
    console.log("I want only 8 bytes of data");
  }
});
readStream.on("end", () => {
  console.log("All the file content has been read");
});
readStream.on("close", () => {
  console.log("File has been closed");
});
