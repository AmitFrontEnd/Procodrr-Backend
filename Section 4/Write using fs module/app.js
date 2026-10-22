
import fs from "fs/promises"

// fs.writeFile("demo.txt","hello node js")
fs.appendFile("demo.txt","\nhello node js again")

const movie=await fs.readFile("C:\\Users\\Amit Kumar\\Desktop\\Night Hunter.mkv")

// movie is a buffer 
fs.writeFile("night hunter.mp4",movie)