const fs = require('fs');

let data,jsobj,users,newdata

data = fs.readFileSync('jsonFile.json','utf-8');
jsobj = JSON.parse(data);
users = jsobj.users

users.map(x=>{
    x.phoneNumber = x.userId.toString().repeat(7)
    console.log(`${x.firstName} : ${x.phoneNumber}`)
})

newdata = JSON.stringify(users)
fs.writeFileSync('./output.json',newdata)
console.log('save out put json');
