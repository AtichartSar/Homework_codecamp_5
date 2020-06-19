const express = require('express')
const app = express()

app.get('/bye',(req,res)=>{
    res.send('Good bye')
})
app.listen(5555,()=>{
    console.log('start . . .');
})