import {Buffer} from "buffer"

const buffer1=Buffer.alloc(4000)
const buffer2=Buffer.allocUnsafe(400000)

// console.log(buffer1.toString())
console.log(buffer2.toString())