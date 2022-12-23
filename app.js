var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

const request = require("request");
const fs = require("fs");
const path = require("path");

async function main() {
  // Set the repository owner and name
  const recent = true;
  const owner = "kliff9";
  const repo = "DopeChat";

  //Host Api: https://api.github.com/

  // Set the URL of the commit history
  const commitHistoryUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;
  console.log(commitHistoryUrl);

  // Set the personal access token
  const personalAccessToken = "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";

  // Set the options for the request
  const options = {
    url: commitHistoryUrl,
    headers: {
      Authorization: `Token ${personalAccessToken}`,
      "User-Agent": `${repo}`,
    },
  };

  // Send the GET request to download the commit history
  request.get(options, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    // Check the status code of the response
    if (response.statusCode !== 200) {
      console.log(response.body);
      console.error(
        `Failed to download commit history: ${response.statusCode} ${response.statusMessage}`
      );
      return;
    }

    // Parse the commit history
    const commitHistory = JSON.parse(body);
    if (recent) {
      console.log(commitHistory[0].commit.author);
      //   console.log(commitHistory[-1].commit.email);
    } else {
      for (const commit of commitHistory) {
        console.log(commit.sha);
        console.log(commit.commit.message);
      }
    }
  });
}

main();
