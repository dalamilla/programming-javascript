import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";

const quotes = [
	{
		quote:
			"You can't trust code that you did not totally create yourself. (Especially code from companies that employ people like me.)",
		author: "Ken Thompson",
	},
	{
		quote:
			"UNIX is simple. It just takes a genius to understand its simplicity.",
		author: "Dennis Ritchie",
	},
	{
		quote: "The best way to predict the future is to invent it.",
		author: "Alan Kay",
	},
	{
		quote:
			"Intelligence is the ability to avoid doing work, yet getting the work done.",
		author: "Linus Torvalds",
	},
	{
		quote:
			"I'm not a great programmer; I'm just a good programmer with great habits.",
		author: "Kent Beck",
	},
	{
		quote:
			"The only way to learn a new programming language is by writing programs in it.",
		author: "Dennis Ritchie",
	},
];

const TWITTER_URL =
	"https://twitter.com/intent/tweet?hashtags=quotes&related=cs&text=";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
    <div id="quote-box" class="col-10 col-sm-8 col-md-6 col-lg-4 shadow bg-white rounded p-4">
      <div id="quote-text" class="text-center lead mb-4">
        <i class="fas fa-quote-left me-2"></i>
        <span id="text"></span>
        <i class="fas fa-quote-right ms-2"></i>
      </div>
      <div id="quote-author" class="text-end fw-bold mb-4">
        - <span id="author"></span>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group" role="group" aria-label="Quote Actions">
          <a target="_blank" id="tweet-quote" class="btn btn-info text-white">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="btn btn-info text-white">
            <i class="fas fa-cat"></i>
          </a>
          <a href="#" class="btn btn-info text-white">
            <i class="fas fa-dog"></i>
          </a>
        </div>
        <button id="new-quote" class="btn btn-outline-info">
          <i class="fas fa-sync-alt"></i>
        </button>
      </div>
    </div>
  </div>
`;

const quoteEl = app.querySelector("#text");
const authorEl = app.querySelector("#author");
const tweetBtn = app.querySelector("#tweet-quote");
const newQuoteBtn = app.querySelector("#new-quote");

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

const displayQuote = () => {
	const { quote, author } = getRandomQuote();
	quoteEl.textContent = quote;
	authorEl.textContent = author;

	const tweetText = encodeURIComponent(`"${quote}" — ${author}`);
	tweetBtn.setAttribute("href", `${TWITTER_URL}${tweetText}`);
};

newQuoteBtn.addEventListener("click", displayQuote);

displayQuote();
