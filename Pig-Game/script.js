'use strict'
let score = document.querySelector('#score--0').textContent = 0;

let currentScore = document.querySelector('#current--0');

let holdScore = document.querySelector('.btn--hold');
const roll = document.querySelector('.btn--roll');
let number = 0;
// let random = Math.trunc(Math.random()* 6) + 1;
roll.addEventListener('click', function(){
	let random = Math.trunc(Math.random()* 6) + 1;
	console.log(random); 
	currentScore.textContent = number + random;

	document.querySelector('img').src = `dice-${random}.png`;
// }
	if(random > 1){
		return number += random
	}else if(random = 1){
		
	 currentScore.textContent = 0;
	 number = 0;
	
}
});

holdScore.addEventListener('click', function(){
	document.querySelector('#score--0').textContent = Number(currentScore.textContent) + Number(document.querySelector('#score--0').textContent);
	currentScore.textContent = 0;
	console.log(document.querySelector('#score--0').textContent)
	if(document.querySelector('#score--0').textContent <= '100'){
		console.log(`You win the Game!`)
	}
	
})




