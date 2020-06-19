function addSync(a,b){
    return a+b;
}
let sum = addSync(1,2);

function add(a,b,callbackfunc){
    callbackfunc(null,a+b);
}
let sum2;
add(1,2,(err,returnValue)=>{
    sum2 = returnValue;
})

console.log(sum);
console.log(sum2);
//****************************************************************************** */
let callbackvalue;
function hello4(err,value){
    callbackvalue = value;
}
function tryHello4(callbackfunction){
    let returnValue = 'returnValue';
    let callbackValue = 'callbackValue';
    callbackfunction(null,callbackValue);
    return returnValue;
}
//****************************************************************************** */
function dropBall(before,after){
    before();
    console.log('catch ball');
    console.log('release');
    after();
}

function kickBall(){
    console.log('kickball');
}
function buyBall() {
    console.log('buy ball');
}

dropBall(buyBall,kickBall);