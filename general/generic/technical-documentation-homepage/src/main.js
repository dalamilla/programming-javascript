import "./assets/styles/main.css";
import "./assets/styles/app.css";

import { MainContent } from "./components/MainContent.js";
import { Navbar } from "./components/Navbar.js";
import navStyles from "./components/Navbar.module.css";
import { initScrollSpy } from "./utils/scrollspy.js";

const app = document.querySelector("#app");

app.appendChild(Navbar());
app.appendChild(MainContent());

initScrollSpy({
	linkSelector: `.${navStyles.navLink}`,
});
