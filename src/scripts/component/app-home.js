class AppHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
      /* Search */
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    border-radius: 4px;
    margin-top: 16px;
  }
  
  form > .textbox {
    outline: 0;
    height: 44px;
    width: auto;
    line-height: 44px;
    padding: 0 16px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #212121;
    border: 0;
    border-radius: 4px 0 0 4px;
  }
  
  form > .textbox:focus {
    outline: 0;
    background-color: #FFF;
  }
  
  form > .button {
    outline: 0;
    background: none;
    background-color: rgba(38, 50, 56, 0.8);
    height: 44px;
    width: 44px;
    text-align: center;
    line-height: 42px;
    border: 0;
    color: #FFF;
    font-size: 16px;
    text-rendering: auto;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    transition: background-color .4s ease;
    border-radius: 0 4px 4px 0;
  }
  
  form > .button:hover {
    background-color: #FFA559;
  }
  .hero-element .container .bg picture {
    width: max-content;
  }
  .hero-element .container .bg {
    overflow: hidden;
    background-size: cover;
  }
  .hero-element .container .bg img {
    width: 100%;
    height: 550px;
    object-fit: cover;
  }
  
  .hero__head{
    color:white;
    text-align: center;
  }
  
      </style>
      <div class="hero">
      <div class="bg">
      <picture>
          <source media="(max-width: 600px)" srcset="./heros/hero-image-small.jpg">
          <img src="./heros/hero-image-large.jpg" alt="Hero Banner"/>
        </picture>
        </div>
      <div class="hero__inner">
        <h1 class="hero__head">Explore Your Restaurant</h1>
        <p class="hero__tagline">Temukan Kenikmatan Kuliner yang Tidak Terlupakan</p>
        <form method="post" class="search">
          <input type="text" class="textbox" placeholder="Search Restaurant" id="name" alt="Search Restaurant">
          <button class="button">🔎︎</button>
        </form>
      </div>
    </div>
        <section class="content">
        <div class="latest">
          <h2 class="hero__title">Explore Restaurants</h2>
             <div id="product-card" class="posts">
             </div>
        </section>
            `;
  }
}
customElements.define('app-home', AppHome);
