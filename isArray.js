var arr = [1, 2, 3]


console.log(Array.isArray(arr))

// Flatten array

arr1 = [1, 2, 3, [4, 5, 6]]

let flatArr = [].concat(...arr1)
console.log(flatArr)
