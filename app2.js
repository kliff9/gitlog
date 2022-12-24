
const homelocalgit = 'C:/Users/cthel/OneDrive/Desktop/LESSONS/Git/gitlog/.git'
const localgit = "C:/Users/Kliff_/Desktop/LESSONS/gitlog/.git";

const simpleGit = require("simple-git")(
  `${homelocalgit}`
);
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
const homeRefDir = `${homelocalgit}/refs`
// Read the contents of the refs directory
fs.readdir(homelocalgit, (err, files) => {
  if (err) {
    // Handle error
    console.error("err", err);
    return;
  }
  console.log(homelocalgit, 'FILES: ',files);

  // Iterate over the array of file names
//   const revelantfiles = ['objects', 'HEAD']
  const revelantfiles = {'objects': true, 'HEAD':true}

  for (const file of files) {
    if (file in revelantfiles) {
  //   // Read the contents of the file
    fs.readFile(`${homelocalgit}/${file}`, (err, contents) => {
      if (err) {
        // Handle error
        console.error('err: ', err);
        return;
      }

      // Extract the commit hash from the contents of the file
      const commitHash = contents.toString().trim();

      // Do something with the commit hash
      console.log('COMMITHASH ' + file + ' : ' + commitHash);
    });
    }   
  }
});

}

function findcommit() {
    const files = fs.readdirSync(homelocalgit);
    console.log(files)

// Find the file that contains commit data
let commitFile;
for (const file of files) {
  if (file.startsWith('commit')) {
    commitFile = file;
    break;
  }
}
const commitData = fs.readFileSync(homelocalgit +  "/" + "description", 'utf8');
console.log(commitData)
if (!commitFile) {
    console.error('Could not find commit file in .git/ directory');
    process.exit(1);
  }


}

findcommit()
