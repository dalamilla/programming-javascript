import "./assets/styles/main.css";
import "./assets/styles/app.css";

import { Header } from "./components/Header.js";
import { SurveyForm } from "./components/SurveyForm.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Header()}
  <div id="container">
    ${SurveyForm()}
  </div>
`;
