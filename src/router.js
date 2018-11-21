//works;
const fs = require("fs");
const path = require("path");
// request.on("data", function() {
//   // do something
// });
console.log("hi router");
const router = (request, response) => {
  console.log("hi inside router");
  const url = request.url;
  console.log(url);
  if (url === "/") {
    //home

    const filePath = path.join(__dirname, "..", "index.html");
    console.log(filePath);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, "Content-Type: text/html");
        response.end("<h1>Sorry, we have a problem at our end</h1>");
      } else {
        response.writeHead(200, "Content-Type: text/html");
        response.end(file);
      }
    });
  }
  /////////////////
  else if (url.indexOf("public") !== -1) {
    const extension = url.split(".")[1];
    const extensionType = {
      html: "text",
      css: "text/css",
      js: "application/javascript",
      ico: "public/image/"
    };
    response.writeHead(200, "Content-Type: text/css");
    response.end(file);
  } else {
    response.writeHead(404);
    response.end("<h1>404 not found</h1>");
  }
};
module.exports = router;
