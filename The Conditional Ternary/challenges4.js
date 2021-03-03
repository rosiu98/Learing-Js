let bill = 275;
let bill1 = 40;
let bill2 = 430;

let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
let totalValue = bill + tip;
let rachunek = `The bill was ${bill},the tip was ${tip}, and the total value ${totalValue}`;
console.log(rachunek);

