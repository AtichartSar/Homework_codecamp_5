// 1

let user = {
    name: "john",
    year: 30
}
let { name, year: age, usAdmin = false } = user

// console.log(`${name} ${age} ${usAdmin}`)

// 2
let salaries = {
    john: 100,
    Peter: 300,
    Mary: 250
}
function topSalary(salaries) {
    let mostsalary = 0;
    let whoMostSalary = null;
    for (const key in salaries) {
        salary = salaries[key];
        if (salary > mostsalary) {
            mostsalary = salary
            whoMostSalary = key
        }

    }
    return {whoMostSalary,mostsalary};
}
let {whoMostSalary,mostsalary}= topSalary(salaries);
console.log(whoMostSalary)