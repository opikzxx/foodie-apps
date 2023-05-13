import FavoriteMovieIdb from '../../data/favorite-restaurant-idb';
import { createResItemTemplate } from '../templates/template-creator';

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
    const restaurants = await FavoriteMovieIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#product-card');
    console.log(restaurants);
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createResItemTemplate(restaurant);
    });
  },
};

export default Like;
