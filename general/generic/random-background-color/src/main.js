import "./assets/styles/main.css";
import "./assets/styles/app.css";

const bgPrimary = getComputedStyle(document.documentElement)
	.getPropertyValue("--bg-primary")
	.trim()
	.toUpperCase();

const app = document.querySelector("#app");

app.innerHTML = `
  <div>
    <h1>HEX Color is: <strong>${bgPrimary}</strong></h1>
    <button type="button">Change Color</button>
  </div>
`;

const button = app.querySelector("button");
const strong = app.querySelector("strong");

const getRandomHexColor = () =>
	`#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")
		.toUpperCase()}`;

button.addEventListener("click", () => {
	const randomColor = getRandomHexColor();
	app.style.backgroundColor = randomColor;
	strong.textContent = randomColor;
});
