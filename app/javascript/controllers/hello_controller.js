document.addEventListener('DOMContentLoaded'), function() {
	const laptop = document.querySelector('_center-piece');
	laptop.addEventListener('mousemove', (e) => {
		const { offsetX, offsetY, target } = e;
		const {clientWidth, clientHeight } = target;

		const rotateX = ((offsetY - clientHeight / 2) / clientHeight) * 30;
		const rotateY = ((offsetX - clientWidth / 2) / clientWidth) * -30;

    laptop.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});
