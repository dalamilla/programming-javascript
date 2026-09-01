export function Projects() {
	const projectList = [
		{
			title: "Technical Documentation",
			description:
				"A structured technical documentation layout built with semantic markup.",
			link: "https://codepen.io/dalamilla/full/WNGMZvV",
		},
		{
			title: "Product LP",
			description: "A high-converting, modern product landing page design.",
			link: "https://codepen.io/dalamilla/full/zYKREGN",
		},
		{
			title: "Bus Burger Form",
			description:
				"An interactive, user-friendly form interface with custom layout components.",
			link: "https://codepen.io/dalamilla/full/QWKQqbL",
		},
		{
			title: "JavaScript Calculator",
			description: "A simple js calculator that looks like casio old ones.",
			link: "https://codepen.io/dalamilla/pen/VwmLEzG",
		},
		{
			title: "Random Quote Machine",
			description: "Qoutes from notable software engineers.",
			link: "https://codepen.io/dalamilla/pen/dyOogvK",
		},
		{
			title: "Drum Machine",
			description: "A vintage drum machine.",
			link: "https://codepen.io/dalamilla/pen/XWNbxgR",
		},
	];

	const projectsHTML = projectList
		.map(
			(project) => `
    <a class="container project reveal" href="${project.link}" target="_blank" rel="noopener noreferrer">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </a>
  `,
		)
		.join("");

	return `
    <section id="projects">
      <h2 class="project-tile reveal">Projects</h2>
      <div class="mosaic">
        ${projectsHTML}
      </div>
    </section>
  `;
}
