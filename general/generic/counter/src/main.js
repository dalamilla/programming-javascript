import "./assets/styles/main.css";
import "./assets/styles/app.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div id="container">
    <h1>Counter</h1>
    <p></p>
    <div id="form">
      <input class="btncounter reduce" type="button" value="Reduce Count">
      <input class="btncounter add" type="button" value="Add Count">
    </div>
  </div>
`;

let count = 0;

const numberEl = app.querySelector("p");
const reduceBtn = app.querySelector(".btncounter.reduce");
const addBtn = app.querySelector(".btncounter.add");

const render = () => {
	numberEl.textContent = count;
	numberEl.classList.remove("positive", "negative");

	if (count > 0) {
		numberEl.classList.add("positive");
	} else if (count < 0) {
		numberEl.classList.add("negative");
	}
};

reduceBtn.addEventListener("click", () => {
	count--;
	render();
});

addBtn.addEventListener("click", () => {
	count++;
	render();
});

render();
