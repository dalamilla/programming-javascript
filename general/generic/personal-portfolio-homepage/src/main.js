import "./assets/styles/main.css";
import "./assets/styles/app.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { Projects } from "./components/Projects.js";
import { initScrollAnimation } from "./utils/scrollAnimation.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${Projects()}
    ${Contact()}
  </main>
  ${Footer()}
`;

initScrollAnimation();
