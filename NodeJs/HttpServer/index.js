// The http.createServer() menthod includes request and respons parameter which is supplies by node.js.

// The request object can be used to get information about the current http request
// e.g., url, request header, and data.

// The response object can be used to send a response for a current http request.

// If the response from the http server is supposed to be displayed as html,
// You should include an http header with the correct type:

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   //   console.log(req.url);
//   if (req.url == "/") {
//     res.end("Hello from the home sides");
//   } else if (req.url == "/about") {
//     res.end("Hello from the aboutUs sides");
//   } else if (req.url == "/contact") {
//     res.end("Hello from the contactUs sides");
//     // here am creating api
//   } else if (req.url == "/userAPI") {
//     fs.readFile(`${_dirname}/userApi/userapi.json`, "utf-8", (err, data) => {
//       console.log(data);
//       res.end(data);
//     });
//     // res.end("Hello from the userAPI sides");
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.end(" <h1> 404 error pages. page doesn't exit.... </h1>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("listening to the port no 8000");
// });

// it make webserver page by using localhost:8000
