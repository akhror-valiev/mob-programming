// Question: function should return sum of unlimited arguments.

function sumOfArgs(...args) {
    return args.reduce((acc, curr) => acc + curr)
}

console.log(sumOfArgs(0, 1, 2, 3, 5, 4, 5, 5, 6))

// second traditional methods

function sumAllArgs(...nums) {
    let total = 0
    for (const num of nums) {
        total += num
    }
    return total
}
console.log(sumAllArgs(3, 4, 5, 6, 7))