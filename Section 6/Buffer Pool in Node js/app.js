import { Buffer, constants } from "buffer"
const buffer1 = Buffer.allocUnsafe(10)
const buffer2 = Buffer.allocUnsafe(656300)
buffer1[0] = 9

console.log(buffer1.buffer.byteLength)

console.log(buffer1.byteOffset)

console.log(buffer2.buffer.byteLength)

console.log(buffer2.byteOffset)

console.log(constants)