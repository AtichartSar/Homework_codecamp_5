const express = require('express')
const app = express()
const cors = require('cors')
const todoListRoute = require('./routes/todoList')

//cors between Front-end and Back-end
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/todo-list',todoListRoute)

app.listen(8000,()=>{
    console.log('server start port 8000');
    
})