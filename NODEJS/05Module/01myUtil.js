let pi = 3.14;
const user = {name:'John',age:30}

function getRandom(min = 0, max = 9) { //defult param
    return Math.floor(Math.random() * (max - min) + min)
}

module.exports.getCircle = function circle(r) {
    return pi * r ** 2;
}


module.exports.getRandom = getRandom

exports.getUser = user 
