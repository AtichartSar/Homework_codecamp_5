const fs = require('fs');

function myReadFile(filename, callback) {
    return new Promise ( (resolve, reject) => {
        fs.readFile(filename, 'utf8', function(err, dataDemo1) {
            if (err)
                reject(err);
            else
                resolve(dataDemo1);
        });
    });
}

module.exports = myReadFile;
