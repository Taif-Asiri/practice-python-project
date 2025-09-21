console.log('Welcome to loops')

// Great for when we know how many times to run the loop
for (let i = 0; i <= 10; i++){
    console.log(i)
}

// Great for when we don't know how many times to run the loop
let number = 0

while (number <= 10){
    console.log(number)
    number++
}

// let runLoop = true

// while (runLoop){
//     const userInput = parseInt(prompt('enter a number'))
//     if (userInput === 10){
//         runLoop = false
//     }
// }
// alert('You Found the hidden number!')


// Will run always once
// let num = 100

// do {
//     console.log('I am running in the do while')
// } while (num === 50)

    // Ternary Statement

const num = 100;

if (num > 5) {
  console.log('num is larger than 5')
} else {
  console.log('num is 5 or less')
}

num > 5 ? console.log('num is larger than 5') : console.log('num is 5 or less')

const position = num > 5 ? 'Greater' : 'Less Than'
console.log(position)

// Don't do this, use an if else instead
num > 5 ? 'greater than 5' : num < 70 ? 'less than 70' : 'None applies'