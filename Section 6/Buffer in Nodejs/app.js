import {Buffer} from "buffer"

const arrayBuffer = new ArrayBuffer(4)
const uint8 = new Uint8Array(arrayBuffer)
const nodeBuffer = Buffer.from(arrayBuffer)

uint8[0] = 97
uint8[1] = 98
uint8[2] = 99
uint8[3] = 100

console.log(uint8)
console.log(uint8.buffer)
// console.log(nodeBuffer.buffer)
// console.log(uint8.toString())
// console.log(nodeBuffer.toString())

// const nodeBuffer=Buffer.alloc(4)
// console.log(nodeBuffer)
// console.log(nodeBuffer.buffer)