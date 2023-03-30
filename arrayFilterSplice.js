let array = [1, 2, 3, 4, 5]
let itemRemove = 3

const res = array.filter((num) => {
    return num !== itemRemove
})
console.log(res)

const arr = [3, 4, 5, 1, 2]
const indexToRemove = arr.indexOf(5)
const newArr = arr.splice(indexToRemove, 1)
console.log(arr)