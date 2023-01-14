// node.js example
const path = require("path");
const git = require("isomorphic-git");
const http = require("isomorphic-git/http/node");
const fs = require("fs");

const dir = path.join(process.cwd(), "test-clone");

async function main() {
  await git.clone({
    fs,
    http,
    dir: dir,
    corsProxy: "https://cors.isomorphic-git.org",
    url: "https://github.com/kliff9/gitlog",
    singleBranch: true,
    depth: 1,
  });
  console.log("Successfully Cloned");

  git.init({ fs, dir: dir });
  console.log("Successfully Init?");

  let status = await git.status({ fs, dir: dir, filepath: "README.md" });
  console.log("status:", status);

  let commits = await git.log({
    fs,
    dir: dir,
    depth: 5,
    ref: "main",
  });
  console.log("commits: ", commits);
}
main();
