console.log('Welcome to Objects')

const name = 'George'
const age = 32
const studentLocation = 'London'

// Object Literal Notation
// objects consist of:
// Properties made up of key: value,
const student = {
    name: 'George',
    age: 32,
    location: 'London',
    car: {
        make: 'Ferarri',
        color: 'red'
    }
}

// Can't do this with const
student = {newKeys: 'New Values'}

console.log(typeof student)
console.log(name)
// Dot Notation
console.log(student.location)
console.log(student.car.make)

// update an existing property value
console.log(student)
student.location = 'Manama'
console.log(student)

// add a new property
student.studying = 'SEB'
console.log(student)

// remove a whole property from the object
// use the 'delete' keyword
delete student.car
console.log(student)

// Get all the keys of an object
const keys = Object.keys(student)
console.log(keys)

// {} <- this is truthy
// 0 <- is a falsy value
const exampleObj = {}
console.log(Object.keys(exampleObj).length)

if (Object.keys(exampleObj).length){
    console.log('the object is not empty')
} else {
    console.log('The object Is Empty!')
}


 car = {
    make: 'Toyota',
    color: 'white',
    currentSpeed: 40,
    accelerate(){
        car.currentSpeed = car.currentSpeed + 1
    }
}

car = {
    make: 'porsche',
    color: 'black',
    currentSpeed: 40,
    accelerate(){
        car.currentSpeed = car.currentSpeed + 1
    },
    decelerate(){
        car.currentSpeed = car.currentSpeed - 1
    },
}