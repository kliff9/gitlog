// import parse from "./parse.js";


/*----------------------------- ------------------------------ */
const parse = require("./parse.js");
const fs = require("fs");

const ref_ = (ref) => `./.git/refs/${ref}/main`;

function git_log() {
  let head = "heads";
  let branch_recent_commit = fs.readFileSync(ref_(head), "utf8");
  for (let i = 0; i < 10; i++) {

  const CommitStart = branch_recent_commit.substring(0, 2); // fisrt two characters of the commit hash
  const Commitfilled = branch_recent_commit.substring(2); // the rest of characters of the commit hash
  let commit_data_path = `.git/objects/${CommitStart}/${Commitfilled}`; // path to the commit data
  commit_data_path = commit_data_path.trim(); // remove any new lines and extra spaces

  const recentcommit = fs.readFileSync(commit_data_path, "utf8"); // the data of specifc commit  console.log(recent_commit);

  const commitLines = recentcommit.split("\n");
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

/*
commit 0598d8133f30fc185fd3574734303dad54464d04 (HEAD -> main)
Merge: 459209e a946949
Author: Kliff_Da_Goat <c.thelusca@hotmail.com>
Date:   Sat Jan 14 13:52:15 2023 -0500

    Merge branch 'main' of https://github.com/kliff9/gitlog


    commit a946949eb3df047cc16bf82a84382d107e984dd2 (origin/main, origin/HEAD)
Author: Kliff_Da_Goat <c.thelusca@hotmail.com>
Date:   Sat Jan 14 06:36:52 2023 -0500

    1/14/2023
*/
