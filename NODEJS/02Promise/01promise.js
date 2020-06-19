const { promises } = require("fs");
const { resolve } = require("path");
const { rejects } = require("assert");

let done = true;
const isItDoneYet = new Promise((resolve,rejects)=>{
    if(done){
        const workDone = 'here is the thin is built'
        resolve(workDone)
    } else {
        const why = 'Still work  on something else '
        rejects(why)
    }
})

const checkfirstdonr = ()=>{
    isItDoneYet.then(ok=>{
        console.log('came from resolve state in promise');
        console.log(ok);
    })
    .catch(err=>{
        console.log('came from reject state in promise'); 
        console.log(err);
    })
}