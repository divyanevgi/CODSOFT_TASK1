document.addEventListener('mousemove', (e) => {
	const cursor = document.querySelector('.cursor');
	const mouseX = e.pageX;
	const mouseY = e.pageY;

	cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}); 