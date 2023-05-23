class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>&copy;2023 Foodie Apps, All Rights Reserved</p>
          `;
  }
}

customElements.define('app-footer', AppFooter);
