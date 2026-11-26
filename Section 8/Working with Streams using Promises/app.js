import fs from "fs/promises"

const readHandle=await fs.open("C:\\Users\\Amit Kumar\\Desktop\\between 1 to 2 gb.mkv")
const writeHandle=await fs.open("movie.mkv","w")

const readStream=readHandle.createReadStream()
const writeStream=writeHandle.createWriteStream()

console.time()

readStream.pipe(writeStream)

readStream.on("end",()=>{
  console.timeEnd()
})