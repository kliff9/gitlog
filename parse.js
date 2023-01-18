const fs = require("fs");

function parse() {
  const file = fs.readFileSync(".mailmap", "utf8");

  // const line3 = file.split(/(?=<)/);
  const array1 = file.trim().split(/\n/); // mailmap split line by line
  // let emailRegex = /<[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}>/;
  let mailmap = {};
  let email = '<filler__email>' // defaut value for email when the format is 
  let username = 'filler__name'//

  let array_length = array1.length;
  for (let i = 0; i < array_length; i++) {

    let testuesername = array1[i] 
    console.log(testuesername)
    let current_array = array1[i].split(/( <.*?>)/)
    .map(elem => elem.trim())
    .filter(elem => elem !== "");

    if (current_array.length === 3) {
      email = current_array[0]
      username = current_array[1]
      mailmap[current_array[2]] = email + " "+ username;
    } else if (current_array.length === 4) {
      email = current_array[0]
      username = current_array[1]
      mailmap[current_array[3]] = email + " "+ username;
    } else if (current_array.length === 2) {
      // email = current_array[1]


        if (mailmap[current_array[1]]) {
           if (current_array[0].includes("@")) {

            // mailmap[current_array[1]].split(" ")[1] = current_array[0]

            // Split the value associated with the key 
          let value = mailmap[current_array[1]].split(/( <.*?>)/)

// Update the 2nd word
        value[1] = current_array[0]

// Join the array of words back into a single string
        let updated_value = value.join(" ")

// Update the value in the mailmap object
        mailmap[current_array[1]] = updated_value

            // let modifiedString = originalString.replace(/(\S+)\s(\S+)/, "$1 Universe");

           console.log('inalready', mailmap[current_array[1]].split(" ")[1])
           } else {
            // mailmap[current_array[1]].split(" ")[0] = current_array[0]
            let value2 = mailmap[current_array[1]].split(/( <.*?>)/)

            // Update the 2nd word
                    value2[0] = current_array[0]
            
            // Join the array of words back into a single string
                    let updated_value2 = value2.join(" ")
            
            // Update the value in the mailmap object
                    mailmap[current_array[1]] = updated_value2

            console.log('inalready', mailmap[current_array[1]].split(" ")[0] ,'with ', current_array[0])

           }
          } else {
          if (current_array[0].includes("@")) {
            email = current_array[0]
            mailmap[current_array[1]] = 'filler ' +  email

          } else {
            username = current_array[0]
            mailmap[current_array[1]] = username +  " <filler>"
          }

        }




      // if (current_array[1] && current_array[0].includes("@")) {
      //    email = current_array[0]
      // } else {
      //    username = current_array[0]
      // }
      // mailmap[current_array[1]] = username + " " + email



    } else {
      console.log("error");
    }
  }
  return mailmap;

}
console.log(parse())


module.exports = parse;

/*
if exist already in mailmap
then change if its a email or password
else
Use a default value
    } else if (current_array.length === 2) {

      if (current_array[1] && current_array[0].includes("@")) {
         email = current_array[0]
      } else {
         username = current_array[0]
      }
      mailmap[current_array[1]] = username + " " + email


*/
