const os = require('os');
let tmem = os.totalmem;
let fmem = os.freemem;
console.log(`total mem ${tmem} free mem ${fmem}`);
console.log(`Usage ${tmem-fmem}`);
console.log(os.hostname());




