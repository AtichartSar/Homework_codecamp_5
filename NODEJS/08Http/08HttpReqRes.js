const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html; charset=utf-8'
    })
    if (req.url === '/') {
        res.write('<h2>this is homepage </h2>');
        for(let i=1;i<6;i++){
            res.write(`<h${i}> ยินดีต้อนรับ </h${i}>`)
        }
        return res.end();
    }
    if (req.url === '/user') {
        res.write('<h2>this is user</h2>');
        return res.end();
    }
    if (req.url === '/page') {
        return form(req, res)
    }
    function form(req, res) {
        res.write(
            `<form>
              <label for="username">Username:</label><br>
              <input type="text" id="username" name="username"><br>
              <label for="pwd">Password:</label><br>
              <input type="password" id="pwd" name="pwd">
            </form>`
        );
        res.end();
    }
    res.writeHead(404, 'Not found site', {
        'content-type': 'text/html'
    })
    res.end('<h2>Not found</h2>')

}).listen(8080, () => {
    console.log('server start');

})