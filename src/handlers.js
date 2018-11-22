const handleHomeRoute = (request, resonse) => {
  const filePath = path.join(__dirname, "..", url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      resonse.writeHead(404, "Content-Type: text/html");
      response.end("<h1>400, file not found</h1>");
    } else {
      response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      response.end(file);
    }
  });
};

//
// const fs = require("fs");
// const path = require("path");
//
// const handleHomeRoute = (req, res) => {
//
//
// }
//
// const handlePublic = (req, res, url) => {
//
//
// }
//
//
//
// module.exports = {
//     handleHomeRoute,
//     handlePublic
// };
