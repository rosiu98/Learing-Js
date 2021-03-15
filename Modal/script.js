'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}


const closeModal = function(){
		modal.classList.add('hidden');
		overlay.classList.add('hidden');
	}

for(let i = 0; i < btnsOpenModal.length; i++){
	 btnsOpenModal[i].addEventListener('click', function(){ //openModal
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	})
}

	btnCloseModal.addEventListener('click', closeModal);

	overlay.addEventListener('click', function(){ // closeModal
		modal.classList.add('hidden');
		overlay.classList.add('hidden');
	})

document.addEventListener('keydown', function(event){
	// console.log(event.key) Pokazuje ,ktory klawisz naciskamy
	if(event.key === 'Escape' && !modal.classList.contains('hidden')){
		
			closeModal();
	}
})



