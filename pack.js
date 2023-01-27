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

const packData = fs.readFileSync(Laptop_filePath);

// Unzip the data using zlib

console.log(indexData);
console.log(packData);
let buffer = packData.toString();
console.log(buffer);

// const unzippedData = zlib.gunzipSync(packData);
// const unzippedData = zlib.unzipSync(packData);
// const unzippedData = zlib.inflateSync(packData);

// Extract the files from the unzipped data
// The format of the unzipped data is specific to the git packfile format
// and may require additional parsing and processing to extract the files

// const decompressedData = zlib.inflateSync(packData);

const hexString = bodec.toHex(packData);
// console.log(hexString); // "0102030405"
