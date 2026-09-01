export function initScrollSpy({ linkSelector }) {
	const sections = document.querySelectorAll("section[id]");
	const navLinks = document.querySelectorAll(linkSelector);

	if (!sections.length || !navLinks.length) return;

	const observerOptions = {
		root: null,
		rootMargin: "-20% 0px -60% 0px",
		threshold: 0,
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const id = entry.target.getAttribute("id");

				navLinks.forEach((link) => {
					link.classList.remove("active");
					if (link.getAttribute("href") === `#${id}`) {
						link.classList.add("active");
					}
				});
			}
		});
	}, observerOptions);

	sections.forEach((section) => {
		observer.observe(section);
	});
}
