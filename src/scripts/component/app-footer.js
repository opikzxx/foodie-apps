class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <div class="wrapper">
        <small>&copy;2023 <strong>Foodie Apps</strong>, All Rights Reserved</small>
      </div>
    </footer>
          `;
  }
}

customElements.define('app-footer', AppFooter);
