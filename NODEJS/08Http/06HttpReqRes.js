const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    if (req.url === '/') {
        res.write('<h2>this is homepage</h2>');
        return res.end();
    }
    if (req.url === '/user') {
        res.write('<h2>this is user</h2>');
        return res.end();
    }
    res.writeHead(404, 'Not found site', {
        'content-type': 'text/html'
    })
    res.end('<h2>Not found</h2>')

}).listen(8080, () => {
    console.log('server start');

})