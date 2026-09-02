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
				cy.title().should("include", "tribute-homepage");
			});

			it("check the main header and title banner correctly", () => {
				cy.get("header").should("be.visible");
				cy.get("#title").should("have.text", "John Kennedy Toole");
				cy.get("#title-banner h2").should(
					"have.text",
					"The Pulitzer Prize for Fiction Winner",
				);
			});

			it("check the portrait image and caption inside the figure", () => {
				cy.get("#img-div").should("be.visible");
				cy.get("#image")
					.should("be.visible")
					.and("have.attr", "alt", "John Kennedy Toole");
				cy.get("#img-caption").should("have.text", "American novelist");
			});

			it("check the biographical content and works list", () => {
				cy.get("#tribute-info").should("be.visible");
				cy.get("#tribute-info h3").should("have.length.at.least", 3);
				cy.get("#tribute-info ul li")
					.should("have.length", 2)
					.first()
					.should("contain.text", "A Confederacy of Dunces");
			});

			it("check has a valid external Wikipedia link in the footer", () => {
				cy.get("footer").should("be.visible");
				cy.get("#tribute-link")
					.should("be.visible")
					.and(
						"have.attr",
						"href",
						"https://en.wikipedia.org/wiki/John_Kennedy_Toole",
					)
					.and("have.attr", "target", "_blank");
			});
		});
	});
});
