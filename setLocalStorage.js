const obj = {
    name: 'Max',
    age: 20,
    status: 'student'
}

//convert to json obj

const json_obj = JSON.stringify('data', obj)

//Save to localStorage
localStorage.setItem('data', json_obj)




//get itema and convert from JSON to js object:

const js_obj = JSON.parse(localStorage.getItem('data'))
console.log(data)

