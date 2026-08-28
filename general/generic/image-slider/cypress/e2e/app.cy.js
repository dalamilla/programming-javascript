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
				cy.title().should("include", "image-slider");
			});

			it("check render the initial image and navigation buttons", () => {
				cy.get("#container").should("be.visible");
				cy.get(".btn.left").should("exist");
				cy.get(".btn.right").should("exist");

				cy.get(".img-container")
					.should("have.css", "background-image")
					.and("include", "cat-1");
			});

			it("check cycles to the next image when clicking the right arrow", () => {
				cy.get(".btn.right").click();
				cy.get(".img-container")
					.should("have.css", "background-image")
					.and("include", "cat-2");

				cy.get(".btn.right").click();
				cy.get(".img-container")
					.should("have.css", "background-image")
					.and("include", "cat-3");
			});

			it("check cycles to the previous image or wraps around when clicking the left arrow", () => {
				cy.get(".btn.left").click();
				cy.get(".img-container")
					.should("have.css", "background-image")
					.and("include", "cat-5");

				cy.get(".btn.left").click();
				cy.get(".img-container")
					.should("have.css", "background-image")
					.and("include", "cat-4");
			});
		});
	});
});
