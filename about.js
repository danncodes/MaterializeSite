let hamburgerMenu = document.querySelector('.nav-mobile');
let navMenu = document.querySelector('.nav-menu');
let closeBtn = document.querySelector('.close-btn');

// Navbar
hamburgerMenu.addEventListener('click', () => {
	navMenu.classList.toggle('hide-nav');
});

closeBtn.addEventListener('click', () => {
	navMenu.classList.toggle('hide-nav');
});
