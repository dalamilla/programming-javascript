import "./assets/styles/main.css";
import "./assets/styles/app.css";

import { ChevronLeft, ChevronRight, createIcons, Star } from "lucide";
import t1 from "./assets/images/1.svg";
import t2 from "./assets/images/2.svg";
import t3 from "./assets/images/3.svg";
import t4 from "./assets/images/4.svg";
import t5 from "./assets/images/5.svg";
import theFunkyTaco from "./assets/images/the-funky-taco.jpg";

const app = document.querySelector("#app");
app.style.backgroundImage = `url(${theFunkyTaco})`;

app.innerHTML = `
  <section>
    <div class="section-title">
      <h1>Client Testimonial</h1>
    </div>
    <div class="section-testimonial">
      <button class="section-arrow left" aria-label="Previous testimonial">
        <i data-lucide="chevron-left" stroke-width="3" class="btn"></i>
      </button>
      <div class="testimonial">
        <img id="testimonial-img" alt="Testimonial author">
        <h2 id="testimonial-name"></h2>
        <div id="testimonial-rating"></div>
        <p id="testimonial-comment"></p>
      </div>
      <button class="section-arrow right" aria-label="Next testimonial">
        <i data-lucide="chevron-right" stroke-width="3" class="btn"></i>
      </button>
    </div>
  </section>
`;

createIcons({
	icons: {
		ChevronLeft,
		ChevronRight,
	},
});

const elements = {
	image: app.querySelector("#testimonial-img"),
	name: app.querySelector("#testimonial-name"),
	rating: app.querySelector("#testimonial-rating"),
	comment: app.querySelector("#testimonial-comment"),
	arrows: app.querySelectorAll(".section-arrow"),
};

const testimonials = [
	{ image: t1, name: "Dan", rating: 5, comment: "The best tacos in the area." },
	{
		image: t2,
		name: "Gin",
		rating: 4,
		comment: "Good tacos but doesn't have desserts.",
	},
	{ image: t3, name: "Emily", rating: 2, comment: "Doesn't have vegan tacos." },
	{
		image: t4,
		name: "Gerry",
		rating: 4,
		comment: "Good taste but doesn't have beer.",
	},
	{
		image: t5,
		name: "David",
		rating: 5,
		comment: "I love these tacos, try the birria ones.",
	},
];

let currentIndex = 0;

const renderTestimonial = (index) => {
	const { image, name, rating, comment } = testimonials[index];

	elements.image.src = image;
	elements.name.textContent = name;
	elements.rating.innerHTML =
		`<i data-lucide="star" stroke-width="3"></i>`.repeat(rating);
	elements.comment.textContent = comment;

	createIcons({ icons: { Star } });
};

elements.arrows.forEach((arrow) => {
	arrow.addEventListener("click", () => {
		const direction = arrow.classList.contains("right") ? 1 : -1;
		currentIndex =
			(currentIndex + direction + testimonials.length) % testimonials.length;
		renderTestimonial(currentIndex);
	});
});

renderTestimonial(currentIndex);
