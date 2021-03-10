'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 'LOL';

// document.querySelector('.score').textContent = '299999';

// document.querySelector('.guess').value =  23;

// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random()* 20) + 1;
// document.querySelector('.number').textContent = number;
let score = Number(document.querySelector('.score').textContent);
console.log(score);
let highscore = 0;

const displayMessage = function(message){
	document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', function(){
	const guess = Number(document.querySelector('.guess').value);

	console.log(guess, typeof guess);

	if(!guess) {
		displayMessage('Type Something in the Field!');
		// document.querySelector('.message').textContent = 'Type Something in the Field!';
	} else if(guess === number) {
		// document.querySelector('.message').textContent = 'Correct Number!';
		displayMessage('Correct Number!');
		document.querySelector('body').style.backgroundColor = '#60b347';

		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.number').textContent = number;

		if(score > highscore){
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

	}else if(guess !== number){
		if(score > 1){
		score = score -1;
		document.querySelector('.score').textContent = score;
		displayMessage(guess < number ? 'To Low!' : 'To High!')
		// document.querySelector('.message').textContent = guess < number ? 'To Low!' : 'To High!';
	}else{
		displayMessage('You lost!');
		// document.querySelector('.message').textContent = "You lost!";
		document.querySelector('.score').textContent = 0;
}



	// }else if(guess < number){
	// 	if(score > 1){
	// 	score = score -1;
	// 	document.querySelector('.score').textContent = score;
	// 	document.querySelector('.message').textContent = 'To Low!';
	// }else{
	// 	document.querySelector('.message').textContent = "You lost!";
	// 	document.querySelector('.score').textContent = 0;

	// }	
	// } else if(guess > number){
	// 	if(score > 1){
	// 	score = score -1;
	// 	document.querySelector('.score').textContent = score;
	// 	document.querySelector('.message').textContent = 'To High!';
	// }else{
	// 	document.querySelector('.message').textContent = "You lost!";
	// 	document.querySelector('.score').textContent = 0;
	// }
	// }


}
});

document.querySelector('.again').addEventListener('click', function(){
	score = Number(document.querySelector('.score').textContent = 20);
	number = Math.trunc(Math.random()* 20) + 1;
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.guess').value = '';
	displayMessage('Start guessing...');
	// document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.number').textContent = '?'
});