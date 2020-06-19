const fs = require('fs');

fs.readFile('./reademe.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});
console.log(`done . . .`);
