// Read in the .mailmap file
var fs = require("fs");
var mailmap = fs.readFileSync(".mailmap", "utf8");

// Parse the contents of the .mailmap file
var map = {};
var lines = mailmap.split("\n");
for (var i = 0; i < lines.length; i++) {
  var line = lines[i];
  if (line.startsWith("#")) continue;
  var parts = line.split(" ");
  var name = parts[0];
  var email = parts[1];
  map[email] = name;
}

// Use the .mailmap information to map author names and email addresses

for (var i = 0; i < authors.length; i++) {
  var author = authors[i];
  var mappedName = map[author.email] || author.name;
  console.log(mappedName);
}
