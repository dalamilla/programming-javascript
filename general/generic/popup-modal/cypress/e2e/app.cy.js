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
				cy.title().should("include", "popup-modal");
			});

			it("check render all product cards correctly", () => {
				cy.get(".card").should("have.length", 6);
				cy.get(".card h3").first().should("have.text", "Blue Pot");
				cy.get(".card span").first().should("have.text", "$ 25");
			});

			it("check open the modal and display the clicked product image", () => {
				cy.get(".card img").first().click();
				cy.get(".modal").should("be.visible");
				cy.get(".img-container img")
					.invoke("attr", "src")
					.should("include", "blue-pot");
			});

			it("check cycle through images using the modal arrow buttons", () => {
				cy.get(".card img").first().click();

				cy.get(".img-container img")
					.should("have.attr", "src")
					.and("include", "blue-pot");
				cy.get(".modal-btn.right").click();
				cy.get(".img-container img")
					.should("have.attr", "src")
					.and("include", "circle-pot");

				cy.get(".modal-btn.left").click();
				cy.get(".img-container img")
					.should("have.attr", "src")
					.and("include", "blue-pot");
			});

			it("check close the modal when the close button is clicked", () => {
				cy.get(".card img").first().click();
				cy.get(".modal").should("be.visible");

				cy.get(".modal-close .close").click();
				cy.get(".modal").should("not.be.visible");
			});

			it("check prevent page reload on search form submission", () => {
				cy.get(".search-box").type("Blue Pot");
				cy.get(".search-btn").click();
				cy.url().should("include", "/");
			});
		});
	});
});
