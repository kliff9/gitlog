const simpleGit = require("simple-git")(
  "C:/Users/Kliff_/Desktop/LESSONS/gitlog/.git/"
);
const fs = require("fs");

const localgit = "C:/Users/Kliff_/Desktop/LESSONS/gitlog/.git";

function logg() {
  simpleGit.log(function (error, data) {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
}

// Path to the refs directory
const refsDir = "C:/Users/Kliff_/Desktop/LESSONS/gitlog/.git/refs";

// Read the contents of the refs directory
fs.readdir(localgit, (err, files) => {
  if (err) {
    // Handle error
    console.error("err", err);
    return;
  }
  console.log(refsDir, files);

  // Iterate over the array of file names
  // for (const file of files) {
  //   // Read the contents of the file
  //   fs.readFile(`${refsDir}/${file}`, (err, contents) => {
  //     if (err) {
  //       // Handle error
  //       console.error(err);
  //       return;
  //     }

  //     // Extract the commit hash from the contents of the file
  //     const commitHash = contents.toString().trim();

  //     // Do something with the commit hash
  //     console.log(commitHash);
  //   });
  // }
});
