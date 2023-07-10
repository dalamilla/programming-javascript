import './style.scss'

const search = document.querySelector('.search-box');
const listItems = document.querySelector('.list');
const button = document.querySelector('.search-btn');

const items = [
  {
    image: "img/1.svg",
    title: "Cabinet",
    price: 300
  },
  {
    image: "img/2.svg",
    title: "Chair Eames",
    price: 30
  },
  {
    image: "img/3.svg",
    title: "Chair",
    price: 50
  },
  {
    image: "img/4.svg",
    title: "Individual Bed",
    price: 170
  },
  {
    image: "img/5.svg",
    title: "Desk",
    price: 150
  },
  {
    image: "img/6.svg",
    title: "Double Bed",
    price: 200
  },
  {
    image: "img/7.svg",
    title: "Dresser",
    price: 250
  },
  {
    image: "img/8.svg",
    title: "Modern Lamp",
    price: 40
  },
  {
    image: "img/9.svg",
    title: "Traditional Lamp",
    price: 50
  },
  {
    image: "img/10.svg",
    title: "Sofa",
    price: 220
  },
  {
    image: "img/11.svg",
    title: "Shelve",
    price: 80
  },
  {
    image: "img/12.svg",
    title: "Table",
    price: 110
  },
];


function display(items) {
  listItems.innerHTML = '';

  items.forEach((item) => {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');
    let span = document.createElement('span');

    div.className = 'item';
    img.src = item.image;
    h3.innerText = item.title;
    span.innerText = "$ " + item.price;

    div.append(img);
    div.append(h3);
    div.append(span);
    listItems.append(div);
  });
}


search.addEventListener('keyup', (e) => {
  let filter = e.target.value.toLowerCase();
  const result = items.filter(item => {
    return item.title.toLowerCase().includes(filter);
  })
  if (result.length > 0) {
    display(result);
  } else {
    listItems.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.innerText = 'Not Elements Found';
    listItems.append(h3);
  }

});

button.addEventListener('click', (e) => {
  e.preventDefault();
});

display(items);