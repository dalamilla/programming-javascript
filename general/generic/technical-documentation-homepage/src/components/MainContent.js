import styles from "./MainContent.module.css";

export function MainContent() {
	const main = document.createElement("main");
	main.id = "main-doc";
	main.className = styles.mainDoc;

	main.innerHTML = `
    <section class="${styles.section}" id="introduction">
      <header class="${styles.sectionHeader}">Introduction</header>
      <p class="${styles.paragraph}">In this tutorial, we are going to teach you about Elixir fundamentals - the language syntax, how to define modules, how to manipulate the characteristics of common data structures, and more.</p>
      <p class="${styles.paragraph}">Installation</p>
      <ul class="${styles.list}">
        <li class="${styles.listItem}">macOs
          <ul class="${styles.list}">
            <li class="${styles.listItem}">Homebrew - Run: "brew install elixir"</li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="${styles.section}" id="interactive_mode">
      <header class="${styles.sectionHeader}">Interactive mode</header>
      <p class="${styles.paragraph}">For now, let’s start by running iex which stands for Interactive Elixir.</p>
      <code class="${styles.codeBlock}">Erlang/OTP 21.0 [64-bit]
iex(1)> 40 + 2
42</code>
    </section>

    <section class="${styles.section}" id="running_scripts">
      <header class="${styles.sectionHeader}">Running scripts</header>
      <p class="${styles.paragraph}">Execute simple scripts with elixir:</p>
      <code class="${styles.codeBlock}">$ elixir simple.exs Hello world from Elixir</code>
    </section>

    <section class="${styles.section}" id="basic_types">
      <header class="${styles.sectionHeader}">Basic types</header>
      <code class="${styles.codeBlock}">iex> 1          # integer
iex> 1.0        # float
iex> true       # boolean
iex> :atom      # atom</code>
    </section>

    <section class="${styles.section}" id="basic_operators">
      <header class="${styles.sectionHeader}">Basic operators</header>
      <code class="${styles.codeBlock}">iex> 1 + 2
3
iex> "foo" &lt;> "bar"
"foobar"</code>
    </section>

    <section class="${styles.section}" id="pattern_matching">
      <header class="${styles.sectionHeader}">Pattern matching</header>
      <code class="${styles.codeBlock}">iex> x = 1
1</code>
    </section>

    <section class="${styles.section}" id="reference">
      <header class="${styles.sectionHeader}">Reference</header>
      <ul class="${styles.list}">
        <li class="${styles.listItem}">Getting Started: <a href="https://elixir-lang.org/getting-started/introduction.html" target="_blank">elixir</a></li>
      </ul>
    </section>
  `;

	return main;
}
