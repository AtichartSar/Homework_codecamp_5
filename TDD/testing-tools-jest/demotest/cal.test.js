const cal = require('./cal')
test('1+1=2 ?',()=>{
    expect(cal.add(1,1)).toBe(2)
})

test('1+2=3 ?',()=>{
    expect(cal.add(1,2)).toBe(3)
})

test('2+2=4 ?',()=>{
    expect(cal.add(2,2)).toBe(4)
})

test('-1+1=should throw error ?',()=>{
    expect.assertions(1) //expect อย่างน้อย 1 ครั่ง
    try {
        cal.add(-1,1)
    } catch (e) {
        expect(e.message).toMatch(/arg should be positive/)
    }
})

test(' 0.1+0.2=0.3 ?',()=>{
    expect(cal.add(0.1,0.2)).toBeCloseTo(0.3)
})


test('1-1=0 ?',()=>{
    expect(cal.subtract(1,1)).toBe(0)
    
})


