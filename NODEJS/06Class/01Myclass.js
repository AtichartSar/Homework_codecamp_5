
const nu = require('../05Module/01myUtil')
class Human {
    constructor(name, age = nu.getRandom(1,99)) {
        this.name = name;
        this.age = age;
    }
    info(){
        console.log(this.name,this.age);
    }
}

exports.getHuman = Human