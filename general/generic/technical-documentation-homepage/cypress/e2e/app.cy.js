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
				cy.title().should("include", "technical-documentation-homepage");
			});

			it("check render the navbar and main documentation content", () => {
				cy.get("nav").should("be.visible");
				cy.get("nav header").should("contain.text", "Elixir");
				cy.get("main#main-doc").should("be.visible");
				cy.get("#introduction").should("be.visible");
			});

			it("check navigate to the correct section when clicking a navbar link", () => {
				cy.get('a[href="#basic_types"]').click();
				cy.url().should("include", "#basic_types");
				cy.get("#basic_types").should("be.visible");
			});

			it("check trigger the scrollspy active state when scrolling down", () => {
				cy.get("#basic_operators").scrollIntoView();

				cy.get('a[href="#basic_operators"]').should("have.class", "active");
			});
		});
	});
});
