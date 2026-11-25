import fs from "fs";

const fd = fs.openSync("text.txt", "w");

const buffer=Buffer.from("hi")

// fs.write(fd, "abc", (err, bytesWritten, buffer) => {
//   console.log(err)
//   console.log(bytesWritten)
//   console.log(buffer)
// })
fs.write(fd, buffer, (err, bytesWritten, buffer) => {
  console.log(err)
  console.log(bytesWritten)
  console.log(buffer)
})
