const a1 = [1, 2, 3, 4]
const a2 = [1, 2, 5, 6]

let res1 = a1.filter((num) => !a2.includes(num))
let res2 = a2.filter((num) => !a1.includes(num))

console.log([...res1, ...res2])