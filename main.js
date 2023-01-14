// import parse from "./parse.js";
const parse = require("./parse.js");
const fs = require("fs");

const ref_ = (ref) => `./.git/refs/${ref}/main`;

function git_log() {
  const recent_commit = fs.readFileSync(ref_("heads"), "utf8");

  console.log(recent_commit);

  console.log(parse());
}

git_log();
