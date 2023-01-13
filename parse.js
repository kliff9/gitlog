const fs = require("fs");

const file = fs.readFileSync(".mailmap", "utf8");
const trimfile = file.trim();

const line3 = file.split(/(?=<)/);

// const cleanLines = lines2.map((line) => line.trim());

for (let i = 0; i < line3.length; i++) {
  console.log(line3[i]);
}

// console.log(`new: ${line3} `);
