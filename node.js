var http = require('http');
http.createServer(function(request,response){
    // response.writeHeader(200,{'Content-Type':'text/plain'});
    response.end('hello world\n');
}).listen(7777);
console.log('ok')
 
