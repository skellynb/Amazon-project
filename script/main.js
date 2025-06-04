

import { products } from "../data/products.js";

const productGrid = document.querySelector('.products-grid');

const displayProduct = () => {

  products.forEach(product => {
    const checkMark = `images/icons/checkmark.png`
    const centDollars = (product.priceCents / 100).toFixed(2);

    const roundedRating = Math.round(product.rating.stars * 10);

    const starImage = `images/ratings/rating-${roundedRating}.png`;

    const productHtml = `
    <div class="product-container">
    <div class="product-image-container">
     <img class="product-image"
              src="${product.image}">
          </div>
          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
          
          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${starImage}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>
          <div class="product-price">
           ${centDollars}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src = "${checkMark}"/>
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
    `;
    productGrid.innerHTML += productHtml
  });
};
displayProduct();
