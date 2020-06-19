const http = require('http')
const fs = require('fs')
const url = require('url')

function renderHTML(filename, req, res) {
    fs.readFile(filename, (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
        res.write(data)
        res.end();
    })
}

http.createServer((req, res) => {

    let pUrl = url.parse(req.url,true)
    console.log(`pname ${pUrl.pathname}`);
    console.log( pUrl.query);

    if (req.url === '/') {
        return renderHTML('./formget.html', req, res)
    }

    if (pUrl.pathname === '/getdata') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8 ' })
        res.write(`<p>your got data</p>`)
        res.write('<h1>ชื่อ : '+pUrl.query.fname+'</h1>')
        res.write('<h1>นามสกุล : '+pUrl.query.lname+'</h1>')
        return res.end
    }

    res.writeHead(404, { 'content-type': 'text/html' })
    res.write(req.url)
    res.write('<h1>Page not found</h1>')


    res.end()

}).listen(8080, () => {
    console.log('server start...');

})