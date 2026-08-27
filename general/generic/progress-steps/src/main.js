import "./assets/styles/main.css";
import "./assets/styles/app.css";

const app = document.querySelector("#app");
app.innerHTML = `
  <div class="container">
    <div class="progress">
      <div class="progress__bar-static"></div>
      <div class="progress__bar"></div>
      <div class="progress__circle">1</div>
      <div class="progress__circle">2</div>
      <div class="progress__circle">3</div>
      <div class="progress__circle">4</div>
    </div>

    <button class="btn btn--prev">Prev</button>
    <button class="btn btn--next">Next</button>
    </div>`;

const progress = app.querySelector(".progress__bar");
const prev = app.querySelector(".btn--prev");
const next = app.querySelector(".btn--next");
const circles = app.querySelectorAll(".progress__circle");

let currentActive = 1;

const setStep = (step) => {
	currentActive = Math.max(1, Math.min(step, circles.length));

	circles.forEach((circle, idx) => {
		circle.classList.toggle("progress__circle--active", idx < currentActive);
	});

	const percentage = ((currentActive - 1) / (circles.length - 1)) * 100;
	progress.style.width = `${percentage}%`;

	prev.classList.toggle("btn--disabled", currentActive === 1);
	next.classList.toggle("btn--disabled", currentActive === circles.length);
};

next.addEventListener("click", () => setStep(currentActive + 1));
prev.addEventListener("click", () => setStep(currentActive - 1));
setStep(currentActive);
