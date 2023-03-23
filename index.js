let file = `
Joe R. Developer <joe@example.com>
Jane Doe <jane@example.com> <jane@laptop.(none)>
Jane Doe <jane@example.com> <jane@desktop.(none)>
Joe R. Developer <joe@example.com> Joe <bugs@example.com>
Jane Doe <jane@example.com> Jane <bugs@example.com>
`

import { parseMailmap } from "./mailmap.js"
console.log(parseMailmap(file))

/** 
[
  {
    commit: {
      email: jane@laptop.(none)
      name: null
    }
    canonical: {
      name: Jane Doe
      email: jane@example.com
    }
  },
  {
    commit: {  
      email: bugs@example.com
      name: Jane
    }
    canonical: {
      name: Jane Doe
      email: jane@example.com
    }
  },
]
*/