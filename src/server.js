const http = require("http");
const router = require("./router.js");

const server = http.createServer(router);
console.log("hi");
server.listen(3000, function() {
  console.log("Server is listening on port 3000.  Ready to accept requests!");
});

//

// var fs = require("fs");
// var path = require("path");
//
// http.createServer(function(req, res) {
//     console.log(`${req.method} request for ${req.url}`);
//
//     if (req.url === "/") {
//       fs.readFile("./public/index.html", "UTF-8", function(err, html) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(html);
//       });
//     }
