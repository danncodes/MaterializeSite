let closeModalBtn = document.querySelector('.close-modal');
let modalPop = document.querySelector('.display-value');

closeModalBtn.addEventListener('click', e => {
	e.target.parentElement.parentElement.classList.add('close');
});

setTimeout(() => {
	if (localStorage.getItem('displayVal')) {
		return;
	} else {
		modalPop.classList.remove('display-value');
		localStorage.setItem('displayVal', true);
	}
}, 5000);
