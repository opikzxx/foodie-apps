import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createResDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import API_ENDPOINT from '../../globals/api-endpoint';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="content"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.Detail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createResDetailTemplate(restaurant);
    console.log(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
      },
    });
    const formReview = document.querySelector('.post-review');
    formReview.addEventListener('submit', async (event) => {
      event.preventDefault();

      const inputName = document.getElementById('name');
      const inputReview = document.getElementById('review');

      try {
        const response = await fetch(API_ENDPOINT.REVIEW, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: url.id,
            name: inputName.value,
            review: inputReview.value,
          }),
        });

        const responseJson = await response.json();
        this.afterRender(responseJson);
      } catch (error) {
        console.log(error);
      }
    });
  },
};

export default Detail;
