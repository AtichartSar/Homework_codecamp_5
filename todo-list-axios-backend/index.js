//ดึงไฟล .env มาใช้งาน
require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const todoListRoutes = require('./routes/todoList')
const userRoutes = require('./routes/user')
app.use('/todo-list', todoListRoutes)
app.use('/user',userRoutes)

require('./config/passport/passport')

const db = require('./models/index')
// db.sequelize.sync({force:true}).then(() => {
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("service start port " + port);
    })
})