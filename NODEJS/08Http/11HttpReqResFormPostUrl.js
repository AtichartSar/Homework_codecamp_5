const http = require('http')
const fs = require('fs')
const url = require('url')


let posHTMl = fs.readFileSync('./formpost.html')
http.createServer((req, res) => {

    // <===============[POST]==============>

    let body = "";
    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('end', () => {
        body = decodeURI(body)
        console.log('Body ' + body);
        res.setHeader('content-type','text/html; chartset=utf-8')
        res.writeHead(200)
        res.write(`<h> hello ${body}<h>`)
        res.end(posHTMl)
    })
    // <===============[POST]==============>


}).listen(8080, () => {
    console.log('server start...');

})