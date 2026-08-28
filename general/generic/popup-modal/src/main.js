import "./assets/styles/main.css";
import "./assets/styles/app.scss";

import { ChevronLeft, ChevronRight, createIcons, Search, X } from "lucide";
import bluePot from "./assets/images/blue-pot.jpg";
import circlePot from "./assets/images/circle-pot.jpg";
import limitedEditionPot from "./assets/images/limited-edition-pot.jpg";
import specialPot from "./assets/images/special-pot.jpg";
import whitePot from "./assets/images/white-pot.jpg";
import yellowPot from "./assets/images/yellow-pot.jpg";

const products = [
	{ name: "Blue Pot", price: 25, img: bluePot },
	{ name: "Circle Pot", price: 20, img: circlePot },
	{ name: "Yellow Pot", price: 30, img: yellowPot },
	{ name: "White Pot", price: 15, img: whitePot },
	{ name: "Special Pot", price: 25, img: specialPot },
	{ name: "Limit Edition Pot", price: 15, img: limitedEditionPot },
];

const renderProducts = (items) =>
	items
		.map(
			(product) => `
    <div class="card">
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <span>$ ${product.price}</span>
    </div>
  `,
		)
		.join("");

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="modal" style="display: none;">
    <div class="modal-window">
      <div class="modal-close">
        <i data-lucide="x" class="close"></i>
      </div>
      <div class="modal-content">
        <div class="arrow">
          <i data-lucide="chevron-left" class="modal-btn left"></i>
        </div>
        <div class="img-container">
          <img src="" alt="Modal Preview">
        </div>
        <div class="arrow">
          <i data-lucide="chevron-right" class="modal-btn right"></i>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div class="search">
      <form class="search-item">
        <input class="search-box" type="text" placeholder="Item.....">
        <button class="search-btn" type="submit"><i data-lucide="search"></i></button>
      </form>
    </div>
    <div class="list">
      ${renderProducts(products)}
    </div>
  </section>
`;

createIcons({
	icons: {
		ChevronLeft,
		ChevronRight,
		X,
		Search,
	},
});

const searchForm = app.querySelector(".search-item");
const modal = app.querySelector(".modal");
const modalBtnClose = app.querySelector(".close");
const modalBtns = app.querySelectorAll(".modal-btn");
const modalImg = app.querySelector(".img-container img");
const cardImgs = app.querySelectorAll(".card img");

const imgArray = products.map((product) => product.img);
let count = 0;

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
});

cardImgs.forEach((cardImg, index) => {
	cardImg.addEventListener("click", () => {
		modal.style.display = "block";
		modalImg.src = cardImg.src;
		count = index;
	});
});

modalBtns.forEach((modalBtn) => {
	modalBtn.addEventListener("click", () => {
		if (modalBtn.classList.contains("right")) {
			count = (count + 1) % imgArray.length;
		} else if (modalBtn.classList.contains("left")) {
			count = (count - 1 + imgArray.length) % imgArray.length;
		}
		modalImg.src = imgArray[count];
	});
});

modalBtnClose.addEventListener("click", (e) => {
	e.preventDefault();
	modal.style.display = "none";
});
