
console.log('in control flow')

// Boolean Logic

const numOne = 0
const numTwo = 5

// == loose equality (no type checking)
// === strict equality (with type checking)

console.log(numOne === numTwo)

// Not Equal to
console.log(numOne !== numTwo)

// greater than
console.log(numOne > numTwo)

// Less than / fewer than
console.log(numOne < numTwo)

// less than or equal to
console.log(numOne <= numTwo)

// greater than or equal to
console.log(numOne >= numTwo)

// And Operator &&
// Evaluates as true if BOTH sides are true
console.log(false && true)

// OR operator || (double pipe)
// Evaluates as true is EITHER side is true
console.log(false || false)

// Truthy and Falsy Values

//Falsy Values
// null, 0, undefined, NaN, ''

// Truthy Values
// Everything else!

console.log(numOne && numTwo)

// Branching with an if statement

if (numOne === numTwo) {
    console.log('Num One is equal to Num Two')
} else if (numOne > numTwo) {
    console.log('Num One is Greater than num Two')
} else {
    console.log('Num One is less than num two')
}


// Copied from Aqilah
let color = ' GrEen '

color = color.toLowerCase()
color = color.trim()

if (color === 'green') {
    console.log('Go')
} else if (color === 'yellow') {
    console.log('Slow')
} else if (color === 'red') {
    console.log('Stop')
} else {
    console.log('Whatever')
}
