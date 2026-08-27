import { expect, test } from "@playwright/test";

test.describe("app", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("check title page", async ({ page }) => {
		await expect(page).toHaveTitle("rotating-navigation-animation");
	});

	test("check load the main article content and image correctly", async ({
		page,
	}) => {
		await expect(page.locator("h1")).toHaveText("Catmazing Article");
		await expect(page.locator("small")).toHaveText("Paul McCatney");

		const catImage = page.locator("img[alt='kitty']");
		await expect(catImage).toBeVisible();
	});

	test("check icons and navigation links", async ({ page }) => {
		const navLinks = page.locator("nav ul li");
		await expect(navLinks).toHaveCount(3);

		await expect(page.locator("nav")).toContainText("Home");
		await expect(page.locator("nav")).toContainText("About");
		await expect(page.locator("nav")).toContainText("Contact");
	});

	test("check toggle navigation open and close states", async ({ page }) => {
		const container = page.locator(".container");
		const openButton = page.locator("#open");
		const closeButton = page.locator("#close");

		await expect(container).not.toContainClass("show-nav");

		await openButton.click();

		await expect(container).toContainClass("show-nav");

		await closeButton.click();

		await expect(container).not.toContainClass("show-nav");
	});
});
