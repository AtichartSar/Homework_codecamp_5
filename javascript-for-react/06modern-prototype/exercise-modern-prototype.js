// 1
let dictionary = Object.create(null, {
    toString: {
        value(){
            return Object.keys(this).join()
        }
    }
});

// console.log(dictionary);
// 2
function Rabbit(name) {
    this.name = name
}
Rabbit.prototype.sayHi = function(){
    console.log(this.name);
}
let rabbit = new Rabbit("say hi")
rabbit.sayHi()
console.log(rabbit);