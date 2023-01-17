// node.js example
const path = require("path");
const git = require("isomorphic-git");
const http = require("isomorphic-git/http/node");
const fs = require("fs");

const dir = path.join(process.cwd(), "gitlog-app");

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
// main();

let branch = false

async function main2() {
  await git.clone({
    fs,
    http,
    dir: dir,
    url: "https://github.com/kliff9/gitlog",

  });
  console.log("Successfully Cloned");
if (branch) {
 let newbranch =  await git.branch({
    fs,
    dir: dir,
    ref: 'new-branch',
    startPoint: 'main',
  })
  console.log("git.branch has ran: ", newbranch);
}

  // Commit changes to the repository
let commit1 = await git.commit({
  fs,
  dir: dir,
  message: 'Commiting new Files',
  author: {
    name: 'Top G',
    email: 'TheGoat@email.com',
  },
})
console.log("git.commit has ran: ", commit1);

}

main2()
