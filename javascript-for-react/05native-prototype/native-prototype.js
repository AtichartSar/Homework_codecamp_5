// 1
Function.prototype.defer = function (ms) {
    setTimeout(this, ms)
}
function f() {
    console.log("hello");
}
// f.defer(2000)
// 2

Function.prototype.defer2 = function (ms) {
    let f = this
    return function (a, b) {
        setTimeout(() => f(a, b), ms)
    }

}
function f2(a, b) {
    console.log(a + b);
}
f2.defer2(2000)(2, 3)