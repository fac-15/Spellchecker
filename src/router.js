
const handlers = require("./handlers.js");
const path = require("path");


const router = (request, response) => {
  
  console.log('I am inside the router')
 
  const url = request.url;
  console.log('URL:', url)
  if(url ==='/'){
    handlers.handleHomeRoute(request, response);
  }else if (url === '/style.css'){
    console.log('I am css')
    handlers.handlePublic(request, response, url);
  }
  
}




module.exports = router;
