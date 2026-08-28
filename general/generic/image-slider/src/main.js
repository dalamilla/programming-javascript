import "./assets/styles/main.css";
import "./assets/styles/app.css";

import { ChevronLeft, ChevronRight, createIcons } from "lucide";
import cat1 from "./assets/images/cat-1.jpg";
import cat2 from "./assets/images/cat-2.jpg";
import cat3 from "./assets/images/cat-3.jpg";
import cat4 from "./assets/images/cat-4.jpg";
import cat5 from "./assets/images/cat-5.jpg";

const pictures = [cat1, cat2, cat3, cat4, cat5];
let currentIndex = 0;

const app = document.querySelector("#app");

app.innerHTML = `
  <div id="container">
    <div class="arrow">
      <i class="btn left" data-lucide="chevron-left" stroke-width="3"></i>
    </div>
    <div class="img-container"></div>
    <div class="arrow">
      <i class="fas fa-chevron-circle-right btn right" data-lucide="chevron-right" stroke-width="3"></i>
    </div>
  </div>
`;

createIcons({
	icons: {
		ChevronLeft,
		ChevronRight,
	},
});

const imgContainer = app.querySelector(".img-container");
const buttons = app.querySelectorAll(".btn");

const updateImage = () => {
	imgContainer.style.backgroundImage = `url(${pictures[currentIndex]})`;
};

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const direction = button.classList.contains("right") ? 1 : -1;
		currentIndex =
			(currentIndex + direction + pictures.length) % pictures.length;
		updateImage();
	});
});

updateImage();
