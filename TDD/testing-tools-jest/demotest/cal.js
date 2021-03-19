function add(a,b){
    if(a<0||b<0)throw new Error("arg should be positive")
    return a+b
}
function subtract(){
    return 0
}

module.exports={
    add:add,
    subtract:subtract
}