// import fs from "fs/promises"
import fs from "fs"
// Async I/O
// const fileContent=await fs.readFile("text.txt","utf-8")

// Sync I/O
const fileContent = fs.readFileSync("text.txt", "utf-8")

console.log(fileContent)