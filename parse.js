const fs = require("fs");

const file = fs.readFileSync(".mailmap", "utf8");
const trimfile = file.trim();

const line3 = file.split(/(?=<)/);
const array1 = trimfile.split(/\n/);

let mailmap = {};
let array_length = array1.length;
console.log(array_length);
for (let i = 0; i < array_length; i++) {
  let current_array = array1[i]
    .split(/( <.*?>)/)
    .filter((s) => s.trim() !== "");
  if (current_array.length === 3) {
    mailmap[current_array[2]] = current_array[0] + current_array[1];
  } else if (current_array.length === 4) {
    mailmap[current_array[3]] = current_array[0] + current_array[1];
  } else if (current_array.length === 2) {
    mailmap[current_array[1]] = current_array[0];
  } else {
    console.log("error");
  }
  //   console.log(current_array);
}
console.log(mailmap);

// console.log("array1: ", array1[1].split(/\s*(<.*?>)\s*/));
function ifelse() {}
