const myReadFile = require('../asyncPromise');
test('myReadFile can read file without error', () => {
    return myReadFile('mytest.js').then(result => {
        expect(result.length).toBeGreaterThan(0);
    });
});
