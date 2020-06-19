const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain',
        'Codecamp': 'five'
    });
    res.write('This is  response message...');
    res.write('From you local server');
    res.end()
}).listen(8080,()=>{
    console.log('Server start ...');
    
})