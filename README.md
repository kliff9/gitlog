# gitlog

### Description

This Applications grabs the most recent commit of the Repository at hand and it will log the Aurthor, Date and email. I also implemented .mailmap

## To Do

implement mailmap functionality
read the mailmap file (function)
program to read any git folder and display the commit Author
node mailmap.js folder Name (should display all commits in the main branch)
Only need to list the Arthor Name -> Should show the orginal Author name. (after .mailmap changes)
1 function to read mailmap and another to replace

command:
node main.js folder

when executed it will provide a list of commits from the master branch and it show Author Name and Date of creation.
-.mailmap
-notes
-main.js

.git/objects/pack - look at isomorphic gitfile and see how they read packfiles
