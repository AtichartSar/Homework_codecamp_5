const { resolve } = require("path")
const { rejects } = require("assert")

function showtext(text, time) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log(text);
            resolve(1000)
        }, time)
    })
}

// IIFE (Immediately Invoked Function Expression)
(async function returntext(tets) {    
    try {
        console.log(tets);
        let a = await showtext('1', 1000)
        let b = await showtext('2', a)
                await showtext('3', b)
                await showtext('4', 1000)
                await showtext('5', 1000)
    } catch (error) {
        console.log(error);
    }
})('showww')

// returntext()
