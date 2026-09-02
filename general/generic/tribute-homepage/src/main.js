import "./assets/styles/main.css";
import "./assets/styles/app.css";

import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { TributeFigure } from "./components/TributeFigure.js";
import { TributeInfo } from "./components/TributeInfo.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Header()}
  <main id="main">
    ${TributeFigure()}
    ${TributeInfo()}
  </main>
  ${Footer()}
`;
