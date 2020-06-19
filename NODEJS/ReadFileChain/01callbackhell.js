const fs = require('fs');

fs.readFile('start.txt','utf-8',(err,data)=>{
    console.log(data);
    fs.readFile(`${data}`,'utf-8',(err,data)=>{
        console.log(data);
        fs.readFile(`${data}`,'utf-8',(err,data)=>{
            console.log(data);
            
        })
    })
})