// // console.log('Welcome to iterarors')
// // const instructors = ['Taif', 'Abdullah', 'Wael']
// // console.log(instructors)
// // //find index certian element 
// // function findIndex(element){
// //     for (let i=0; i < 

//  const students = ['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David']

// const awesomeStudents = students.map(student => {
//   return student + " is awesome"
// });

// console.log(awesomeStudents)

const nums = [100, 2, 5, 42, 99];

const oddNums = nums.filter(num => num % 2 !== 0);

console.log(oddNums);

const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
]

const whiteCar = cars.find(car => {
    return car.color === 'white'
})
console.log(whiteCar)


const thingsInMyRoom = ['bed', 'lamp', 'table', 'random elephant', 'three tacos'];

const isARandomElephantInMyRoom = 
thingsInMyRoom.some(thing => thing === 'random elephant');
const isEverythingInMyRoomARandomElephant = 
 thingsInMyRoom.every(thing => thing === 'random elephant');
console.log(isARandomElephantInMyRoom);
console.log(isEverythingInMyRoomARandomElephant);