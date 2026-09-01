import "./assets/styles/main.css";
import "./assets/styles/app.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { Catalog } from "./components/Catalog.js";
import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Services } from "./components/Services.js";
import { Tutorial } from "./components/Tutorial.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Header()}
  <main>
    ${Services()}
    ${Catalog()}
    ${Tutorial()}
    ${Contact()}
  </main>
  ${Footer()}
`;
