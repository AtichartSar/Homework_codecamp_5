const myReadFile = require('../asyncPromise');
test('myReadFile can read file without error', async () => {
    const result =  await myReadFile('mytest.js')
    expect(result.length).toBeGreaterThan(0)
});
