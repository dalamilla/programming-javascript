import "./assets/styles/main.css";
import "./assets/styles/app.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div id="container">
    <h1>Message</h1>
    <form id="form-message">
      <input id="message-input" type="text" placeholder="Write a Message" autocomplete="off">
      <button type="submit">Submit</button>
    </form>
    <h2>This is the message:</h2>
    <p id="message-output"></p>
  </div>
`;

const form = document.querySelector("#form-message");
const messageInput = document.querySelector("#message-input");
const messageOutput = document.querySelector("#message-output");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const text = messageInput.value.trim();

	if (!text) {
		messageOutput.textContent = "Empty Message!!";
		return;
	}

	messageOutput.textContent = text;
	messageInput.value = "";
});
