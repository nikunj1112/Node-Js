const fs = require("fs");

fs.writeFileSync("notes.txt", "Hello World!");
const data = fs.readFileSync("notes.txt", "utf-8");

fs.writeFileSync(
  "index.html",
  `<html>
        <head>
            <title>Node JS Website</title>
        </head>
   </html>`
);

console.log(data);