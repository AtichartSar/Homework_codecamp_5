const express = require('express')
const app = express()
const fs = require('fs')
let data = JSON.parse(fs.readFileSync('./jsonFile.json'))
let users = data.users

app.get('/', (req, res) => {
    let formHTML = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <h2>HTML Forms</h2>
        <form action="/dosearch" method="GET">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="John"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="Doe"><br><br>
            <input type="submit" value="Submit">
        </form>
    </body>
    <html>`
    res.send(formHTML)
});
app.get('/dosearch', (req, res) => {

    res.send(users.filter(x => x.firstName.includes(req.query.fname)))
});

app.listen(3000, () => console.log(`Example app listening on port port!`))