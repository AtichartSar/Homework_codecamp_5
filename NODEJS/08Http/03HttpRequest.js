const server = require('http')
server.createServer((req,res)=>{
    console.log(req.headers)
}).listen(8080)

let student = {
    name:'u',
    age:25,
    address:'bangkok'

}
let {name,age,address} = student
console.log(name);
console.log(age);
console.log(address);
