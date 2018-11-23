const handlers = require('./handlers.js');
const path = require('path');

const arr = [
  '/style.css',
  '/reset.css',
  '/dom.js',
  '/request.js',
  '/favicon.ico',
  '/404.html'
];

const router = (request, response) => {
  console.log('I am inside the router');
  const url = request.url;
  console.log('URL:', url);

  if (url === '/') {
    handlers.handleHomeRoute(request, response);
  } else if (arr.includes(url)) {
    console.log('I am css');
    handlers.handlePublic(request, response, url);
  } else if (url.indexOf('/search') !== -1) {
    console.log('I have handled a request!');
    handlers.handleRequest(request, response);
  } else {
    response.writeHead(404, { 'content-type': 'text/plain' });
    response.end('404 server error');
    console.log('404');
  }
};

module.exports = router;
