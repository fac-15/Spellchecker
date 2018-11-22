const http = require("http");
const router = require("./router.js");

const server = http.createServer(router);
console.log("hi");
server.listen(3000, function() {
  console.log("Server is listening on port 3000.  Ready to accept requests!");
});

