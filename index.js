const http = require("http");

const port = 8000;

function requestHandler(req, res) {
  console.log(req.url);

  res.end("Gotchaa!!!")
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
  if (err) {
    console.log("Error: ", err);
  }

  console.log("The server is up and running at port: " + port);
});
