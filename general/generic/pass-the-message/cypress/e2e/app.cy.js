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
				cy.title().should("include", "pass-the-message");
			});

			it("check render the form elements correctly", () => {
				cy.get("#container").should("be.visible");
				cy.get("#message-input").should(
					"have.attr",
					"placeholder",
					"Write a Message",
				);
				cy.get("button[type='submit']").should("contain.text", "Submit");
			});

			it("check display the entered message when submitted", () => {
				const testMessage = "Hello, Matt Helders!";

				cy.get("#message-input").type(testMessage);
				cy.get("#form-message").submit();

				cy.get("#message-output").should("have.text", testMessage);
				cy.get("#message-input").should("have.value", "");
			});

			it("check show an error message when submitting an empty input", () => {
				cy.get("#form-message").submit();

				cy.get("#message-output").should("have.text", "Empty Message!!");
			});
		});
	});
});
