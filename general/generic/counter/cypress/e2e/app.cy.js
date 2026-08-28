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
				cy.title().should("include", "counter");
			});

			it("check render the initial state correctly", () => {
				cy.get("h1").should("have.text", "Counter");
				cy.get("p").should("have.text", "0");
				cy.get(".btncounter.reduce").should("have.value", "Reduce Count");
				cy.get(".btncounter.add").should("have.value", "Add Count");
			});

			it("check increment the count and apply positive styling", () => {
				cy.get(".btncounter.add").click();
				cy.get("p").should("have.text", "1").and("have.class", "positive");

				cy.get(".btncounter.add").click();
				cy.get("p").should("have.text", "2").and("have.class", "positive");
			});

			it("check decrement the count and apply negative styling", () => {
				cy.get(".btncounter.reduce").click();
				cy.get("p").should("have.text", "-1").and("have.class", "negative");

				cy.get(".btncounter.reduce").click();
				cy.get("p").should("have.text", "-2").and("have.class", "negative");
			});

			it("check remove styling when count returns to zero", () => {
				cy.get(".btncounter.add").click();
				cy.get("p").should("have.class", "positive");

				cy.get(".btncounter.reduce").click();
				cy.get("p")
					.should("have.text", "0")
					.and("not.have.class", "positive")
					.and("not.have.class", "negative");
			});
		});
	});
});
