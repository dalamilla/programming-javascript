export function Contact() {
	return `
    <section id="contact-us">
      <h2>Stay up to date with our products:</h2>
      <form id="form" action="/email-submit">
        <input id="email" name="email" type="email" placeholder="Enter email" required>
        <input id="submit" type="submit" class="btn" value="Subscribe">
      </form>
    </section>
  `;
}
