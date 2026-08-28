import "./assets/styles/main.css";
import "./assets/styles/app.scss";
import { createIcons, Search } from "lucide";

const modules = import.meta.glob("./assets/images/*.svg", { eager: true });
const images = Object.fromEntries(
	Object.entries(modules).map(([path, module]) => [
		path.split("/").pop(),
		module.default,
	]),
);

const items = [
	{ id: 1, title: "Cabinet", price: 300 },
	{ id: 2, title: "Chair Eames", price: 30 },
	{ id: 3, title: "Chair", price: 50 },
	{ id: 4, title: "Individual Bed", price: 170 },
	{ id: 5, title: "Desk", price: 150 },
	{ id: 6, title: "Double Bed", price: 200 },
	{ id: 7, title: "Dresser", price: 250 },
	{ id: 8, title: "Modern Lamp", price: 40 },
	{ id: 9, title: "Traditional Lamp", price: 50 },
	{ id: 10, title: "Sofa", price: 220 },
	{ id: 11, title: "Shelve", price: 80 },
	{ id: 12, title: "Table", price: 110 },
].map((item) => ({
	...item,
	image: images[`${item.id}.svg`],
}));

const app = document.querySelector("#app");

app.innerHTML = `
    <section>
        <div class="search">
            <form class="search-item">
                <input class="search-box" type="text" placeholder="Item....." aria-label="Search items">
                <button class="search-btn" type="submit"><i data-lucide="search"></i></button>
            </form>
        </div>
        <div class="list" id="item-list"></div>
    </section>
`;

createIcons({ icons: { Search } });

const searchBox = app.querySelector(".search-box");
const searchForm = app.querySelector(".search-item");
const listItemContainer = app.querySelector(".list");

const renderItems = (data) => {
	if (data.length === 0) {
		listItemContainer.innerHTML = `<h3 class="no-results">Not Elements Found</h3>`;
		return;
	}

	listItemContainer.innerHTML = data
		.map(
			(item) => `
            <div class="item">
                <img src="${item.image}" alt="${item.title}" />
                <h3>${item.title}</h3>
                <span>$ ${item.price}</span>
            </div>
        `,
		)
		.join("");
};

const handleSearch = (e) => {
	const filter = e.target.value.toLowerCase().trim();
	const result = items.filter((item) =>
		item.title.toLowerCase().includes(filter),
	);
	renderItems(result);
};

searchBox.addEventListener("input", handleSearch);

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
});

renderItems(items);
