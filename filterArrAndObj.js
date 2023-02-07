const ages = [12, 17, 8, 21, 14, 11, 15, 16, 18, 19, 20]

//Question-1 any age greater than 18 should be in another array

// 1-solution traditinal way
let adults = []
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 18) {
        adults.push(ages[i])
    }
}

console.log(adults)


//2-solution with arrow function
const results = ages.filter((age) => age > 18)
console.log(results)

const animals = [
    { name: "Lion", family: "Cat", food: 'Meat' },
    { name: "Tiger", family: "Cat", food: 'Meat' },
    { name: "Shark", fish: "Cat", food: 'Meat' },
    { name: "Sparrow", bird: "bird", food: 'Grass' },
    { name: "Eagle", family: "bird", food: 'Meat' },
    { name: "Penguin", family: "bird", food: 'fish' },
    { name: "squirrel", family: "rodent", food: 'nuts' },
]

//Question-2 Find animals who eat Meat.

const findAnimal = animals.filter((animal) => {
    return (
        animal.food === 'Meat'
    )
})

console.log(findAnimal)

//Question-3 Find animal whose family cat and eat meat

const findAnimalEat = animals.filter((animal) => {
    return (
        animal.family === 'Cat' && animal.food === 'Meat'
    )
})

console.log(findAnimalEat)

const numbers = [2, 1, 4, 5, 55, 2, 10, 20, 22, 11, 13, 18, 100, 201, 110, 86, 33, 99, 112]

const num = numbers.filter((n) => n % 2 === 0)
console.log(num)