import { expect, test } from "@playwright/test";

test.describe("app", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("check title page", async ({ page }) => {
		await expect(page).toHaveTitle("blurry-loading");
	});

	test("should render initial DOM elements correctly", async ({ page }) => {
		const bg = page.locator(".bg");
		const loadText = page.locator(".loading-text");

		await expect(bg).toBeVisible();
		await expect(loadText).toBeVisible();

		await expect(bg).toHaveCSS("background-image", /welder/);
	});

	test("should fade out text and deblur image upon completion", async ({
		page,
	}) => {
		const bg = page.locator(".bg");
		const loadText = page.locator(".loading-text");

		await expect(loadText).toHaveText("100%", { timeout: 5000 });

		await expect(loadText).toHaveCSS("opacity", "0");
		await expect(bg).toHaveCSS("filter", "blur(0px)");
	});
});
