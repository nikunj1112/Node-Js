const fs=require("fs");
fs.writeFileSync("hello.txt","hello world");
const data=fs.readFileSync("hello.txt","utf-8");
console.log(data);
fs.appendFileSync("hello.txt","\n hello me");



