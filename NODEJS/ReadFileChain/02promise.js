const fs = require('fs')
const { resolve } = require('path')
const { rejects } = require('assert')

const getFile = (fileNmae) => {
    return new Promise((resolve, rejects) => {
        fs.readFile(fileNmae, 'utf-8', (err, data) => {
            if (err) rejects(err);
            else resolve(data);
        })
    })
}

getFile('./start.txt')
    .then((data) => {
        console.log(data);
        return getFile(data)
    })
    .then((data) => {
        console.log(data);
        return getFile(data)
    })
    .then((data) => {
        console.log(data);
        console.log('Done .. .');
        
    })
