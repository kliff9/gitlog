const fs = require("fs");

function parse(nameinput) {
  const file = fs.readFileSync(".mailmap", "utf8");

  // const line3 = file.split(/(?=<)/);
  const array1 = file.trim().split(/\n/);
  let emailRegex = /<[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}>/;
  let mailmap = {};
let email = 'filler_email'
let username = 'filler_name'
let name = nameinput

  let array_length = array1.length;
  for (let i = 0; i < array_length; i++) {

    let current_array = array1[i].split(/( <.*?>)/)
    .map(elem => elem.trim())
    .filter(elem => elem !== "");

    if (current_array.length === 3) {
      email = current_array[0]
      username = current_array[1]
      mailmap[current_array[2]] = email + username;
    } else if (current_array.length === 4) {
      mailmap[current_array[3]] = current_array[0] + current_array[1];
    } else if (current_array.length === 2) {
      console.log('TAIF',current_array[1], current_array[0])

      if (current_array[1] && current_array[0].includes("@")) {
         email = current_array[0]
      } else {
         username = current_array[0]
      }
      mailmap[current_array[1]] = username + " " + email



    } else {
      console.log("error");
    }
    //   console.log(current_array);
  }
  return mailmap;

}
console.log(parse())


module.exports = parse;
