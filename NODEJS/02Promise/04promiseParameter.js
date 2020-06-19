const { resolve } = require("path");
const { rejects } = require("assert");

function showText(text, time) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log(text);
            resolve()
        }, time)
    });
}

showText('1',1000)
.then(()=>{return showText('2',1000)})
.then(()=>{return showText('3',1000)})
.then(()=>{return showText('4',1000)})
.then(()=>{return showText('5',1000)})
.then(()=>{return showText('6',1000)})
.then(()=>console.log('done ...'))
