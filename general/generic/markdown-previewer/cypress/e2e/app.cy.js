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
				cy.title().should("include", "markdown-previewer");
			});

			it("check load the application with the initial markdown content rendered", () => {
				cy.get("#editor").should("be.visible");
				cy.get("#preview").should("be.visible");

				cy.get("#preview").find("h1").should("have.text", "test");
				cy.get("#preview").find("h2").should("have.text", "Test");
				cy.get("#preview").find("h3").should("have.text", "Test Types");

				cy.get("#preview")
					.find("a")
					.should("have.attr", "href", "https://projecteuler.net");
				cy.get("#preview").find("ul li").should("have.length", 3);

				cy.get("#preview").find("table").should("exist");
				cy.get("#preview").find("th").should("have.length", 3);
			});

			it("check update the preview in real-time when typing in the editor", () => {
				const customText = "# Hello Miles Kane\n\nThis is a **Inhaler** test.";

				cy.get("#editor")
					.clear()
					.type(customText, { parseSpecialCharSequences: false });

				cy.get("#preview").find("h1").should("have.text", "Hello Miles Kane");
				cy.get("#preview").find("strong").should("have.text", "Inhaler");
			});

			it("check render blockquotes and code blocks correctly", () => {
				const markdownSnippet = "> Important warning note\n\n`const x = 42;`";

				cy.get("#editor")
					.clear()
					.type(markdownSnippet, { parseSpecialCharSequences: false });

				cy.get("#preview")
					.find("blockquote")
					.should("contain.text", "Important warning note");
				cy.get("#preview").find("code").should("contain.text", "const x = 42;");
			});
		});
	});
});
