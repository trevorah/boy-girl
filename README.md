boy-girl
========

Determines whether a name is a boys name or a girls name.

How to install
--------------
Requires node.js to be installed.

`npm install boy-girl`

How to use
----------
```javascript
var boygirl = require('boy-girl');

boygirl('steve')
// 'boy'

boygirl('tina')
// 'girl'

boygirl('charlie')
// 'ambiguous'

boygirl('teapot')
// 'neither'
```

Results will either be "boy", "girl", "ambiguous" or "neither".

