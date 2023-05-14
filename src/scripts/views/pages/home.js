// import { library, icon } from '@fontawesome/fontawesome-svg-core';
import { Spinner } from 'spin.js';
import DbSource from '../../data/restaurantdb-source';
import { createResItemTemplate } from '../templates/template-creator';

const spinnerOptions = {
  lines: 10, length: 6, width: 3, radius: 10, color: '#000000',
};
const spinner = new Spinner(spinnerOptions);

const Home = {
  async render() {
    return `
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

.hero__head{
  color:white;
}
    </style>
    <div class="hero">
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
  },

  async afterRender() {
    const restaurants = await DbSource.Home();
    const restaurantContainer = document.querySelector('#product-card');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createResItemTemplate(restaurant);
    });

    const formSearch = document.querySelector('.search');
    formSearch.addEventListener('submit', async (event) => {
      event.preventDefault();

      const inputQuery = document.getElementById('name').value;

      try {
        spinner.spin(document.getElementById('spinner-container'));

        const url = `https://restaurant-api.dicoding.dev/search?q=${inputQuery}`;
        const response = await fetch(url);

        const responseJson = await response.json();
        const searchRestaurantContainer = document.querySelector('#product-card');
        searchRestaurantContainer.innerHTML = '';
        responseJson.restaurants.forEach((restaurant) => {
          searchRestaurantContainer.innerHTML += createResItemTemplate(restaurant);
        });

        spinner.stop();
      } catch (error) {
        console.log(error);
        spinner.stop();
        restaurantContainer.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
      }
    });
  },
};

export default Home;
