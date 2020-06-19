const { promises } = require("fs");

const pm =new Promise((resolve,rejects)=>{
    setTimeout(()=>{
        console.log('2');
        resolve()
    },1000)
});


console.log('1');
pm.then(()=>{
    console.log('3');
    
})
