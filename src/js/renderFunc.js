//import fetchData from '../js/fetch';
const svg = require('../img/icons.svg');

const gallery = document.querySelector('.gallery__list');

// object of pagameters to get amount of images to render
const resolutionQuery = {
  0: 3,
  1: 6,
  2: 9,
};

// variables
const key = Math.floor(window.innerWidth / 600);
const itemsPerPage = resolutionQuery[key];

// create markup function
function createMarkup(arr) {
  let markup = arr.map(
    ({ strDrinkThumb, strDrink }) => `
        <li class="gallery__card">
            <img src='${strDrinkThumb}' alt='${strDrink}' class="gallery__photo" loading='lazy'/>
             <div class="gallery__info">
                <h5 class="gallery__title">${strDrink}</h5>
                <div class="button__container">
                  <button class="button-more">Learn more</button>
                  <button class="button-add">Add to <svg class="svg" width="21" height="19">
                  <use href="${svg}#icon-heart-filled"></use>
                  </svg></button>
                </div>
             </div>
            </li>
      `
  );
  return markup.join('');
}

// function for gallery markup cleaning
const clearGallery = () => {
  gallery.innerHTML = '';
};

// function for rendering images, takes 2 arguments - function for render (fetchData object with method you need for render) and query
let page = 0;
const renderCocktails = async (fn, query) => {
  const response = await fn(query);
  const result = response.drinks?.length
    ? response.drinks.slice(page * itemsPerPage, itemsPerPage)
    : [];
  const elems = createMarkup(result);
  if (elems) {
    gallery.insertAdjacentHTML('afterbegin', elems);
  } else {
    console.log('Nothing to render');
  }
};

//export of all functions as an object
export default {
  renderCocktails,
  itemsPerPage,
  clearGallery,
};
