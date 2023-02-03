import fs from "fs";
import zlib from "zlib";
import pako from "pako";
import bodec from "bodec";

const Laptop_filePath =
  ".git/objects/pack/pack-7e55f6d23a104a9f5dcb78ddf187bd9f5da21e44.pack";

// let packData = fs.readFileSync(Laptop_filePath);

const packfile = fs.readFileSync(Laptop_filePath);

const header = packfile.slice(0, 12);
const numObjects = packfile.readUInt32BE(8);

fs.readFile(Laptop_filePath, (err, data) => {
  if (err) throw err;

  const header = data.slice(0, 12);
  if (header[0] !== 0x78 || header[1] !== 0x9c) {
    console.error("Data is not in zlib format");
  }
  const _32 = data.slice(32, 44);
  console.log(data);

  // continue with decompression
  const decompressedData = pako.inflate(data);
  console.log(decompressedData);
});
