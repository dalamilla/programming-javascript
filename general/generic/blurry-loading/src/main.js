import "./assets/styles/main.css";
import "./assets/styles/app.css";

import welder from "./assets/images/welder.jpg";

const app = document.querySelector("#app");

app.innerHTML = `
  <section class="bg"></section>
  <div class="loading-text">0%</div>
`;

const bg = app.querySelector(".bg");
const loadText = app.querySelector(".loading-text");

let load = 0;
let start = null;
const duration = 3000;

bg.style.backgroundImage = `url("${welder}")`;

const deblurring = (timestamp) => {
	if (!start) start = timestamp;
	const progress = Math.min((timestamp - start) / duration, 1);

	load = Math.floor(progress * 100);

	loadText.textContent = `${load}%`;
	loadText.style.opacity = 1 - load / 100;
	bg.style.filter = `blur(${30 - load * 0.3}px)`;

	if (progress < 1) {
		requestAnimationFrame(deblurring);
	}
};

requestAnimationFrame(deblurring);
