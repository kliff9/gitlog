import fs from "fs";
import zlib from "zlib";
import pako from "pako";
import bodec from "bodec";
import { Console } from "console";

const Laptop_filePath =
  ".git/objects/pack/pack-7e55f6d23a104a9f5dcb78ddf187bd9f5da21e44.pack";

const Laptop_fileindex =
  ".git/objects/pack/pack-7e55f6d23a104a9f5dcb78ddf187bd9f5da21e44.idx";

const Desktop_packfilePath =
  ".git/objects/pack/pack-e034723388cd0497ccb7d9baa8581326cec42d44.pack";

const packfile = fs.readFileSync(Laptop_filePath);
const idxfile = fs.readFileSync(Laptop_fileindex);

console.log("index file: ", idxfile);

fs.open(Laptop_filePath, "r", (err, fd) => {
  if (err) throw err;

  // Define the offset position
  const offset = 1;

  // Use the `fs.read` method to read from the offset position
  fs.read(fd, Buffer.alloc(100), 0, 100, offset, (err, bytesRead, buffer) => {
    if (err) throw err;

    // Print the data that was read from the offset position
    console.log(buffer.toString("utf8", 0, bytesRead), buffer);
  });
});

function fromIdx(idx) {
  const reader = new BufferCursor(idx);
  const magic = reader.slice(4).toString("hex");
  // Check for IDX v2 magic number
  if (magic !== "ff744f63") {
    return; // undefined
  }
}

fromIdx(Laptop_fileindex);
