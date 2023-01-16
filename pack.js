// const fs = require("fs");
// const zlib = require("zlib");

// fs.readFile(
//   ".git/objects/pack/pack-e15f0bb0daee4004f4f563759260051ddcf91610.pack",
//   (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const uncompressed_data = zlib.inflateSync(data);
//     const pack = data.toString();
//     console.log(data);
//   }
// );

const fs = require("fs");
const zlib = require("zlib");
const pako = require("pako");

const packfileData = fs.readFileSync(
  ".git/objects/pack/pack-e15f0bb0daee4004f4f563759260051ddcf91610.pack"
);
// const decompressedData = pako.inflate(data.toString());

//Use the zlib.decompress() function to decompress the packfile
const decompressedData = zlib.inflateSync(packfileData);
console.log(decompressedData);
console.log("packfile", packfileData);
