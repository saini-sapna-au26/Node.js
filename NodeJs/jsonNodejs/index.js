const bioData = {
  name: "Sapna",
  age: 22,
  education: "Software Developer",
};

// console.log(bioData.name);

// convert biodata object to json
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// convert json to object
// const objData = JSON.parse(jsonData);
// console.log(objData);

// example: crteate another file, conert json file, readit and again convert it back
const fs = require("fs");

const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  //   console.log(data);
  const orgData = JSON.parse(data);
  console.log(orgData);
});
