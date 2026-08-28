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
				cy.title().should("include", "testimonial-slider");
			});

			it("check to display the initial testimonial on load", () => {
				cy.get("#testimonial-name").should("have.text", "Dan");
				cy.get("#testimonial-comment").should(
					"have.text",
					"The best tacos in the area.",
				);
				cy.get("#testimonial-img").should("have.attr", "src");
				cy.get("#testimonial-rating").find("svg").should("have.length", 5);
			});

			it("check to show the next testimonial when clicking the right arrow", () => {
				cy.get(".section-arrow.right").click();

				cy.get("#testimonial-name").should("have.text", "Gin");
				cy.get("#testimonial-comment").should(
					"have.text",
					"Good tacos but doesn't have desserts.",
				);
				cy.get("#testimonial-rating").find("svg").should("have.length", 4);
			});

			it("check wrap around to the last testimonial when clicking the left arrow initially", () => {
				cy.get(".section-arrow.left").click();

				cy.get("#testimonial-name").should("have.text", "David");
				cy.get("#testimonial-comment").should(
					"have.text",
					"I love these tacos, try the birria ones.",
				);
				cy.get("#testimonial-rating").find("svg").should("have.length", 5);
			});

			it("check cycle through all testimonials forward and loop back", () => {
				const expectedNames = ["Dan", "Gin", "Emily", "Gerry", "David"];

				expectedNames.forEach((name) => {
					cy.get("#testimonial-name").should("have.text", name);
					cy.get(".section-arrow.right").click();
				});

				cy.get("#testimonial-name").should("have.text", "Dan");
			});
		});
	});
});
