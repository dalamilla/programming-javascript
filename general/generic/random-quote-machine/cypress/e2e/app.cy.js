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
				cy.title().should("include", "random-quote-machine");
			});

			it("check loads the application and displays a default quote and author", () => {
				cy.get("#quote-box").should("be.visible");
				cy.get("#text").should("not.be.empty");
				cy.get("#author").should("not.be.empty");
			});

			it("check displays a new quote and author when the sync button is clicked", () => {
				cy.get("#new-quote").click();

				cy.get("#text").should("not.be.empty");
				cy.get("#author").should("not.be.empty");
			});

			it("check updates the tweet button href attribute with the encoded current quote and author", () => {
				cy.get("#text")
					.invoke("text")
					.then((quote) => {
						cy.get("#author")
							.invoke("text")
							.then((author) => {
								const encodedText = encodeURIComponent(
									`"${quote}" — ${author}`,
								);

								cy.get("#tweet-quote")
									.should("have.attr", "href")
									.and("include", encodedText);
							});
					});
			});

			it("check ensures the tweet link opens in a new tab", () => {
				cy.get("#tweet-quote").should("have.attr", "target", "_blank");
			});
		});
	});
});
