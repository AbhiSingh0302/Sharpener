const http = require('http');
const routes = require('./demo2');

const server = http.createServer(routes)
server.listen(3000);