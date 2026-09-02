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
				cy.title().should("include", "survey-form");
			});

			it("check load the header and form elements correctly", () => {
				cy.get("#title").should("have.text", "Bus Burger Survey Form");
				cy.get("#description").should("have.text", "Thank you for your time");
				cy.get("#survey-form").should("be.visible");
				cy.get("#name").should("be.visible");
				cy.get("#email").should("be.visible");
				cy.get("#number").should("be.visible");
				cy.get("#dropdown").should("be.visible");
				cy.get("#submit").should("be.visible");
			});

			it("check fill out and submit the survey form successfully", () => {
				cy.get("#name").type("Jane Doe");
				cy.get("#email").type("jane.doe@example.com");
				cy.get("#number").type("25");

				cy.get("#dropdown").select("tulum");

				cy.get('input[name="recommend"][value="definitely"]').check({
					force: true,
				});

				cy.get('input[name="prefer"][value="burger"]').check({ force: true });
				cy.get('input[name="prefer"][value="chips"]').check({ force: true });

				cy.get("#comments").type("Great burgers and amazing vibe!");

				cy.get("#submit").click();
			});

			it("check require mandatory fields (name, email, dropdown)", () => {
				cy.get("#submit").click();
				cy.get("#name:invalid").should("exist");
				cy.get("#email:invalid").should("exist");
				cy.get("#dropdown:invalid").should("exist");
			});
		});
	});
});
