/* ------------------- Testing ----------------*/
// );

import fs from "fs";
import zlib from "zlib";
import pako from "pako";
import bodec from "bodec";

/*
const packfileData = fs.readFileSync(
  ".git/objects/pack/pack-7e55f6d23a104a9f5dcb78ddf187bd9f5da21e44.pack"
);
// const decompressedData = pako.inflate(data.toString());

//Use the zlib.decompress() function to decompress the packfile
const decompressedData = zlib.inflateSync(packfileData);
console.log(decompressedData);
console.log("packfile", packfileData);

*/

const Desktop_packfilePath =
  ".git/objects/pack/pack-e034723388cd0497ccb7d9baa8581326cec42d44.pack";

// fs.readFile(packfilePath, (err, data) => {
//   if (err) throw err;
//   console.log(data)

//   zlib.inflate(data, (err, buffer) => {
//     if (err) throw err;

//     // buffer contains the decompressed data
//     console.log(buffer);
//   });
// });

// Assume filePath is the path to the .pack file
const Laptop_filePath =
  ".git/objects/pack/pack-7e55f6d23a104a9f5dcb78ddf187bd9f5da21e44.pack";

const indexFile =
  ".git/objects/pack/pack-7e55f6d23a104a9f5dcb78ddf187bd9f5da21e44.idx";

// Read the index file
const indexData = fs.readFileSync(indexFile);

// Read the binary data of the .pack file
console.log(fs.statSync(Laptop_filePath).isFile());
// const packread = fs.read(Laptop_filePath);

let packData = fs.readFileSync(Laptop_filePath);
packData = Buffer.from(packData);
// Unzip the data using zlib

// console.log(indexData);
// console.log(packData);
// let buffer = packData.toString();
// console.log(buffer);
const header = packData.slice(0, 12);
const signature = packData.toString("ascii", 0, 4);
const version = packData.readUInt32BE(4);
const numObjects = packData.readUInt32BE(8);
const read12 = packData.readUInt32BE(12);
const read16 = packData.readUInt32BE(16);

let offset = 12; // start after the header

const dataLength = packData.length - offset;

console.log(
  `signature: ${signature}, version: ${version}, numObjects: ${numObjects}, dataLength ${dataLength}, read12: ${read12}, header: ${header}`
);

const compressedData = packData.slice(offset, offset + dataLength);
console.log(compressedData);

// const unzippedData = zlib.inflateSync(compressedData);

const compressedData2 = packData.slice(20, 40);
console.log(compressedData2[0]);

if (signature === "PACK") {
  // The data is in the DEFLATE format, so decompress it using zlib
  // zlib.inflate(compressedData, (err, decompressedData) => {
  //   if (err) throw err;
  //   console.log(decompressedData);
  // });
} else {
  throw new Error("Unknown packfile format");
}
let offsets = 0;
for (let i = 0; i < 10; i++) {
  const objectHeader = packData.slice(offsets, offsets + 20);
  const type = objectHeader.readUInt8(0) >> 4;
  const size = objectHeader.readUInt32BE(4);
  const objectData = packData.slice(offsets + 20, offsets + 20 + size);
  // Do something with the object data

  offsets += 20 + size;
  console.log(objectHeader, type, objectData[0]);
}
// const typeAndLengthBuffer = fs.readSync(packData, 1, offset, "UInt8");

// const unzippedData = zlib.gunzipSync(packData);
// const unzippedData = zlib.unzipSync(packData);
// const unzippedData = zlib.inflateSync(packData);

// Extract the files from the unzipped data
// The format of the unzipped data is specific to the git packfile format
// and may require additional parsing and processing to extract the files

// const decompressedData = zlib.inflateSync(packData);

const hexString = bodec.toHex(packData);
// console.log(hexString); // "0102030405"
