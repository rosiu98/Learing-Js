'use strict'

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    Person.call(this, firstName, birthYear)
    this.course = course;
}

// Linking prototype
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName}and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Science')
mike.introduce();

mike.calcAge();

Student.prototype.constructor = Student;

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed

}

Car.prototype.breake = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`)
}

const EV = function (make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20
    this.charge--
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`)
}



const tesla = new EV('Tesla', 120, 23)


EV.prototype.constructor = EV;

console.log(tesla)
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.breake();
tesla.breake();
tesla.chargeBattery(90)
tesla.accelerate();
tesla.accelerate();
