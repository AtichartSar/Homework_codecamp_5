const express = require('express')
const fs = require('fs')
const app = express()

let data = JSON.parse(fs.readFileSync('./jsonFile.json'))
let users = data.users

// localhost:3000/search?username=1
app.get('/search', (req, res) => {

  res.send(users.find(x=>x.firstName==req.query.username))
})

app.get('/users/:uid', (req, res) => { 
    res.send(users[parseInt(req.params.uid)-1]) 
})

app.get('/username/:username', (req, res) => { 
    
    res.send(users.find(x=>x.firstName===req.params.username)) 
})

app.get('/list', (req, res) => res.send(users))

app.get('/listname', (req, res) => {
    let outHtml = '<ol>'
    users.forEach(e => {
        outHtml += `<li>${e.firstName} ${e.lastName}</li>`
    });
    outHtml += '</ol>'
res.send(outHtml)
})

app.listen(3000, () => console.log(`Example app listening on port port!`))
