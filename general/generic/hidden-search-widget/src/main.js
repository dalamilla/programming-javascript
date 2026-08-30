import "./assets/styles/main.css";
import "./assets/styles/app.css";

import searchIcon from "./assets/images/search.svg?raw";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="search">
    <input type="text" class="input" placeholder="Search..." />
    <button class="btn" aria-label="Search">
      ${searchIcon}
    </button>
  </div>
`;

const search = app.querySelector(".search");
const btn = app.querySelector(".btn");
const input = app.querySelector(".input");

btn.addEventListener("click", () => {
	search.classList.toggle("active");
	input.focus();
});
