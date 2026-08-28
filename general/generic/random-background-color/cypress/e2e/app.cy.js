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
				cy.title().should("include", "random-background-color");
			});

			it("check the initial HEX color loaded from CSS variables", () => {
				cy.get("strong")
					.invoke("text")
					.then((initialColor) => {
						expect(initialColor).to.match(/^#[0-9A-F]{6}$/);

						cy.window().then((win) => {
							const expectedColor = win
								.getComputedStyle(win.document.documentElement)
								.getPropertyValue("--bg-primary")
								.trim()
								.toUpperCase();
							expect(initialColor).to.equal(expectedColor);
						});
					});
			});

			it("check the change of background color and updates the text when the button is clicked", () => {
				cy.get("strong")
					.invoke("text")
					.then((initialColor) => {
						cy.contains("button", "Change Color").click();

						cy.get("strong")
							.invoke("text")
							.should((newColor) => {
								expect(newColor).to.match(/^#[0-9A-F]{6}$/);
								expect(newColor).not.to.equal(initialColor);
							});

						cy.get("#app")
							.should("have.attr", "style")
							.and("include", "background-color");
					});
			});
		});
	});
});
