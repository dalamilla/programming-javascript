import kazoo from "../assets/images/kazoo.svg?raw";

export function Header() {
	return `
    <header id="header">
        <div id="logo">
            <div class="header-icon">
              ${kazoo}
            </div>
        <h1>KazHooP</h1>
      </div>
      <nav id="nav-bar">
        <ul>
          <li><a class="nav-link" href="#services">Services</a></li>
          <li><a class="nav-link" href="#catalog">Catalog</a></li>
          <li><a class="nav-link" href="#tutorial">Tutorial</a></li>
        </ul>
      </nav>
    </header>
  `;
}
