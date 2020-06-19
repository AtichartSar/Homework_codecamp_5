const express = require('express')
const app = express()


// http://localhost:3000/user/first
const userRoute =  require('./01userRoute')
app.use('/user',userRoute)

// http://localhost:3000/form1.html
app.use(express.static('./public'))

// http://localhost:3000/pub/form1.html
app.use('/pub',express.static('./public'))    

// http://localhost:3000/form1.html
app.use(express.static('./public'))

// http://localhost:3000/
app.get('/',(req,res)=>{
    res.redirect('/pub/form1.html')

})

app.listen(3000,()=>{console.log('server start ...');
})
