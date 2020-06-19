
//promise all
let a = Math.random();
function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function pmRandom(){
    return new Promise((resolve,rejects)=>{
        let n = getRandomInt(1 , 9);
        if (n < 7) resolve(n)
        else rejects(n)
    })
}
const pm1 = pmRandom()
const pm2 = pmRandom()
const pm3 = pmRandom()


Promise.all([pm1, pm2, pm3]).then((r) => {
    console.log('pass all');
    console.log(r);
}).catch((e) => {
    console.log('not pass')
    console.log(e)
})


// const pm1 = new Promise((resolve, rejects) => {
//     let n = getRandomInt(1 , 9);
//     if (n < 7) resolve(n)
//     else rejects(n)
// })

// const pm2 = new Promise((resolve, rejects) => {
//     let n = getRandomInt(1 , 9);
//     if (n < 7) resolve(n)
//     else rejects(n)
// })

// const pm3 = new Promise((resolve, rejects) => {
//     let n = getRandomInt(1 , 9);
//     if (n < 7) resolve(n)
//     else rejects(n)
// })