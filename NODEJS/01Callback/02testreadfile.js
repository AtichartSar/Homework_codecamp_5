const fs = require('fs');
const data = fs.readFileSync('./reademe.txt')
console.log(data);
console.log(data.toString());
