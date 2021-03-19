const myReadFile = require('../async');


test('myReadFile can read file without error', (done) => {
    myReadFile('mytest.js', function(err, result){
        if (err)
            throw new Error(err);
        else {
            expect(result.length).toBeGreaterThan(0);
            done();
        }
    });
});
