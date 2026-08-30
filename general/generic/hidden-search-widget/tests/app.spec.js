// @ts-check
import { expect, test } from "@playwright/test";

test.describe("app", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("check title page", async ({ page }) => {
		await expect(page).toHaveTitle("hidden-search-widget");
	});

	test("check render search input and button correctly", async ({ page }) => {
		const searchWidget = page.locator(".search");
		const input = page.locator(".input");
		const btn = page.locator(".btn");

		await expect(searchWidget).toBeVisible();
		await expect(input).toBeVisible();
		await expect(btn).toBeVisible();
		await expect(searchWidget).not.toContainClass("active");
	});

	test("check toggle active class and focus the input when button is clicked", async ({
		page,
	}) => {
		const searchWidget = page.locator(".search");
		const input = page.locator(".input");
		const btn = page.locator(".btn");

		await btn.click();

		await expect(searchWidget).toContainClass("active");
		await expect(input).toBeFocused();

		await btn.click();
		await expect(searchWidget).not.toContainClass("active");
	});
});
