// Routing
// ww.google.com - welcome to my home page
// /about - welcome to my about pg..

const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  //   res.send("welcome to my home page");
  // single line code send to webpg
  //   res.send("<h1>welcome to my home page </h1>");
  // multiples lines code send
  res.write("<h1>welcome to my home page </h1>");
  res.write("<h1>welcome to my home  page again  </h1>");
  res.send(); // cconnect close..
});

app.get("/about", (req, res) => {
  res.send("welcome to my about page");
});

app.get("/temp", (req, res) => {
  res.send([
    {
      id: 1,
      name: "sapna",
    },
    {
      id: 1,
      name: "sapna",
    },
  ]); // json code
});

app.listen(port, () => {
  console.log(`listening to port no ${port}`);
});
