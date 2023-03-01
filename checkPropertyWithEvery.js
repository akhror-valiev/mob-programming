const user = {
    name: "Oshie",
    age: 30,
    email: null
}

let result = Object.values(user).every((val) => val)
console.log(result)


// second case we use every method to chcck obj of property

const persons = [
    {
        name: "Florin"
    },
    {
        name: 'Ivan',
    },
    {
        name: 'Liam'
    },
    {
        surename: 'Mars' // if it were name it would be true
    }
]

const res = persons.every((person) => person.name !== undefined);
console.log(res)