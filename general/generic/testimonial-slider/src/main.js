import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';

const buttons = document.querySelectorAll('.btn');
const tImage = document.querySelector('#timg');
const tname = document.querySelector('#tname');
const tStar = document.querySelector('#tstar');
const tComment = document.querySelector('#tcomment');

let count = 0;
const star = `<i class="fas fa-star"></i>`;
const testimonial = [
  {
    image: "img/1.svg",
    name: "Dan",
    star: 5,
    comment: "The best tacos in the area."
  },
  {
    image: "img/2.svg",
    name: "Gin",
    star: 4,
    comment: "Good tacos but doesn't have desserts."
  },
  {
    image: "img/3.svg",
    name: "Emily",
    star: 2,
    comment: "Doesn't have vegan tacos."
  },
  {
    image: "img/4.svg",
    name: "Gerry",
    star: 4,
    comment: "Goob taste but doesn't have beer."
  },
  {
    image: "img/5.svg",
    name: "David",
    star: 5,
    comment: "I love this tacos, try the birria ones."
  }
];

tImage.src = testimonial[count].image;
tname.innerHTML = testimonial[count].name;
tStar.innerHTML = star.repeat(testimonial[count].star);
tComment.innerHTML = testimonial[count].comment;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains("right")) {
      count++;
      if (count > testimonial.length - 1) {
        count = 0;
      }
    }
    if (button.classList.contains("left")) {
      count--;
      if (count < 0) {
        count = testimonial.length - 1;
      }
    }
    tImage.src = testimonial[count].image;
    tname.innerHTML = testimonial[count].name;
    tStar.innerHTML = star.repeat(testimonial[count].star);
    tComment.innerHTML = testimonial[count].comment;
  })
});
