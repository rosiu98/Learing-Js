const scoreDolphins = 97 + 112 + 101;
const scoreKoalas = 109 + 95 + 106;
const avgScoreOfDolphins = scoreDolphins / 3;
const avgScoreOfKoalas = scoreKoalas / 3;
const draw = avgScoreOfDolphins === avgScoreOfKoalas;
console.log(avgScoreOfDolphins, avgScoreOfKoalas);

if(avgScoreOfDolphins > avgScoreOfKoalas && avgScoreOfDolphins >= 100){
	console.log('Doplhins win!!!')
}else if (draw && draw >= 100){
	console.log("It's immposible , it's a DRAW!!!")
}else if(avgScoreOfKoalas > avgScoreOfDolphins && avgScoreOfKoalas >= 100){
	console.log('Koalas win!!!')
}
else{
	console.log('Anyone wins :(')
}
