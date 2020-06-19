const http = require('http');
http.createServer((req,res)=>{
    console.log('request coming..');
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('hello world')
    res.end()
}).listen(8080)



