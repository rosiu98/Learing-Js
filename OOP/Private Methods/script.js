// 'use strict'

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

// Person.hey = function () {
//     console.log(this)
//     console.log('Hey there')
// }

// Person.hey();
// ////////////////////////////////////////
// // // Prototypes
// // console.log(Person.prototype)

// // Person.prototype.calcAge = function () {
// //     console.log(2037 - this.birthYear)
// // }

// // jonas.calcAge();
// // matilda.calcAge();

// // console.log(jonas.__proto__)
// // console.log(jonas.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(jonas));

// // Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas.species, matilda.species)

// // console.log(jonas.hasOwnProperty('firstName'))
// // console.log(jonas.hasOwnProperty('species'))

// // console.log(jonas.__proto__)
// // console.log(jonas.__proto__.__proto__)
// // console.log(jonas.__proto__.__proto__.__proto__)

// // console.log(Person.prototype.constructor)
// // console.dir(Person.prototype.constructor)

// // const arr = [3, 6, 4, 5, 6, 7, 0, 8] // new Array === {}
// // console.log(arr.__proto__)
// // console.log(arr.__proto__ === Array.prototype)

// // console.log(arr.__proto__.__proto__)

// // Array.prototype.unique = function () {
// //     return [...new Set(this)]
// // }

// // console.log(arr.unique())

// // const h1 = document.querySelector('h1');
// // console.log(x => x + 1)

// //class expression
// // const PersonCl = class {

// // }

// // clas declaration
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // Instance methods
//     // Mathods will be added to .prototype property
//     calcAge() {
//         console.log(2037 - this.birthYear)
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`)
//     }

//     get age() {
//         return 2037 - this.birthYear
//     }

//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name
//         else alert(`${name} is not a full name!`)
//     }

//     get fullName() {
//         return this._fullName
//     }

//     // Static method
//     static hey() {
//         console.log('Hey there')
//         console.log(this)
//     }
// }

// const jessica = new PersonCl('Jessica Davis', 1996)
// console.log(jessica)
// jessica.calcAge();
// console.log(jessica.age)

// // PersonCl.prototype.greet = function () {
// //     console.log(`Hey ${this.firstName}`)
// // }
// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizes
// // 3. Class are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey()

// // Stters and Getters
// // const account = {
// //     owner: 'jonas',
// //     movements: [200, 530, 120, 300],

// //     get latest() {
// //         return this.movements.slice(-1).pop();
// //     },

// //     set latest(mov) {
// //         this.movements.push(mov)
// //     }
// // }

// // console.log(account.latest)

// // account.latest = 50;
// // console.log(account.movements)

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear)
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(PersonProto)

// const StudentProto = Object.create(PersonProto)

// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear)
//     this.course = course
// }

// StudentProto.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const jay = Object.create(StudentProto)
// jay.init('Jay', 2010, 'Computer Science')
// jay.introduce();
// jay.calcAge();

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)


class Account {
    // 1) Public fields (instances)
    locale = navigator.language;


    // 2) Private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner
        this.currency = currency
        this.#pin = pin
        // Protected property
        this._movements = []
        // this.locale = navigator.language

        console.log(`Thanks for opening an account, ${owner}`)
    }

    // 3) Public methods

    // Public interface
    getMovements() {
        return this.#movements
    }

    deposit(val) {
        this.#movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val)
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved')
        }
    }

    static helper() {
        console.log('Helper');
    }

    // 4) Private methods
    _approveLoan(val) {
        return true
    }
}
const acc1 = new Account('Jonas', 'EUR', 1111)
console.log(acc1)

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1)

// console.log(acc1.#movements);
// console.log(acc1.#pin)
// console.log(acc1.#approveLoan(100))
Account.helper();
