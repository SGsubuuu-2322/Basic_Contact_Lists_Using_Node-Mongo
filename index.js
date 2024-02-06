const http = require("http");

const port = 8000;

const server = http.createServer();

server.listen(port, function (err) {
  if (err) {
    console.log("Error: ", err);
  }

  console.log("The server is up and running at port: " + port);
});
