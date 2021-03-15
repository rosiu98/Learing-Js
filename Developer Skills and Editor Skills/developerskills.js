const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr){
	let str = '... '
	for(i = 0; i < arr.length; i++){
		let days = i + 1;
		
		str = str +`${arr[i]}°C in ${days} days... `
	}
	console.log(str);
}
printForecast(data1);
console.log(`
Next Data!
       `);
printForecast(data2);