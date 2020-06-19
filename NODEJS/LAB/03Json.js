const fs = require('fs');
let data,jsobj,users,newdata

data = fs.readFileSync('jsonFile.json','utf-8');
jsobj = JSON.parse(data);
users = jsobj.users
console.log(users);

users.map(x=>{
    if(x.lastName==='mac')x.lastName = 'Apple'
    console.log(`${x.firstName} : ${x.lastName}`);
    
})


