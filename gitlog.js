const request = require("request");
const fs = require("fs");
const path = require("path");

const homelocalgit = 'C:/Users/cthel/OneDrive/Desktop/LESSONS/Git/gitlog/.git'



function findcommit() {


const branch = fs.readFileSync(homelocalgit +  "/refs/heads/main", 'utf8'); //  (returns recent commit hash)

const CommitStart = branch.substring(0, 2) // fisrt two characters of the commit hash
const Commitfilled = branch.substring(2)// the rest of characters of the commit hash
let commit_data_path = `${homelocalgit}/objects/${CommitStart}/${Commitfilled}` // path to the commit data
commit_data_path = commit_data_path.trim() // remove any new lines and extra spaces

const recentcommit = fs.readFileSync(commit_data_path, 'utf8'); // the data of specifc commit



// Finds the link of the Arthor and Email Data and extracts it 


const commitLines = recentcommit.split('\n');
const InfoLine = commitLines.find(line => line.startsWith('author'));
const author = InfoLine.split(' ')[1];
const email = InfoLine.split(' ')[2];

console.log(`Author: ${author}`); 
console.log(`Email: ${email}`); 




}

findcommit()
