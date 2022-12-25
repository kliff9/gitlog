const path = require('path');

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
    const Logsdir = fs.readdirSync(homelocalgit +  "/" + "logs", 'utf8');
    const Logsremote = fs.readdirSync(homelocalgit +  "/" + "logs/refs/remotes/origin", 'utf8');
    const Logshead = fs.readdirSync(homelocalgit +  "/" + "logs/refs/heads", 'utf8');
    const refshead = fs.readdirSync(homelocalgit +  "/" + "refs/heads", 'utf8');

    const gitobjects = fs.readdirSync(homelocalgit + "/objects", 'utf8');
    const objectsinfo = fs.readdirSync(homelocalgit +  "/objects/info", 'utf8');
    const objects78 = fs.readdirSync(homelocalgit +  "/objects/78", 'utf8');
    const objects9f = fs.readdirSync(homelocalgit +  "/objects/9f", 'utf8');
    const objects84 = fs.readdirSync(homelocalgit +  "/objects/84", 'utf8');

    

// Find the file that contains commit data
let commitFile;
for (const file of files) {
  if (file.startsWith('commit')) {
    commitFile = file;
    break;
  }
}
const datalogs = fs.readFileSync(homelocalgit +  "/logs/HEAD/", 'utf8'); // List of Commit data
const datarefhead = fs.readFileSync(homelocalgit +  "/logs/refs/heads/main", 'utf8'); // List of Commit data
const datarefremote = fs.readFileSync(homelocalgit +  "/logs/refs/remotes/origin/main", 'utf8'); // List of Git command actins? "update by push"



const branch = fs.readFileSync(homelocalgit +  "/refs/heads/main", 'utf8'); // 78fd9e9cf8a1c993011a5d9bdbbf8eb316a338e5 (recent commit?)
const commithead = fs.readFileSync(homelocalgit +  "/HEAD", 'utf8'); // ref: refs/heads/main
const vommitdata = fs.readFileSync(homelocalgit +  "/objects/78/fd9e9cf8a1c993011a5d9bdbbf8eb316a338e5", 'utf8'); // the data of specifc commit
const data9f = fs.readFileSync(homelocalgit +  "/objects/9f/cecc6aa2e3b62abac3ad18db082eae4645ee2f", 'utf8'); // idk file names?
const data84 = fs.readFileSync(homelocalgit +  "/objects/84/1907cc8fc8eb9cc690b1be4fd4cbbc94ac0fb0", 'utf8'); // the data of specifc commit


console.log(data84) 

const commitLines = vommitdata.split('\n');
const authorLine = commitLines.find(line => line.startsWith('author'));
const emailLine = commitLines.find(line => line.startsWith('email'));
const author = authorLine.split(' ')[1];
const email = authorLine.split(' ')[2];

console.log(`Author: ${author}`); // Author: kliff
console.log(`Email: ${email}`); // Email: <c.thelusca@hotmail.com>


// if (!commitFile) {
//     console.error('Could not find commit file in .git/ directory');
//     process.exit(1);
//   }


}

findcommit()
