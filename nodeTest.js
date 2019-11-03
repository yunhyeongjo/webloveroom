var http = require('http');
var server = http.createServer();

server.on('request',doRequest);
server.listen(1234);
console.log('서버가 시작 됩니다.');

function doRequest(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World\n');
  res.end();
}
