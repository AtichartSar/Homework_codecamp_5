let done = true;
function isLtDoneYet(value) {
    return new Promise((resolve, rejects) => {
        if (done) {
            let work = 'here is the thing I built :'+value
            resolve(work)
        } else {
            rejects('still work or some thing else')
        }
    })
}

async function checkit() {
    try {
        let d = await isLtDoneYet('1')
        console.log(d)
        let s = await isLtDoneYet(d)
        console.log(s);
    } catch (error) {
        console.log(error);
    }
}

checkit()