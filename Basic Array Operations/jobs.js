

const neighbours = ['Slowacja', 'Ukraina', 'Niemcy', 'Wegry'];
neighbours.push('Utopia');
console.log(neighbours)
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Niemcy')) {
    console.log(`Probably not a central European country :D`);
} else {
    console.log(`That nice to have Germany as a neighbour`)
}

console.log(neighbours.indexOf('Ukraina'))

neighbours[1] = 'Republic of Ukraina';
console.log(neighbours);
