/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );
});

Scenario('like one restaurant', ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/');
  I.wait(1);

  I.seeElement('.product-card');
  I.wait(1);
  I.click(locate('.product-card').first());
  I.wait(1);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.product-card');
});

Scenario('unlike one restaurant', ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/');
  I.wait(1);

  I.seeElement('.product-card');
  I.wait(1);
  I.click(locate('.product-card').first());
  I.wait(1);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.product-card');
  I.click(locate('.product-card').first());
  I.wait(1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );
});

Scenario('Pencarian restoran dengan kata kunci', async ({ I }) => {
  I.amOnPage('/');

  const expectedValue = 'MELTING POT';

  await I.fillField('#name', expectedValue);
  await I.click('.button');
  const actualValue = await I.grabTextFrom(locate('.product-card h2').first());

  assert.strictEqual(actualValue, expectedValue);
});

Scenario('Posting review untuk restoran', async ({ I }) => {
  const review = {
    name: 'John Doe',
    review: 'This restaurant has great food!',
  };

  I.amOnPage('/');
  I.wait(1);

  I.seeElement('.product-card');
  I.wait(1);
  I.click(locate('.product-card').first());
  I.wait(1);

  I.fillField('input#name', review.name);
  I.fillField('textarea#review', review.review);
  I.click('Submit');

  I.see(review.name);
  I.see(review.review);
});
