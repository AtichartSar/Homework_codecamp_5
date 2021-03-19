const fs = require('fs');

function myReadFile(filename, callback) {
    fs.readFile(filename, 'utf8', function(err, dataDemo1) {
        if (err)
            callback(err,null);
        else
            callback(null,dataDemo1);
    });
}

module.exports = myReadFile;



