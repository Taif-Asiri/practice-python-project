console.log('Welcome to functions')

// Function declaration with a single parameter
function sayHello(name) {
    console.log('Hello ' + name)
}

// Invoking / calling the function with an argument
sayHello('Conor')
sayHello('Adel')
sayHello('Farah')

function addOne(num){
    return num + 1
}

const newNumber = addOne(8)
console.log(newNumber)
console.log(addOne(10))

function sum(numOne, numTwo){
    numOne = parseInt(numOne)
    // Blocking if Statement
    if (isNaN(numOne)) return 'Sorry You input a word not a number'
    
    numTwo = parseInt(numTwo)

    if (isNaN(numTwo)) return 'Sorry You input a word not a number'
    
    // Being verbose
    const total = numOne + numTwo
    return total
}

// call the function with multiple arguments
console.log(sum(4, 9))

const numOne = prompt('Gimmeh a number!')
const numTwo = prompt('Gimmeh another number!')
const total = sum(numOne, numTwo)
alert(total)


