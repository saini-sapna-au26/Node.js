const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //   var fs = require("fs");
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.error(err);
  //     console.log(data.toString());
  //   });

  // 2nd way
  //   const rstream = fs.createReadStream("input.txt");

  //   rstream.on("data", (chunkData) => {
  //     res.write(chunkData);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("file not found...");
  //   });

  // 3rd way
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});
server.listen(8000, "127.0.0.1");
