// DOM Selection Start

const add = document.querySelector('#jog');
const minus = document.querySelector('#biyog');
const divide = document.querySelector('#vag');
const multi = document.querySelector('#gun');
const para = document.querySelector('#para');

// DOM Selection End

// adding Event Listener Start

add.addEventListener('click', function() {
	const addInput_1 = Number( prompt('Enter your First Number') );
	const addInput_2 = Number(prompt('Enter the second Number'));

	const addResult = addInput_1 + addInput_2;

	
	para.innerText = addResult;
})

minus.addEventListener('click', function() {
	const minusInput_1 = Number( prompt('Enter your First Number') );
	const minusInput_2 = Number(prompt('Enter the second Number'));

	const minusResult = minusInput_1 - minusInput_2;

	para.innerText = minusResult;
})


divide.addEventListener('click', function() {
	const divInput_1 = Number( prompt('Enter your First Number') );
	const divInput_2 = Number(prompt('Enter the second Number'));

	const divResult = divInput_1 / divInput_2;

	para.innerText = divResult;
})


multi.addEventListener('click', function() {
	const multiInput_1 = Number( prompt('Enter your First Number') );
	const multiInput_2 = Number(prompt('Enter the second Number'));

	const multiResult = multiInput_1 * multiInput_2;

	para.innerText = multiResult;
})

// Adding Event Listener End