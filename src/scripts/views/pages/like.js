import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
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
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#product-card');

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createResItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML += '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }
  },
};

export default Like;
