import { Spinner } from 'spin.js';
import FavoriteMovieIdb from '../../data/favorite-restaurant-idb';
import { createResItemTemplate } from '../templates/template-creator';

const spinnerOptions = {
  lines: 10, length: 6, width: 3, radius: 10, color: '#000000',
};
const spinner = new Spinner(spinnerOptions);

const Like = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
      <h2 class="hero__title">Favorite Restaurants</h2>
         <div id="product-card" class="posts">
         </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#product-card');

    try {
      spinner.spin(restaurantContainer);

      const restaurants = await FavoriteMovieIdb.getAllRestaurants();
      console.log(restaurants);
      restaurantContainer.innerHTML = ''; // Menghapus konten sebelum menambahkan data baru
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createResItemTemplate(restaurant);
      });
    } catch (error) {
      console.log(error);
      restaurantContainer.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
    } finally {
      spinner.stop();
    }
  },
};

export default Like;
