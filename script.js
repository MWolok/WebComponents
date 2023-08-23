const btn = document.querySelector(".btn");

const btnAnimation = (event) => {
	const top = event.clientY;
	const left = event.clientX;

	const btnTop = e.target.offsetTop;
	const btnLeft = e.target.offsetLeft;

	const insideBtnTop = top - btnTop;
	const insideBtnLeft = left - btnLeft;

	const circle = document.createElement("span");
	circle.classList.add("circle");
	circle.style.top = insideBtnTop + "px";
	circle.style.left = insideBtnLeft + "px";
	event.target.appendChild(circle);
	setTimeout(() => {
		circle.remove();
	}, 300);
};

btn.addEventListener("click", btnAnimation);
