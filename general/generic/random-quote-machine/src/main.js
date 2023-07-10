import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const button = document.querySelector('#new-quote');
const tweet = document.querySelector('#tweet-quote');
const qoute = document.querySelector('#text');
const author = document.querySelector('#author');
const quotes = [
  {
    quote:
      "You can't trust code that you did not totally create yourself. (Especially code from companies that employ people like me.)",
    author: "Ken Thompson"
  },
  {
    quote:
      "UNIX is simple.  It just takes a genius to understand its simplicity.",
    author: "Dennis Ritchie"
  },
  {
    quote:
      "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "Intelligence is the ability to avoid doing work, yet getting the work done.",
    author: "Linus Torvalds"
  },
  {
    quote:
      "I'm not a great programmer; I'm just a good programmer with great habits.",
    author: "Kent Beck"
  },
  {
    quote:
      "The only way to learn a new programming language is by writing programs in it.",
    author: "Dennis Ritchie"
  }
];
const urlTwitter = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="

function newQoute() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  qoute.textContent = quotes[randomNumber].quote;
  author.textContent = quotes[randomNumber].author;
  tweet.setAttribute("href",
    encodeURI(urlTwitter + '"' + quotes[randomNumber].quote + '" ' + quotes[randomNumber].author))
}

button.addEventListener('click', () => {
  newQoute();
});

newQoute();
