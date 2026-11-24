import fs from "fs";

const fd = fs.openSync("text.txt");
const buffer = Buffer.alloc(10);

fs.read(
  fd,
  {
    buffer: buffer,
    position: 2,
    offset: 2,
  },
  (err, byteRead, buffer) => {
    console.log(err);
    console.log(byteRead);
    console.log(buffer);
    console.log(buffer.toString());
  },
);
