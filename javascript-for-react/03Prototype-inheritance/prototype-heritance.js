// 1
let animal={
    jumps:null
}
let rabbit ={
    __proto__:animal,
    jumps:true
  
}
// console.log(rabbit.jumps);
// delete rabbit.jumps
// console.log(rabbit.jumps);
// delete animal.jumps
// console.log(rabbit.jumps);

// 2
let pockets={
    money:2000
}
let bed={
    sheet:1,
    pillow:2,
    __proto__:pockets
}
let table={
    pen:3
}
 table.__proto__=bed

let head={
    glasses:12,
    __proto__:table
}
// console.log(head.__proto__ )

// 3
let animal1={
    eat(){
        this.full= true
    }
};
let rabbit1={
    __proto__:animal1
};
// animal1.eat()
// rabbit1.eat()
// console.log(rabbit1);
// console.log(animal1);

// 4
let hamter = {
    // stomach:[],
    eat(food){
        if(!this.stomach)this.stomach=[]
        this.stomach.push(food)
    }
}
let speedy = {
    __proto__:hamter
}
let lazy ={
    __proto__:hamter
}

speedy.eat("apple")
console.log(speedy.stomach);
lazy.eat("banana")
console.log(lazy.stomach);