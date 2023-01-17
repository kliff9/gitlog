/* ------------------- Testing ----------------*/
// );

const fs = require("fs");
const zlib = require("zlib");
const pako = require("pako");
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

const packfilePath = '.git/objects/pack/pack-e034723388cd0497ccb7d9baa8581326cec42d44.pack';

fs.readFile(packfilePath, (err, data) => {
  if (err) throw err;
  console.log(data)

  zlib.inflate(data, (err, buffer) => {
    if (err) throw err;

    // buffer contains the decompressed data
    console.log(buffer);
  });
});
