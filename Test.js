const request = require("request");
const fs = require("fs");
const path = require("path");

//This Line was edited with 2nd email for testing purposes

async function main() {
  // Set the repository owner, name, and the path to the file you want to download
  const owner = "kliff9";
  const repo = "Monitor-Paradise";
  //   const owner = "octocat";
  //   const repo = "hello-world";
  const filePath = "README.md";

  // Set the URL of the file
  const fileUrl = `https://raw.githubusercontent.com/${owner}/${repo}/master/${filePath}`;

  // Send the GET request to download the file
  request.get(fileUrl, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    // Check the status code of the response
    if (response.statusCode !== 200) {
      console.error(
        `Failed to download file: ${response.statusCode} ${response.statusMessage}`
      );
      return;
    }

    // Parse the file contents
    const lines = body.split("\n");
    for (const line of lines) {
      console.log(line);
    }
  });
}

main();

// var https = require("https");
// var userName = "kliff9";
// var options = {
//   host: "api.github.com",
//   path: "/users/" + userName + "/repos",
//   method: "GET",
//   headers: {
//     "User-Agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
//   },
// };

// var request = https.request(options, function (response) {
//   var body = "";
//   response.on("data", function (chunk) {
//     body += chunk;
//   });
//   response.on("end", function () {
//     var json = JSON.parse(body);
//     var repos = [];
//     // console.log(json);
//     json.forEach(function (repo) {
//       repos.push({
//         name: repo.name,
//         description: repo.description,
//       });
//     });
//     console.log("the repos are  " + JSON.stringify(repos));
//   });
// });
// request.on("error", function (e) {
//   console.error("and the error is " + e);
// });
// request.end();
