'use strict'

// const Person = function (firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;


//     // this.calcAge = function(){
//     //     console.log(2037 - this.birthYear)
//     // }
// }

// const jonas = new Person('Jonas', 1991)
// console.log(jonas)

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. Function automatically retrun {}

// const matilda = new Person('Matilda', 2017)
// const jack = new Person('Jack', 1975)
// console.log(matilda, jack)


// console.log(jonas instanceof Person)

// // Prototypes
// console.log(Person.prototype)

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear)
// }

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__)
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species)

// console.log(jonas.hasOwnProperty('firstName'))
// console.log(jonas.hasOwnProperty('species'))

// console.log(jonas.__proto__)
// console.log(jonas.__proto__.__proto__)
// console.log(jonas.__proto__.__proto__.__proto__)

// console.log(Person.prototype.constructor)
// console.dir(Person.prototype.constructor)

// const arr = [3, 6, 4, 5, 6, 7, 0, 8] // new Array === {}
// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype)

// console.log(arr.__proto__.__proto__)

// Array.prototype.unique = function () {
//     return [...new Set(this)]
// }

// console.log(arr.unique())

// const h1 = document.querySelector('h1');
// console.log(x => x + 1)

//class expression
// const PersonCl = class {

// }

// clas declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Mathods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.fullName}`)
    }

    get age() {
        return 2037 - this.birthYear
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name
        else alert(`${name} is not a full name!`)
    }

    get fullName() {
        return this._fullName
    }
}

const jessica = new PersonCl('Jessica Davis', 1996)
console.log(jessica)
jessica.calcAge();
console.log(jessica.age)

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`)
// }
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Class are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov)
    }
}

console.log(account.latest)

account.latest = 50;
console.log(account.movements)