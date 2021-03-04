



 function precentageOfWorld1(population) {
     const math = (population / 7900000000) * 100
     const fix = math.toFixed(2) + '%';
     return fix;
 }

function describePopulation(country, population) {
    const procentsOfPopulation = precentageOfWorld1(population);
    const describe = `${country} has ${population} people, which is about ${procentsOfPopulation} of the world.`
    return describe;
}

console.log(describePopulation('Poland', 38000000));