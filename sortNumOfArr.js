const x = [1, 2, 3, 4, 5];
const y = [5, 3, 2, 4, 1];

console.log(x.sort((a, b) => a - b));
console.log(y.sort((a, b) => a - b));

let res = JSON.stringify(x) === JSON.stringify(y);
console.log(res);
