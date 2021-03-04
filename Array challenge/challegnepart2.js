
const bill = 100;

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

console.log(calcTip(bill));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips)

function billsTips(num) {

    const every = bills[num] + tips[num];
    return every;
}
const total = [billsTips(0), billsTips(1), billsTips(2)];          //bills[0] + tips[0];
console.log(total);
