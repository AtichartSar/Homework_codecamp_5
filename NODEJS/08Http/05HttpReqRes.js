const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    if (req.url === '/home') {

        console.log(req.complete);
        res.write('this is homepage');
        return res.end();
    }
    res.end('welcome to node js')

}).listen(8080, () => {
    console.log('server start');
    
})