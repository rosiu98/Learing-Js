'use strict';

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oragnes.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// function ageCalc(birthYear) {
//     const actuallyYear = 2021;
//     const age = actuallyYear - birthYear;
//     return age;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = ageCalc(birthYear);
//     const retirement = 65 - age;

//     if (retirement <= 0) {
//         return (`${firstName} already retirment!`);
//     } else {

//         return `${firstName} retires in ${retirement} years`;
//     }
// }
// console.log(yearsUntilRetirement(1998, 'Pawel'));
// console.log(yearsUntilRetirement(1950, 'Mike'));


// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];


// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // removing last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven')
}
