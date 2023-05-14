import '../../component/app-home';
import { Spinner } from 'spin.js';
import DbSource from '../../data/restaurantdb-source';
import CONFIG from '../../globals/config';
import { createResItemTemplate } from '../templates/template-creator';

const spinnerOptions = {
  lines: 10, length: 6, width: 3, radius: 10, color: '#000000',
};
const spinner = new Spinner(spinnerOptions);

const Home = {
  async render() {
    return `
      <app-home></app-home>
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

        const response = await fetch(CONFIG.SEARCH + inputQuery);

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
