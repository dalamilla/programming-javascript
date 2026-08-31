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
				cy.title().should("include", "drum-machine");
			});

			it("check load the drum machine with all pads and default LCD text", () => {
				cy.get("#drum-machine").should("be.visible");
				cy.get(".lcd").should("have.text", "Drum Machine");
				cy.get(".drum-pad").should("have.length", 9);
			});

			it("check play sound, add active class, and update LCD when a pad is clicked", () => {
				cy.get("#heater-1").click();

				cy.get("#heater-1").should("have.class", "drumactive");
				cy.get(".lcd").should("have.text", "heater-1");

				cy.get("#heater-1 audio").then(($audio) => {
					const audio = $audio.get(0);
					expect(audio.paused).to.be.false;
				});
			});

			it("check trigger sound and active state via keyboard shortcut", () => {
				cy.get("body").trigger("keydown", { key: "q" });

				cy.get("#heater-1").should("have.class", "drumactive");
				cy.get(".lcd").should("have.text", "heater-1");

				cy.get("body").trigger("keyup", { key: "q" });
				cy.get("#heater-1").should("not.have.class", "drumactive");
			});

			it("check update volume for all clips when slider moves", () => {
				cy.get("#volumen").invoke("val", 0.7).trigger("input");

				cy.get(".lcd").should("have.text", "Volume: 70");

				cy.get("audio.clip").each(($audio) => {
					expect($audio.prop("volume")).to.equal(0.7);
				});
			});
		});
	});
});
