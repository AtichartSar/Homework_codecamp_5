const http = require('http')
const fs = require('fs')
function renderHTML(filename, req, res) {
    fs.readFile(filename, (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
        res.write(data)
        res.end();
    })
}
http.createServer((req, res) => {
    if (req.url === '/')
        return renderHTML('./index.html', req, res);
    if (req.url === '/form')
        return renderHTML('./formget.html', req, res);
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>Page not found </h1>')
    res.end()
}).listen(8080, () => {
    console.log('server start');

})