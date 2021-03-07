const country = 'Poland';
const population = '38000000';
const capitalCity = 'Warsaw';


const populations = [population, 87000000, 7000000, 5000000]
console.log(populations.length >= 4)

function precentageOfWorld1(population) {
    const math = (population / 7900000000) * 100
    const fix = math.toFixed(2) + '%';
    return fix;
}

const precentes = [precentageOfWorld1(populations[0]), precentageOfWorld1(populations[1]), precentageOfWorld1(populations[2]), precentageOfWorld1(populations[3])];
console.log(precentes);

// const precentes = [precentageOfWorld1(populations[0]), precentageOfWorld1(populations[1]), precentageOfWorld1(populations[2]), precentageOfWorld1(populations[3])];
// console.log(precentes);
tak = [];
for(i = 0; i < populations.length; i++){
        tak.push(precentageOfWorld1(populations[i]));

     // console.log(`${precentageOfWorld1(populations[i])}`);
}
console.log(tak);

