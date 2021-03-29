'use strict'

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;


    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear)
    // }
}

const jonas = new Person('Jonas', 1991)
console.log(jonas)

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically retrun {}

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(matilda, jack)


console.log(jonas instanceof Person)

// Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__)
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species)

console.log(jonas.hasOwnProperty('firstName'))
console.log(jonas.hasOwnProperty('species'))

console.log(jonas.__proto__)
console.log(jonas.__proto__.__proto__)
console.log(jonas.__proto__.__proto__.__proto__)

console.log(Person.prototype.constructor)
console.dir(Person.prototype.constructor)

const arr = [3, 6, 4, 5, 6, 7, 0, 8] // new Array === {}
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)

console.log(arr.__proto__.__proto__)

Array.prototype.unique = function () {
    return [...new Set(this)]
}

console.log(arr.unique())

const h1 = document.querySelector('h1');
console.log(x => x + 1)

const Car = function (make, speed) {
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(this.speed)
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed - 5)
}

const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedes', 95)



car1.accelerate()
car1.accelerate()
car2.accelerate()
car1.brake()
