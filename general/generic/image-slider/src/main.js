import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';

const img = document.querySelector('.img-container');
const buttons = document.querySelectorAll('.btn');
const pictures = [
  "pexels-anas-jawed-1697100.jpg",
  "pexels-eberhard-grossgasteiger-1367067.jpg",
  "pexels-henda-watani-320014.jpg",
  "pexels-pixabay-208773.jpg",
  "pexels-snapwire-730896.jpg"
];
let count = 0;

img.style.backgroundImage = `url(img/${pictures[count]})`;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains("right")) {
      count++;
      if (count > pictures.length - 1) {
        count = 0;
      }
    }
    if (button.classList.contains("left")) {
      count--;
      if (count < 0) {
        count = pictures.length - 1;
      }
    }
    img.style.backgroundImage = `url(img/${pictures[count]})`;
  })
});
