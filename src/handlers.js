const fs = require('fs');
const path = require('path');

const handleHomeRoute = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) =>{
    if(error) {
      console.log(error);
      response.writeHead(500, {'Content-Type': 'text/html'});
      response.end("<h1>Sorry, we're having problem at our end</h1>");
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(file);
    }
  });

};

const handlePublic = (resquest, response, url) => {
     const filePath = path.join(__dirname, '..', 'public', url);
     const ext = url.split('.')[1];
     const extType = {
            html: "text/html",
            css: "text/css",
            js: "application/javascript",
            ico: "image/x-icon"
          };
     fs.readFile(filePath, (error, file) => {
          if(error){
              console.log(error);
              response.writeHead(404, {'Content-Type': 'text/plain'});
              response.end(404,"<h1>Sorry, file not found</h1>");
            } else {
              response.writeHead(200, {'Content-Type': `${extType[ext]}`});
              response.end(file);
            }
          })
}


module.exports = {
    handleHomeRoute,
    handlePublic
};
