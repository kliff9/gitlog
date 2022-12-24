const fs = require('fs');
const path = require('path');

// const nodegit = require('nodegit');

// async function findObject(repoPath, objectId) {
//   // Open the repository
//   const repo = await nodegit.Regit rev-parse --git-dirpository.open(repoPath);

//   // Look up the object by its ID
//   const obj = await repo.getObject(objectId);

//   console.log(`Object found: ${obj.id().tostrS()}`);
// }

// findObject('C:/Users/cthel/OneDrive/Desktop/LESSONS/Git/gitlog/.git/', '6c1cf7d7a6bdbd7a86a3f3e7f1e2a29d7a4a9b4c');
console.log(`GIT_DIR: ${process.env.GIT_DIR}`);
const repositoryPath = process.cwd();
const objectPath = `${repositoryPath}.git/objects/`

const objectData = fs.readFileSync(objectPath);
console.log(objectData)
// function readObject(objectId) {
//   const objectPath = `.git/objects/${objectId.slice(0, 2)}/${objectId.slice(2)}`;
//   const objectData = fs.readFileSync(objectPath);
//   const objectContent = objectData.toString();
//   console.log(objectContent);
// }

// readObject('');
