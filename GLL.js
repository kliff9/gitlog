const fs = require("fs");
const zlib = require("zlib");
// import parse from "./parse.js";
const parse = require("./parse.js");

const ref_ = (ref) => `./.git/refs/${ref}/main`;

function git_log() {
  let head = "heads";
  let branch_recent_commit = fs.readFileSync(ref_(head), "utf8");
  for (let i = 0; i < 5; i++) {
    const CommitStart = branch_recent_commit.substring(0, 2); // fisrt two characters of the commit hash
    const Commitfilled = branch_recent_commit.substring(2); // the rest of characters of the commit hash
    let commit_data_path = `.git/objects/${CommitStart}/${Commitfilled}`; // path to the commit data
    commit_data_path = commit_data_path.trim(); // remove any new lines and extra spaces

    //   const recentcommit = fs.readFileSync(commit_data_path, "utf8"); // the data of specifc commit  console.log(recent_commit);

    const compressed_data = fs.readFileSync(commit_data_path);
    const data = zlib.inflateSync(compressed_data);
    const commit_data = data.toString();

    const commitLines = commit_data.split("\n");
    const InfoLine = commitLines.find((line) => line.startsWith("author"));
    const parent_line = commitLines.find((line) => line.startsWith("parent"));

    if (InfoLine) {
      const parent = parent_line.split(" ")[1];

      const Author = InfoLine.split(">")[0];
      const Date_ = InfoLine.split(">")[1];

      console.log(`commit: ${branch_recent_commit}`);

      console.log(`Arthor: ${Author}`);

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
    // console.log(`commit: ${branch_recent_commit}`);
  }

  // console.log('PL ',parent_line)

  // console.log(recentcommit);

  // console.log(parse());
}

git_log();

// Read the compressed data from the object file
