// test('two',()=>{
//     expect(2+2).toBe(4)
// })
//<================[ number ]======================>
// const add = require('../mytest')

// test('function add()',()=>{
//     expect(add(2,2)).toBe(4)
// })

// test('two plus two is not thress',()=>{
//     expect(add(2,2)).not.toBe(2)
// })

//<================[ String ]======================>

// test('there is not I in team',()=>{
//     const testValue = 'team'
//     expect(testValue).not.toMatch(/I/);
// })

// test('match Christoph',()=>{
//     expect('Christoph').toMatch(/stopsssss/);
// })

//<================[ array ]======================>
// const shoppingList = [
//     'kleenex',
//     'trash bags',
//     'beer'
// ]

// test('the shopping list has beer on it',()=>{
//     expect(shoppingList).toContain('beer')
// })
//<================[ object ]======================>
// test('object assignment ',()=>{
//     const data ={one:1};
//     data['two']=2
//     const value={one:1,two:2}
//     expect(data).toEqual(value)
// })

// test('object ccontain ',()=>{
//     const data ={one:1,two:2};
//     const value= {one:1};
//     expect(data).toEqual(expect.objectContaining(value))
// })
//<================[ throw ]======================>
// function compileAndroidCode() {
//     throw new Error('you are using the wrong JDK');
// }

// test('compiling android goes as expected', () => {
//     expect(compileAndroidCode).toThrow();
//     expect(compileAndroidCode).toThrow(Error);

//     expect(compileAndroidCode).toThrow('you are using the wrong JDK');
//     expect(compileAndroidCode).toThrow(/JDK/);
// });
//<====================[ null ]========================>
test('Truthiness',()=>{
    const data = null
    expect(data).toBeNull()
})
test('undefine',()=>{
    const data = undefined
    expect(data).toUndifined()
})