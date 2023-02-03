import fs from "fs";
import path from "path";

export default function parse(file_path) {
  let file;

  try {
    let folder_path = path.join(file_path, "/.mailmap");
    file = fs.readFileSync(folder_path, "utf8");
  } catch (error) {
    console.error(error);
    return;
  }

  const array1 = file.trim().split(/\n/); // mailmap split line by line
  let mailmap = {};
  let email = "<filler__email>"; // filler value for email for Proper Name <commit@email.xx>
  let username = "filler__name"; // filler value for name for <proper@email.xx> <commit@email.xx>

  let array_length = array1.length; // for each line in mailmap
  for (let i = 0; i < array_length; i++) {
    let current_array = array1[i]
      .split(/( <.*?>)/) // Ex [ 'User Stickas', '<Jamacian@hotmail@.xx>', 'Kliff124', '<121292926+kliff124@users.noreply.github.com>' ]
      .map((elem) => elem.trim()) // Grab each word in the string in translate to array string
      .filter((elem) => elem !== ""); //
    // console.log(current_array)

    if (current_array.length === 3) {
      // Format: Proper Name <proper@email.xx> <commit@email.xx>
      email = current_array[0];
      username = current_array[1];
      mailmap[current_array[2]] = email + " " + username;
    } else if (current_array.length === 4) {
      // Proper Name <proper@email.xx> Commit Name <commit@email.xx>
      email = current_array[0];
      username = current_array[1];
      mailmap[current_array[3]] = email + " " + username;
    } else if (current_array.length === 2) {
      // format <proper@email.xx> <commit@email.xx> / Proper Name <commit@email.xx>
      if (mailmap[current_array[1]]) {
        if (current_array[0].includes("@")) {
          // Split the value associated with the key
          let value = mailmap[current_array[1]].split(/( <.*?>)/);

          // Update the 2nd word
          value[1] = current_array[0];

          // Join the array of words back into a single string
          let updated_value = value.join("");

          // Update the value in the mailmap object
          mailmap[current_array[1]] = updated_value;
        } else {
          let value2 = mailmap[current_array[1]].split(/( <.*?>)/);

          // Update the 2nd word
          value2[0] = current_array[0];

          // Join the array of words back into a single string
          let updated_value2 = value2.join("");

          // Update the value in the mailmap object
          mailmap[current_array[1]] = updated_value2;
        }
      } else {
        if (current_array[0].includes("@")) {
          // Intialize for Single Changes Ex.
          email = current_array[0];
          mailmap[current_array[1]] = "filler " + email; // '<c.thelusca@hotmail.com>': 'filler <mailmoo@gmail.com>',
        } else {
          username = current_array[0];
          mailmap[current_array[1]] = username + " <filler>"; //// '<c.thelusca@hotmail.com>': 'Khun filler',
        }
      }
    } else {
      console.log("error");
    }
  }
  console.log(mailmap);

  return mailmap;
}

// let emailRegex = /<[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}>/;
