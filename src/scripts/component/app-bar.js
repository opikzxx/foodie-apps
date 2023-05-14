class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="app-bar">
      <div class="app-bar__brand">
        <img src="https://i.imgur.com/kTEdn4u.png" alt="Foodie" />
      </div>
      <div class="app-bar__menu">
        <button id="hamburgerButton">☰</button>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/like">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/muhammad-taufik-heryunanto-103223244/">About Us</a></li>
        </ul>
      </nav>
    </header>
        `;
  }
}

customElements.define('app-bar', AppBar);
