import fs from "fs";
import zlib from "zlib";
import pako from "pako";
import bodec from "bodec";

const Laptop_filePath =
  ".git/objects/pack/pack-7e55f6d23a104a9f5dcb78ddf187bd9f5da21e44.pack";

const Desktop_packfilePath =
  ".git/objects/pack/pack-e034723388cd0497ccb7d9baa8581326cec42d44.pack";


// const packfile = fs.readFileSync(Laptop_filePath);

fs.readFile(Desktop_packfilePath, (err, data) => {
  if (err) throw err;

  // First object in a pack file starts at byte 12
  const firstObject = data.slice(12);

  // Do something with the first object data
  console.log(firstObject);
  zlib.inflate(data, (err, inflatedData) => {
    if (err) {
      console.error("Could not inflate data: ", err);
      return;
    }
    console.log(inflatedData)

    // Incorrect error check:
    // Check for error even if there is no error
    if (err) {
      console.error("Error occurred: ", err);
      return;
    }

    // Parse the first object from the inflated data here...
  });
});
