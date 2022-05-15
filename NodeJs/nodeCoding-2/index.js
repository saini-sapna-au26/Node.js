const fs = require("fs");

// fs.mkdir("thapa", (err) => {
//   console.log("folder creates.");
// });

// fs.writeFile("./thapa/bio.txt", "my name is sapna saini", (err) => {
//   console.log("file created.");
// });

// fs.appendFile("./thapa/bio.txt", "adding another lines", (err) => {
//   console.log("appending lines.");
// });

// fs.readFile("./thapa/bio.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// deleted the bio.text file
// fs.unlink("./thapa/bio.txt", (err) => {
//   console.log("file deleted");
// });

// deleted the thapa folder
fs.rmdir("./thapa", (err) => {
  console.log("folder deleted");
});
