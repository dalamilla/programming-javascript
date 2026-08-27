import { expect, test } from "@playwright/test";

test.describe("expanding cards", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("check title page", async ({ page }) => {
		await expect(page).toHaveTitle("expanding-cards");
	});

	test("check render all five panels with correct titles", async ({ page }) => {
		const panels = page.locator(".panel");
		await expect(panels).toHaveCount(5);

		const titles = [
			"Explore Japan",
			"Itsukushima Shrine",
			"Mount Fuji",
			"Himeji Castle",
			"Fushimi Inari-Taisha",
		];

		for (let i = 0; i < titles.length; i++) {
			await expect(panels.nth(i).locator("h3")).toHaveText(titles[i]);
		}
	});

	test("check the first panel active by default", async ({ page }) => {
		const firstPanel = page.locator(".panel").first();
		const secondPanel = page.locator(".panel").nth(1);

		await expect(firstPanel).toContainClass("active");
		await expect(secondPanel).not.toContainClass("active");
	});

	test("check change of active panel on click", async ({ page }) => {
		const panels = page.locator(".panel");
		const thirdPanel = panels.nth(2);

		await thirdPanel.click();

		await expect(thirdPanel).toContainClass("active");
		await expect(panels.first()).not.toContainClass("active");
	});

	test("check one active panel at a time", async ({ page }) => {
		const panels = page.locator(".panel");

		await panels.last().click();

		const activePanels = page.locator(".panel.active");
		await expect(activePanels).toHaveCount(1);
		await expect(panels.last()).toContainClass("active");
	});
});
