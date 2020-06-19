const http = require('http')
http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('content-type','text/html')
    if (req.url === '/') {
        res.write('<h2>this is homepage</h2>');
        return res.end();
    }
    if (req.url === '/user') {
        res.write('<h2>this is user</h2>');
        return res.end();
    }
    res.statusCode = 404    
    res.statusMessage ='Not found in our site ...'
    res.setHeader('content-type','text/html')
    res.write(res.statusMessage)
    res.end('<h2>Not found</h2>')

}).listen(8080, () => {
    console.log('server start');

})