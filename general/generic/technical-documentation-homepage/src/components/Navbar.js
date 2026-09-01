import styles from "./Navbar.module.css";

export function Navbar() {
	const nav = document.createElement("nav");
	nav.className = styles.navbar;

	nav.innerHTML = `
    <header class="${styles.header}">Elixir</header>
    <a class="${styles.navLink}" href="#introduction">Introduction</a>
    <a class="${styles.navLink}" href="#interactive_mode">Interactive mode</a>
    <a class="${styles.navLink}" href="#running_scripts">Running scripts</a>
    <a class="${styles.navLink}" href="#basic_types">Basic types</a>
    <a class="${styles.navLink}" href="#basic_operators">Basic operators</a>
    <a class="${styles.navLink}" href="#pattern_matching">Pattern matching</a>
    <a class="${styles.navLink}" href="#reference">Reference</a>
  `;

	return nav;
}
