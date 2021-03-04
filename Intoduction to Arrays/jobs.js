

const populations = [population, 87000000, 7000000, 5000000]
console.log(populations.length >= 4)

function precentageOfWorld1(population) {
    const math = (population / 7900000000) * 100
    const fix = math.toFixed(2) + '%';
    return fix;
}

const precentes = [precentageOfWorld1(populations[0]), precentageOfWorld1(populations[1]), precentageOfWorld1(populations[2]), precentageOfWorld1(populations[3])];
console.log(precentes);