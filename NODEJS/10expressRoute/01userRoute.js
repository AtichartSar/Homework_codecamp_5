const express =require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('no user')
})

router.get('/first',(req,res)=>{
    res.send('this first')
})

router.get('/second',(req,res)=>{
    res.send('this second')
})

module.exports = router