let quoteBtn = document.querySelector('.quote-btn');
let hamburgerMenu = document.querySelector('.nav-mobile');
let navMenu = document.querySelector('.nav-menu');
let closeBtn = document.querySelector('.close-btn');

// Back Up Quotes for Catch Incase Fecth API Fails
let backUpQuotes = [
	'Failure is like free tuition.',
	'It’s not bragging if you can back it up.',
	'A man who views the world the same at 50 as he did at 20 has wasted 30 years of his life.',
	'He who is not courageous enough to take risks will accomplish nothing in life.',
	'Others can stop you temporarily – you are the only one who can do it permanently.',
	'Be a first rate version of yourself, not a second rate version of someone else.',
	'The man who removes a mountain begins by carrying away small stones.',
	'Defeat is not bitter unless you swallow it.',
	'If you want to test your memory, try to recall what you were worrying about one year ago today',
	'Opportunity is missed by most people because it is dressed in overalls and looks like work.'
];

// Navbar
hamburgerMenu.addEventListener('click', () => {
	navMenu.classList.toggle('hide-nav');
});

closeBtn.addEventListener('click', () => {
	navMenu.classList.toggle('hide-nav');
});
// Generate Random Quotes

generateQuote();

setInterval(generateQuote, 10000);

function generateQuote() {
	fetch('https://type.fit/api/quotes')
		.then(response => {
			return response.json();
		})
		.then(data => {
			let quoteText = document.querySelector('.quote-text');
			let random = Math.floor(Math.random() * Math.floor(data.length));
			quoteText.innerHTML = `<span class="flow-text quote-text">
                                    "${data[random].text} - ${data[random].author}"
                                    </span>`;

			if (data[random].author === null) {
				quoteText.innerHTML = `<span class="flow-text quote-text">
                                    "${data[random].text} - Author Unknown"
                                    </span>`;
			}
		})
		.catch(err => {
			let quoteText = document.querySelector('.quote-text');
			let random = Math.floor(Math.random() * Math.floor(backUpQuotes.length));
			quoteText.innerHTML = `<span class="flow-text quote-text">
                                    "${backUpQuotes[random]}"
                                    </span>`;
		});
}

quoteBtn.addEventListener('click', generateQuote);
