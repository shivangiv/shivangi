window.addEventListener("resize", ()=> {
	resizeCards();
});

window.addEventListener("load", ()=> {
	resizeCards();
});

function resizeCards() {
	let cards = document.querySelectorAll(".card");
	for (c of cards) {
		c.style.maxWidth  = null;
		c.style.maxHeight = null;		
	}
	let newSize = cards[0].offsetWidth;
	for (c of cards) {
		c.style.maxWidth  = `${newSize}px`;
		c.style.maxHeight = `${newSize}px`;
	}
}