// console.log("sapna saini");

// const name = "sapna";
// console.log(name);

/////////////////
// const fs = require("fs");
// fs.writeFileSync("read.text", "Welcome to my first node file");

// fs.appendFileSync("read.text", " how r u, hope doing good");

// const buf_data = fs.readFileSync("read.text");
// org_data = buf_data.toString();
// console.log(org_data);

// to remane the file
// fs.renameSync("read.text", "readWrite.txt");

/////////////////////////////////////////////////////
// coding challenges
/* sync ways....
var fs = require("fs");
// Create a folder name it Thapa
fs.mkdirSync("Thapa");
// 2. Create a file in it named bio.txt and add data into it .
fs.writeFileSync("Thapa/bio.txt", "Kucha bhi Likdijia ");
// 3 : Add more data into the file ate the end if existing data
fs.appendFileSync(
  "Thapa/bio.txt",
  "Added more data into the file ate the end if existing data"
);
// 4 : Read the data data without getting the buffer data at first
const read_data = fs.readFileSync("Thapa/bio.txt").toString();
console.log(read_data);
// 5 : Rename the bio.txt to mybio.txt
fs.renameSync("Thapa/bio.txt", "Thapa/mybio.txt");
// 6 : now delete both the file and folder
fs.unlinkSync("Thapa/mybio.txt");
fs.rmdirSync("Thapa");
*/
