const fs = require("fs");

// in Asych we have to gave callback function i.e err.

// fs.writeFile("read.txt", "This is asynchonos file", (err) => {
//   console.log("file is created.");
// });

// we pass them a function as an argument - a callback - that
// gets called when that task completes.
// the callback has an argument that tells you wheather the operation
// completed successfully.
//Now we need to saywhat to do when fs.writeFile has
// completed (even if it's nothing), and start checking for error.

// fs.appendFile("read.txt", "plzz add something", (err) => {
//   console.log("task completed");
// });

fs.readFile("read.txt", "UTF-8", (err, data) => {
  console.log(data);
});
