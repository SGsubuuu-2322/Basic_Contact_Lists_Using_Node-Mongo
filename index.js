const http = require("http");
const fs = require("fs");

const port = 8000;

function requestHandler(req, res) {
  //   console.log(req.url);

  res.writeHead(200, { "content-type": "text/html" });

  //   res.end("<h1>Gotchaa!!!</h1>");

  fs.readFile("./index.html", function (err, data) {
    if (err) {
      console.log("Error: " + err);
      return res.end("<h1>Error!!!</h1>");
    }

    return res.end(data);
  });
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
  if (err) {
    console.log("Error: ", err);
  }

  console.log("The server is up and running at port: " + port);
});
