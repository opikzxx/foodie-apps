import CONFIG from '../../globals/config';

const allMenu = (menus) => {
  let menuList = '';

  menus.forEach((menu) => {
    menuList += `<span class="styled-span-drink">${menu.name}</span>`;
  });
  return menuList;
};

const allReview = (reviews) => {
  let reviewList = '';

  reviews.forEach((review) => {
    reviewList += `
    <div class="review">
    <h3 style="font-weight: normal;">${review.name}</h3>
    <small>${review.date}</small>
    <p>${review.review}</p>
    </div>
      `;
  });
  return reviewList;
};

const createResDetailTemplate = (restaurant) => `
<h1 class="hero__title">${restaurant.name} Details</h1>
<div class="product-detail">
  <div class="product-images">
    <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name} ">
  </div>
  <div class="product-description">
    <h2 style="text-transform: uppercase;">${restaurant.name} </h2>
    <span class="hint-star">
    ${'★'.repeat(Math.floor(restaurant.rating))}${'☆'.repeat(5 - Math.floor(restaurant.rating))} 
    </span>
      <p>${restaurant.description} </p>
    <h4 class="heading-item">City</h4>
    <p style="margin-left:10px;">${restaurant.city} </p>
    <h4 class="heading-item">Address</h4>
    <p style="margin-left:10px;">${restaurant.address} </p>
    <h4 class="heading-item">Foods</h4>
    <div class="menu-item">
      ${allMenu(restaurant.menus.foods)}
    </div>
      <h4 class="heading-item">Drinks</h4>
    <div class="menu-item">
      ${allMenu(restaurant.menus.drinks)}
    </div>
  </div>
  </div>
<div class="customer-reviews">
<h2>Customer Review</h2>
<hr>
  ${allReview(restaurant.customerReviews)}
  <div class="comment-box">
  <h4 style="margin-bottom:10px;">Write Your Review</h4>
  <form action="#" class="post-review">
    <input id="name" type="text" placeholder="Full Name...">
    <textarea id="review" placeholder="Type Your Review..." ></textarea>
    <button type="submit">Submit</button>
  </form>
  </div>
</div>
`;

const createResItemTemplate = (restaurants) => `
<a href="/#/detail/${restaurants.id}" class="product-card">
  <div class="badge">${restaurants.city}</div>
  <div class="product-tumb">
    <img src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}" alt="${restaurants.name}">
  </div>
  <div class="product-details">
    <span class="hint-star">
    ${'★'.repeat(Math.floor(restaurants.rating))}${'☆'.repeat(5 - Math.floor(restaurants.rating))} 
    </span>
    <h2>${restaurants.name}</h2>
    <p>${restaurants.description}</p>
  </div>
</a>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <h1>♡</h1>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <h1>♥</h1>
  </button>
`;

export {
  createResItemTemplate,
  createResDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
