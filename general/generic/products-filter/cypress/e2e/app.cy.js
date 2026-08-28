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
				cy.title().should("include", "products-filter");
			});

			it("check display all initial items on load", () => {
				cy.get(".item").should("have.length", 12);
				cy.get(".item").first().should("contain.text", "Cabinet");
				cy.get(".item").last().should("contain.text", "Table");
			});

			it("check filter items correctly when typing in the search box", () => {
				cy.get(".search-box").type("chair");
				cy.get(".item").should("have.length", 2);
				cy.get(".item").eq(0).should("contain.text", "Chair Eames");
				cy.get(".item").eq(1).should("contain.text", "Chair");
			});

			it("check show a not found message when no items match the search", () => {
				cy.get(".search-box").type("nonexistentitem");
				cy.get(".item").should("not.exist");
				cy.get(".no-results")
					.should("be.visible")
					.and("contain.text", "Not Elements Found");
			});

			it("check prevent form submission refresh", () => {
				cy.get(".search-box").type("lamp");
				cy.get(".search-item").submit();
				cy.url().should("include", "/");
				cy.get(".item").should("have.length", 2);
			});
		});
	});
});
