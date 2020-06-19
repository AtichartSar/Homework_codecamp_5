const fs = require('fs');
const getfile = (filename) => {
    return new Promise((resolve, rejects) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err) rejects(err)
            resolve(data)
        })
    })
}

async function rungetfile() {
    try {
        let a = await getfile('start.txt');
        console.log(a);
        let b = await getfile(a);
        console.log(b);
        let c = await getfile(b);
        console.log(c);
    } catch (error) {
        console.log(error);
        
    }

}

rungetfile()