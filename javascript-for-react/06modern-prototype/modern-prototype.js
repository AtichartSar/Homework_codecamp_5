let animal={
    eats:true
}
//สร้างobject ใหม่โดยให้ animal เป็น prototype
let rabbit = Object.create(animal)

console.log(rabbit.eats);

Object.getPrototypeOf(rabbit)==animal//true

//เปลี่ยน prototype ของ rabbit เป้น {}
Object.setPrototypeOf(rabbit,{})