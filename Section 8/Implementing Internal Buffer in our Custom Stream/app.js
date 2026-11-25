import fs from "fs";

const fd = fs.openSync("numbers.txt", "w");

const buffer = Buffer.alloc(64 * 1024);

let offset = 0;
console.time();

for (let i = 1; i <= 100000; i++) {
  const data = i === 100000 ? `${i}` : `${i}, `;

  const size = Buffer.byteLength(data);

  if (offset + size > buffer.length) {
    fs.writeSync(fd, buffer, 0, offset);
    offset = 0;
  }
  offset += buffer.write(data, offset);
}
if (offset > 0) {
  fs.writeSync(fd, buffer, 0, offset);
}

fs.closeSync(fd);
console.timeEnd();
