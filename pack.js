/* ------------------- Testing ----------------*/
// );

import fs from "fs";
import zlib from "zlib";
import pako from "pako";
import bodec from "bodec";




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
// const indexData = fs.readFileSync(indexFile);

// Read the binary data of the .pack file
// const packread = fs.read(Laptop_filePath);
const Desktop_packfilePath =
  ".git/objects/pack/pack-070502cdb734901cf23c866515dce4645f54e6ae.pack";


const packData = fs.readFileSync(Desktop_packfilePath);
// let pd = fs.read(Desktop_packfilePath)
// Unzip the data using zlib

pako.inflate(packData)

// console.log(indexData);
console.log(packData);

// const unzippedData = zlib.inflateSync(packData);



// const unzippedData = zlib.gunzipSync(packData);
// const unzippedData = zlib.unzipSync(packData);

// Read the packfile into a buffer
// fs.readFile(Desktop_packfilePath, (err, packfile) => {
//   if (err) throw err;

//   // Unpack the packfile
//   zlib.unzip(packfile, (err, unzipped) => {
//     if (err) throw err;

//     // Do something with the unpacked data
//     console.log(unzipped.toString());
//   });
// });


const hexString = bodec.toHex(packData);
// console.log(hexString); // "0102030405"












/*
// Read the header of the packfile to get the number of objects and the version
const numberOfObjects = packData.readUInt32BE(8);
const version = packData.readUInt32BE(12);


// Read the index section to get the offsets and metadata for each object
const indexSection = packData.slice(12);
const header = packData.toString('ascii', 0, 4);

console.log(numberOfObjects, version, indexSection, header )
// Use the offsets to extract the compressed data for the specific object you want to unpack
const objectIndex = 0; // choose the index of the object you want to unpack
const objectOffset = indexSection.readUInt32BE(objectIndex * 4);
const objectData = packData.slice(objectOffset);
console.log(objectOffset, objectData)
// Decompress the data using zlib
const decompressedData = zlib.inflateSync(objectData, {
  bufferSize: objectData.length * 2
});


*/
