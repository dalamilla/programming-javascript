import { expect, test } from "@playwright/test";

test.describe("app", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("check title page", async ({ page }) => {
		await expect(page).toHaveTitle("progress-steps");
	});

	test("check correct initial state", async ({ page }) => {
		const Circles = page.locator(".progress__circle");
		const progressBar = page.locator(".progress__bar");

		await expect(Circles.nth(0)).toContainClass("progress__circle--active");
		for (let i = 1; i < (await Circles.count()); i++) {
			await expect(Circles.nth(i)).not.toContainClass(
				"progress__circle--active",
			);
		}

		await expect(page.locator(".btn--prev")).toContainClass("btn--disabled");
		await expect(page.locator(".btn--next")).not.toContainClass(
			"btn--disabled",
		);

		await expect(progressBar).toHaveCSS("width", "0px");
	});

	test("check advance steps and update progress bar when clicking 'Next'", async ({
		page,
	}) => {
		const nextBtn = page.locator(".btn--next");
		const prevBtn = page.locator(".btn--prev");

		await expect(prevBtn).toContainClass("btn--disabled");

		await nextBtn.click();
		await expect(page.locator(".progress__circle").nth(1)).toContainClass(
			"progress__circle--active",
		);
		await expect(prevBtn).not.toContainClass("btn--disabled");

		await nextBtn.click();
		await expect(page.locator(".progress__circle").nth(2)).toContainClass(
			"progress__circle--active",
		);
		await expect(prevBtn).not.toContainClass("btn--disabled");

		await nextBtn.click();
		await expect(page.locator(".progress__circle").nth(3)).toContainClass(
			"progress__circle--active",
		);
		await expect(nextBtn).toContainClass("btn--disabled");
	});

	test("check go back steps when clicking 'Prev'", async ({ page }) => {
		const nextBtn = page.locator(".btn--next");
		const prevBtn = page.locator(".btn--prev");

		await nextBtn.click();
		await nextBtn.click();
		await expect(page.locator(".progress__circle").nth(2)).toContainClass(
			"progress__circle--active",
		);

		await prevBtn.click();
		await expect(page.locator(".progress__circle").nth(2)).not.toContainClass(
			"progress__circle--active",
		);
		await expect(page.locator(".progress__circle").nth(1)).toContainClass(
			"progress__circle--active",
		);
	});
});
