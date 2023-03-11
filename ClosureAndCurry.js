const add = (a, b) => a + b

const add5 = (a, b) => add(a, 10)

console.log(add5(5))


const curry = x => y => z => x * y * z

console.log(curry(2)(3)())