const express= require('express')
const app = express()
const fs = require('fs')
const bodyParser= require('body-Parser')


let data = JSON.parse(fs.readFileSync('./jsonFile.json'))
let users = data.users

app.use(bodyParser.urlencoded({extended:true}))

app.use('/pub',express.static('./public'))
app.get('/',(rew,res)=>{
    res.redirect('/pub/form1.html')
})

app.post('/dosearch',(req,res)=>{
    console.log(req.body);
    
    res.send(users.filter(x=>x.firstName.includes(req.body.fname)))
})

app.listen(3000,()=>{
    console.log('start server ...');
    
})