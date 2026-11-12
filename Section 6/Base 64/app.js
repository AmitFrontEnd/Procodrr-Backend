import fs from "node:fs/promises";

const videoBuffer = await fs.readFile(
  "C:\\Users\\Amit Kumar\\Videos\\Screen Recordings\\Screen Recording 2026-11-12 235129.mp4"
);

const content = videoBuffer.toString("base64url");

await fs.writeFile("file.txt",content);