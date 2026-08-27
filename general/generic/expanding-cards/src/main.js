import "./assets/styles/main.css";
import "./assets/styles/app.css";

import exploreJapan from "./assets/images/explore-japan.jpg";
import fushimiInariTaisha from "./assets/images/fushimi-inari-taisha.jpg";
import himejiCastle from "./assets/images/himeji-castle.jpg";
import itsukushimaShrine from "./assets/images/itsukushima-shrine.jpg";
import mountFuji from "./assets/images/mount-fuji.jpg";

const app = document.querySelector("#app");

app.innerHTML = `
<div class="container">
	<div class="panel active" style="background-image: url('${exploreJapan}')">
		<h3>Explore Japan</h3>
	</div>
	<div class="panel" style="background-image: url('${itsukushimaShrine}')">
		<h3>Itsukushima Shrine</h3>
	</div>
	<div class="panel" style="background-image: url('${mountFuji}')">
		<h3>Mount Fuji</h3>
	</div>
	<div class="panel" style="background-image: url('${himejiCastle}')">
		<h3>Himeji Castle</h3>
	</div>
	<div class="panel" style="background-image: url('${fushimiInariTaisha}')">
		<h3>Fushimi Inari-Taisha</h3>
	</div>
</div>`;

const panels = app.querySelectorAll(".panel");

const removeActive = () =>
	panels.forEach((p) => {
		p.classList.remove("active");
	});

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActive();
		panel.classList.add("active");
	});
});
