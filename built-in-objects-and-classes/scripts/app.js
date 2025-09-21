!console.log('Built in Objects and Classes')
// const randomNumber = Math.random()
// console.log(randomNumber)

class Car {
  constructor(makeParam, modelParam, colorParam = 'white') {
    this.make = makeParam
    this.model = modelParam
    this.color = colorParam
    this.engineIsRunning = false
  }

  start() {
    this.engineIsRunning = true
    console.log('Brrrrrrrrm The engine is now running')
  }

  stop() {
    this.engineIsRunning = false
    console.log('Stopped!')
  }
}

const myCar = new Car('Toyota', 'Corolla', 'White')
console.log(myCar)

const yourCar = new Car('Ford', 'Explorer', 'Black')
console.log(yourCar)

myCar.start()
console.log(myCar)

myCar.stop()  
console.log(myCar)

console.log(yourCar)
// Example of a static method vs an instance method
const exampleObject = {sayHi(){console.log('hi')}}
exampleObject.sayHi()
console.log(Object.keys(exampleObject))

class ElectricCar extends Car {
    constructor(make, model, color, batteryLevel){
        // super = new Car(make, model, color)
        super(make, model, color)
        this.batteryLevel = batteryLevel
        delete this.engineIsRunning
    }
}

const gretasCar = new ElectricCar('Tesla', 'S', 'Black', 100)
console.log(gretasCar)
