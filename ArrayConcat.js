const arr1 = [1, 2, 3, 5, 10]
const arr2 = [1, 2, 4, 6, 7, 8]

const result = arr1.concat((arr2.filter((num) => {
    return !arr1.includes(num)
})))

console.log(result)