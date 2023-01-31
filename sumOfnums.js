let numbers = [5,10,5,20]

// sum should be 40.

let sum = 0
for (let num of numbers){
    sum+=num

}

console.log(sum)

const result = numbers.reduce((acc,curr)=>{
    return acc+curr
},0)

console.log(result)






