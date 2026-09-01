/// <reference types="cypress" />

describe("app", () => {
	const viewports = [
		{ name: "desktop", width: 1280, height: 720 },
		{ name: "mobile", width: 390, height: 844 },
	];

	viewports.forEach((viewport) => {
		describe(`running on ${viewport.name}`, () => {
			beforeEach(() => {
				cy.viewport(viewport.width, viewport.height);
				cy.visit("/");
			});

			it("check title", () => {
				cy.title().should("include", "personal-portfolio-homepage");
			});

			it("check load the main layout and sections", () => {
				cy.get("header.header").should("be.visible");
				cy.get("#navbar").should("be.visible");
				cy.get("#navbar ul li").should("have.length", 3);

				cy.get("#welcome-section").should("be.visible");
				cy.get("#welcome-section h1").should("contain.text", "Dalamilla");
				cy.get("#welcome-section p").should(
					"contain.text",
					"DevOps enthusiast",
				);

				cy.get("#projects").scrollIntoView().should("be.visible");
				cy.get(".project-tile").should("contain.text", "Projects");

				cy.get("#contact").scrollIntoView().should("be.visible");
				cy.get("#contact h2").should("contain.text", "Contact");

				cy.get("footer")
					.scrollIntoView()
					.should("be.visible")
					.and("contain.text", "Demo project");
			});

			it("check navigate smoothly when clicking navbar links", () => {
				cy.get('#navbar a[href="#projects"]').click();
				cy.url().should("include", "#projects");

				cy.get('#navbar a[href="#welcome-section"]').click();
				cy.url().should("include", "#welcome-section");

				cy.get('#navbar a[href="#contact"]').click();
				cy.url().should("include", "#contact");
			});

			it("check render all project cards with correct external links", () => {
				const expectedProjects = [
					{
						title: "Technical Documentation",
						link: "https://codepen.io/dalamilla/full/WNGMZvV",
					},
					{
						title: "Product LP",
						link: "https://codepen.io/dalamilla/full/zYKREGN",
					},
					{
						title: "Bus Burger Form",
						link: "https://codepen.io/dalamilla/full/QWKQqbL",
					},
					{
						title: "JavaScript Calculator",
						link: "https://codepen.io/dalamilla/pen/VwmLEzG",
					},
					{
						title: "Random Quote Machine",
						link: "https://codepen.io/dalamilla/pen/dyOogvK",
					},
					{
						title: "Drum Machine",
						link: "https://codepen.io/dalamilla/pen/XWNbxgR",
					},
				];

				cy.get(".mosaic .project").should(
					"have.length",
					expectedProjects.length,
				);

				expectedProjects.forEach((proj, index) => {
					cy.get(".mosaic .project")
						.eq(index)
						.within(() => {
							cy.get("h3").should("contain.text", proj.title);
						});

					cy.get(".mosaic .project")
						.eq(index)
						.should("have.attr", "href", proj.link)
						.and("have.attr", "target", "_blank")
						.and("have.attr", "rel", "noopener noreferrer");
				});
			});

			it("check have valid social and contact links", () => {
				cy.get("#profile-link")
					.should("have.attr", "href", "https://www.freecodecamp.org/dalamilla")
					.and("have.attr", "target", "_blank");

				cy.get('#contact .info a[href*="github.com"]')
					.should("have.attr", "href", "https://github.com/dalamilla")
					.and("have.attr", "target", "_blank");

				cy.get('#contact .info a[href^="mailto:"]').should(
					"have.attr",
					"href",
					"mailto:nomail@nomail.com",
				);
			});

			it("check trigger scroll-reveal animations on scroll", () => {
				cy.get("#projects").scrollIntoView();

				cy.get("#projects h2").should("have.class", "is-visible");
				cy.get(".mosaic .project").first().should("have.class", "is-visible");
			});
		});
	});
});
