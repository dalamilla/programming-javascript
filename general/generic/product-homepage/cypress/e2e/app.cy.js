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
				cy.title().should("include", "product-homepage");
			});

			it("check the header and displays the logo and brand name", () => {
				cy.get("#header").should("be.visible");
				cy.get("#logo .header-icon")
					.should("be.visible")
					.find("svg")
					.should("exist");
				cy.get("#logo h1").should("have.text", "KazHooP");
			});

			it("check all navigation links and navigates correctly", () => {
				cy.get("#nav-bar").within(() => {
					cy.get('a[href="#services"]').should("have.text", "Services");
					cy.get('a[href="#catalog"]').should("have.text", "Catalog");
					cy.get('a[href="#tutorial"]').should("have.text", "Tutorial");
				});

				cy.get('a[href="#catalog"]').click();
				cy.url().should("include", "#catalog");
			});

			it("check the product catalog with correct pricing", () => {
				cy.get("#catalog").should("be.visible");
				cy.get(".card").should("have.length", 3);

				cy.get("#metal").within(() => {
					cy.contains("Metal Kazoo").should("be.visible");
					cy.get(".price").should("have.text", "$5.99");
					cy.get(".btn").should("have.text", "Add to Cart");
				});

				cy.get("#wood").within(() => {
					cy.contains("Wood Kazoo").should("be.visible");
					cy.get(".price").should("have.text", "$4.99");
				});

				cy.get("#plastic").within(() => {
					cy.contains("Plastic Kazoo").should("be.visible");
					cy.get(".price").should("have.text", "$3.99");
				});
			});

			it("check the tutorial video", () => {
				cy.get("#tutorial").should("be.visible");
				cy.get("#video")
					.should("have.attr", "src")
					.and("include", "youtube.com/embed/3N7Ie3IVGtU");
			});

			it("check user input in the newsletter subscription form", () => {
				cy.get("#contact-us").should("be.visible");
				cy.get("#email")
					.type("testuser@example.com")
					.should("have.value", "testuser@example.com");

				cy.get("#submit").should("have.value", "Subscribe");
			});
		});
	});
});
