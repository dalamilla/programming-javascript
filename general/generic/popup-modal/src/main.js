import './style.scss';
import '@fortawesome/fontawesome-free/css/all.css';

const searchButton = document.querySelector('.search-btn');

const cardImgs = document.querySelectorAll('.card img');

const modal = document.querySelector('.modal');
const modalBtnClose = document.querySelector('.close');
const modalBtns = document.querySelectorAll('.modal-btn');
const modalImg = document.querySelector('.img-container img');

let count = 0;
let imgArray = [];

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
});

cardImgs.forEach((cardImg) => {
  imgArray.push(cardImg.src);

  cardImg.addEventListener('click', (e) => {
    modal.style.display = "block";
    modalImg.src = e.target.src;
    count = imgArray.indexOf(e.target.src);
  });
});

modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener('click', (e) => {
    if (modalBtn.classList.contains("right")) {
      count++;
      if (count > imgArray.length - 1) {
        count = 0;
      }
    }
    if (modalBtn.classList.contains("left")) {
      count--;
      if (count < 0) {
        count = imgArray.length - 1;
      }
    }
    modalImg.src = imgArray[count];
  })
});

modalBtnClose.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = "none";
});
