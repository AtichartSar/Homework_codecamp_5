
console.log('1');
new Promise((resolve, rejects) => {
    setTimeout(() => {
        console.log('2');
        resolve()
    }, 1000);
}).then(() => {
    new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log('3');
            resolve()
        }, 1000);
    }).then(() => { 
        console.log('4');
        
    })
})
// *****************************************************************************
