import fs from "fs/promises";

const fileHandle = await fs.open("text.txt", "r+")

// const { bytesRead, buffer } = await fileHandle.read({
//   buffer: Buffer.alloc(30),
//   offset: 7
// })
// console.log(bytesRead)
// console.log(buffer)

const { bytesWritten, buffer } = await fileHandle.write(Buffer.from("Hi from promise version"))

console.log(bytesWritten)
console.log(buffer)

await fileHandle.close()