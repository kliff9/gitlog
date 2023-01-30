import zlib from "zlib";
import pako from "pako";

// Define the input data as a Buffer
const input = Buffer.from("Hello, world!\n anf kazekag");
let bf;
// Compress the data using Deflate
zlib.deflate(input, (err, buffer) => {
  if (err) {
    console.error(err);
    return;
  }

  // Log the compressed data
  console.log("buffer: ", buffer);
  // if (buffer[0] !== 0x78 || buffer[1] !== 0x9c) {
  //   console.error("Data does not have a valid zlib header", buffer[0]);
  // } else {
  //   console.log("Data has a valid zlib header", buffer[0].toString());
  // }
  const header = Buffer.from([0x78, 0x9c]);
  bf = buffer.slice(4, 8);
  const new_bf = Buffer.concat([header, bf]);
  console.log("new_bf", new_bf);

  console.log("bf: ", bf);
  // Decompress the data using Inflate
  //   zlib.inflate(bf, (err, result) => { data is not in the correct format to be inflated
  zlib.inflate(buffer, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    // Log the decompressed data
    console.log(result);
    // console.log(result.toString());
  });
});

const incorrectData = Buffer.from([0x58, 0x02, 0x03, 0x04, 0x05, 0x06]);

try {
  if (incorrectData[0] !== 0x78 || incorrectData[1] !== 0x9c) {
    console.error("Data does not have a valid zlib header", incorrectData[0]);
  } else {
    console.log("Data has a valid zlib header");
  }
  pako.inflate(incorrectData);
} catch (error) {
  console.error(error);
  // Output: "incorrect header check"
}
