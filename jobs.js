const country = 'Poland';
const population = '38000000';
const capitalCity = 'Warsaw';



function describeCountry(country, population, capitalCity) {
    const capital = (`${country} has ${population} people and its
capital city is ${capitalCity}`)
    return capital;
}

const myCountry = describeCountry(country, population, capitalCity,);
console.log(myCountry);

const other = describeCountry('Finland', 6000000, 'Helsinki');
console.log(other);

const newYork = describeCountry('New York', 35000000, 'Boston');
console.log(newYork);

function precentageOfWorld1(population) {
    const math = (population / 7900000000) * 100
    const fix = math.toFixed(2) + '%';
    return fix;
}

const procentsOfMyCountry = precentageOfWorld1(population);
console.log('Procenty ludzi w Polsce w porownaniu do calego swiata to: ' + procentsOfMyCountry);

const others = precentageOfWorld1(6000000);
console.log(others);

const newYorkporcent = precentageOfWorld1(35000000);
console.log(newYorkporcent);

const precentageOfWorld2 = function (population) {
    return (population / 7900000000) * 100;
}

const krakow = precentageOfWorld2(8000000);
console.log(krakow.toFixed(2) + '%');

const precentageOfWorld3 = (population) => (population / 7900000000) * 100;

const digs = precentageOfWorld3(30000000)
console.log(digs.toFixed(2) + '%');

// Just to see better

// function precentageOfWorld1(population) {
//     const math = (population / 7900000000) * 100
//     const fix = math.toFixed(2) + '%';
//     return fix;
// }

function describePopulation(country, population) {
    const procentsOfPopulation = precentageOfWorld1(population);
    const describe = `${country} has ${population} people, which is about ${procentsOfPopulation} of the world.`
    return describe;
}

console.log(describePopulation('Poland', 38000000));

const populations = [population, 87000000, 7000000, 5000000]
console.log(populations.length >= 4)

function precentageOfWorld1(population) {
    const math = (population / 7900000000) * 100
    const fix = math.toFixed(2) + '%';
    return fix;
}

const precentes = [precentageOfWorld1(populations[0]), precentageOfWorld1(populations[1]), precentageOfWorld1(populations[2]), precentageOfWorld1(populations[3])];
console.log(precentes);

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
