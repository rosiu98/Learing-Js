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