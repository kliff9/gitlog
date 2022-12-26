const homelocalgit = "C:/Users/cthel/OneDrive/Desktop/LESSONS/Git/gitlog/.git";
const localgit = "C:/Users/Kliff_/Desktop/LESSONS/gitlog/.git";

const simpleGit = require("simple-git")(`${localgit}`);
const fs = require("fs");

function logg() {
  simpleGit.log(function (error, data) {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
}

function findgit() {
  // Path to the refs directory
  const refsDir = "C:/Users/Kliff_/Desktop/LESSONS/gitlog/.git/refs";
  const homeRefDir = `${homelocalgit}/refs`;
  // Read the contents of the refs directory
  fs.readdir(homelocalgit, (err, files) => {
    if (err) {
      // Handle error
      console.error("err", err);
      return;
    }
    console.log(homelocalgit, "FILES: ", files);

    // Iterate over the array of file names
    //   const revelantfiles = ['objects', 'HEAD']
    const revelantfiles = { objects: true, HEAD: true };

    for (const file of files) {
      if (file in revelantfiles) {
        //   // Read the contents of the file
        fs.readFile(`${homelocalgit}/${file}`, (err, contents) => {
          if (err) {
            // Handle error
            console.error("err: ", err);
            return;
          }

          // Extract the commit hash from the contents of the file
          const commitHash = contents.toString().trim();

          // Do something with the commit hash
          console.log("COMMITHASH " + file + " : " + commitHash);
        });
      }
    }
  });
}

function findcommit() {
  const files = fs.readdirSync(localgit);
  console.log(files);

  // Find the file that contains commit data
  let commitFile;
  for (const file of files) {
    if (file.startsWith("commit")) {
      commitFile = file;
      break;
    }
  }
  const commitData = fs.readdirSync(localgit + "/" + "logs/refs/", "utf8");
  // const commitData = fs.readFileSync(localgit + "/" + "logs", "utf8");
  console.log(commitData);

  const objectsDir = `${localgit}/objects/`;
  const objectFiles = fs.readdirSync(objectsDir);
  console.log("OJ", objectFiles);

  let x = 0;
  let commitObjectFile;
  for (const file of objectFiles) {
    // if (file.startsWith(commitHash.slice(0, 2))) {
    if (x > 10) {
      commitObjectFile = file;
      console.log("file", file);
      x++;
      break;
    }
    // }
  }
  const commitObjectData = fs.readFileSync(
    objectsDir + "00/53fdfd5266084b506974a932985a5884a292b3",
    "utf8"
  );
  const commitObjectData2 = fs.readdirSync(objectsDir + "00/", "utf8");

  console.log(commitObjectData);

  // if (!commitFile) {
  //   console.error("Could not find commit file in .git/ directory");
  //   process.exit(1);
  // }
}

findcommit();
