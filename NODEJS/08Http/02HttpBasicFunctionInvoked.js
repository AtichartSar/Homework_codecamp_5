const http = require('http');

function app(req,res){
        console.log('request coming..');
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('hello world')
        res.end()
    }

http.createServer(app).listen(8080)



