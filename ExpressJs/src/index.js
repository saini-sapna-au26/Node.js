// const { application } = require("express");
const path = require("path");
const express = require("express");
const requests = require("request");
const app = express();

// console.log(__dirname);

// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "../public");

//built in middleware  (from public folder)
app.use(express.static(staticPath));

// app.get(route, callback);
app.get("/", (req, res) => {
  res.send("hello world from the express");
});

// app.get("/about", (req, res) => {
//   res.send("hello world from about page..");
// });

app.get("/about", (req, res) => {
  requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=f3627f8b49a44338cc4a872e07fb2059`
  )
    .on("data", (chunk) => {
      const objdata = JSON.parse(chunk);
      const arrData = [objdata];
      console.log(
        `city name is ${arrData[0].name} and the temp is ${arrData[0].name.temp}`
      );

      res.write(arrData[0].name);
      // console.log(realTimeData);
    })
    .on("end", (err) => {
      if (err) return console.log("connection closed due to error", err);
      res.end();
    });
});
// The callback function has 2 parameters, request(req) and response(res).
// The request object(req) represents the HTTP request and
// has properties for the request query string, parameters, body,
// HTTP headers, etc.

// Similarly, the response onject represents the HTTP response
// that the express app sends when it receives an HTTP request.

app.get("*", (req, res) => {
  res.render("404", {
    // firtly i have to create error page.
    errorcommnt: "opps page couldn't be found",
  });
});

app.listen(8000, () => {
  console.log("listing the port at 8000");
});
// API
// get - Read
// post - create new data
// put - update
// delete - delete
