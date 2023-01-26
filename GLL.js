// const fs = require("fs");
// const zlib = require("zlib");
// const parse = require("./parse.js");
import fs from 'fs'
import zlib from 'zlib'
import parse from './parse.js';
import path from 'path';

const folder_name = process.argv[2];
console.log(folder_name);

let folder_path
const current_folder_path = process.cwd();
let parent_folder_path = path.dirname(current_folder_path);
// folder_path = path.join(parent_folder_path, folder_name);
folder_path = folder_name
console.log(folder_path);


// let testopen = fs.readFileSync("C:/Users/cthel/OneDrive/Desktop/LESSONS/Git/digital-garden/.git/refs/heads/master", "utf8");
// console.log('testopen: ', testopen)

const ref_ = (ref, path) => `${path}/.git/refs/${ref}/master`;

let mailmap = parse()
// console.log(mailmap) 

function check_mailmap(author_email) {
 let result = false
  // check if key(email) is in author line
  if (Object.keys(mailmap).includes(author_email)) {
    result = mailmap[author_email]
  }
  return result
}

function git_log() {
  let head = "heads";
  let branch_recent_commit = fs.readFileSync(ref_(head, folder_path), "utf8");

  for (let i = 0; i < 1; i++) {

    const CommitStart = branch_recent_commit.substring(0, 2); // fisrt two characters of the commit hash
    const Commitfilled = branch_recent_commit.substring(2); // the rest of characters of the commit hash
    let commit_data_path = `.git/objects/${CommitStart}/${Commitfilled}`; // path to the commit data
    commit_data_path = commit_data_path.trim(); // remove any new lines and extra spaces

    const compressed_data = fs.readFileSync(commit_data_path);
    const data = zlib.inflateSync(compressed_data);
    const commit_data = data.toString();

    const commitLines = commit_data.split("\n");
    const InfoLine = commitLines.find((line) => line.startsWith("author"));
    const parent_line = commitLines.find((line) => line.startsWith("parent"));

      const parent = parent_line.split(" ")[1];
      let Author_name = InfoLine.split(" ")[1];
      let author_email = InfoLine.split(" ")[2];
      // console.log('PREE',Author_name, author_email)

      if (mailmap[author_email]){ 
        let modified_Author = check_mailmap(author_email)

        if(modified_Author && modified_Author.split(" ").includes("filler")) {
          if (!modified_Author.split(" ")[0].includes('filler')) {
            Author_name = modified_Author.split(/( <.*?>)/)[0]

          }
          if (!modified_Author.split(" ")[1].includes('<filler')) { //includes so dont change
            console.log('true')
            author_email = modified_Author.split(/( <.*?>)/)[1];

          } 
        } else if (modified_Author === false ) {

          console.log("failed")
      } else {
        Author_name = modified_Author.split(/( <.*?>)/)[0]
        author_email = modified_Author.split(/( <.*?>)/)[1];
      }
          
      } 

      console.log(`commit: ${branch_recent_commit}`);

      console.log(`Arthor: ${Author_name} ${author_email}`);


      const Date_ = InfoLine.split(">")[1];

      const timestamp = Date_.split(" ")[1];
      let date = new Date(timestamp * 1000);
      let options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      let formattedDate = date.toLocaleString("en-US", options);

      console.log(`Date: ${formattedDate}\n`);

      branch_recent_commit = parent;
    }
  
}

git_log();


