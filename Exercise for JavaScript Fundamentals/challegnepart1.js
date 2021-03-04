const scoreDelphins = 85 + 54 + 41;     // 44 + 23 + 71;
const scoreKoalas = 23 + 34 + 27;      //65 + 54 + 49;

const calcAverage = paramethr => paramethr / 3;
//     const avgScoreOfDelphins = scoreDelphins / 3;
//     const avgScoreOfKoalas = scoreKoalas / 3;


function checkWinner(avgDolhins, avgKoalas) {
    avgDolhins = calcAverage(scoreDelphins);
    avgKoalas = calcAverage(scoreKoalas);
    if (avgDolhins > avgKoalas && avgDolhins >= avgKoalas * 2) {
        return `Dolphins wins! (${avgDolhins} vs. ${avgKoalas})`
    } else if (avgKoalas > avgDolhins && avgKoalas >= avgDolhins * 2) {
        return `Koala wins! (${avgKoalas} vs. ${avgDolhins})`
    } else {
        return `Anyone wins :(`
    }
}

console.log(checkWinner(scoreDelphins, scoreKoalas));