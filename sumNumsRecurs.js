function sumNums(a, b) {
    if (b !== undefined) {
        return a + b
    } else {
        return function (b) {
            return a + b
        }
    }
}

console.log(sumNums(2)(6))