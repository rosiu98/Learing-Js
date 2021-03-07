const billss =[22,295,176,440,37,150,10,110,86,52];
console.log(`Bills Value:
${billss}`);
let tipss = [];
let totals = [];


const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}
for (let i = 0; i < billss.length; i++){
	tipss.push(calcTip(billss[i]));
	totals.push(tipss[i] + billss[i])
}


console.log(`Tips Value: ${tipss}`);
console.log(`Total Value: ${totals}`);

let sum = 0;
for(let i = 0; i < totals.length; i++){
	sum = (totals[i] + sum)
}
console.log(`Suma ${sum}`);

function arr(avrage) {
	avrage /= totals.length;
	return 'Avrage of Total Value: ' + avrage.toFixed(0);
}
console.log(arr(sum));
