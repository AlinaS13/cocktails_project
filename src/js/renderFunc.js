// import { keys } from './localStoregeKeys';
import { getSetLS } from './localStorege/localStoregeaAddRemowe';
import { keys } from './localStorege/localStoregeKeys';

const svgLink = require('../img/icons.svg');

const gallery = document.querySelector('.gallery__list');

let drinks = [];
// object of pagameters to get amount of images to render depending of client viewport height
const resolutionQuery = {
  0: 3,
  1: 6,
  2: 9,
};
// variables

// let key = Math.floor(window.innerWidth / 600);

// check client viewport height and set key we need
// to apply to choose correct ammount of images to render
function checkClientViewPort() {
  let key = null;
  let clientViewportWidth = window.innerWidth;
  if (clientViewportWidth >= 768 && clientViewportWidth < 1280) {
    key = resolutionQuery[1];
  } else if (clientViewportWidth >= 1280) {
    key = resolutionQuery[2];
  } else {
    key = resolutionQuery[0];
  }
  return key;
}

// const objKey = checkClientViewPort();

const itemsPerPage = checkClientViewPort();

const paginationBlock = document.querySelector('.pagination-box');
const paginationList = document.querySelector('.pagination-list');

let pageNumber = 1;
const svg = ` &nbsp<svg class="icon" width="21" height="19">
<use href="${svgLink}#icon-heart-empty"></use>
</svg>`;
// create markup function
function createMarkup(arr) {
  const a = localStorage.getItem(keys.localCoctailsKey);

  // console.log(arr)
  let markup = arr.map(
    ({ strDrinkThumb, strDrink, idDrink }) => `
        <li class="gallery__card" data-id=${idDrink}>
            <a class="gallery__link">
            <img src='${strDrinkThumb}' alt='${strDrink}' class="gallery__photo" loading='lazy'/>
             <div class="gallery__info">
                <h5 class="gallery__title">${strDrink}</h5>
                <div class="button__container">
                  <button class="button-more" type="button" data-id-drink="${idDrink}">Learn more</button>
                  <button class="button-add" type="button" id=${idDrink}>${
      a?.includes(idDrink) ? 'Remove ' : 'Add to ' + svg
    }  </button>
                </div>
             </div>
            </a>
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
let currentPage = 0;

const renderCoctails = () => {
  // createMarkupPagination(response.drinks);
  let result = [];
  // console.log(itemsPerPage);
  paginationOnOf(drinks);
  currentPage = pageNumber - 1;
  const start = itemsPerPage * currentPage;
  const end = start + itemsPerPage;
  result = drinks?.length ? drinks.slice(start, end) : [];
  // console.log(result)
  clearGallery();
  const elems = createMarkup(result);
  if (elems) {
    gallery.insertAdjacentHTML('afterbegin', elems);
  } else {
    console.log('Nothing to render');
  }
};
const fetchCoctails = async (fn, query) => {
  const response = await fn(query);
  drinks = response.drinks;

  renderCoctails();
};
function paginationOnOf(response) {
  // Функція відображення блоку пагінації
  if (response?.length <= itemsPerPage) {
    // все влазить на сторінку, відключаємо відображення пагінації
    paginationBlock.classList.add('is-none');
    return;
  }

  paginationBlock.classList.remove('is-none');
  createMarkupPagination(response);
  paginationList.childNodes[0].firstElementChild.classList.add(
    'pagination-button--select'
  );
}
function createMarkupPagination(response) {
  // створює розмітку пагінації
  // розраховуемо кількість сторінок

  let lengthResponce = response?.length;
  let pageCount = Math.ceil(lengthResponce / itemsPerPage);
  let markUpString = '';

  for (let i = 1; i <= pageCount; i++) {
    if (i >= 6) break;
    const pageToRender = currentPage * itemsPerPage;
    markUpString += `<li class="pagination-item">
    <button type="button" data-page='${i}' class="pagination-button">${i}</button>
  </li>`;
  }
  // return markUpString
  paginationList.innerHTML = markUpString;

  const buttonArray = document.querySelectorAll('.pagination-item');
  buttonArray.forEach(btn => {
    btn.addEventListener('click', onClick);
  });
}
function onClick(e) {
  pageNumber = +e.target.dataset.page;
  renderCoctails();
  paginationList.childNodes[0].firstElementChild.classList.remove(
    'pagination-button--select'
  );
  paginationList.childNodes[currentPage].firstElementChild.classList.add(
    'pagination-button--select'
  );
}
//localStorage

import { getSetLS } from './localStorege/localStoregeaAddRemowe';

const onAddClick = e => {
  const ls = localStorage.getItem(keys.localCoctailsKey);
  if (e.target.className !== 'button-add') {
    return;
  }
  e.target.innerHTML = ls?.includes(Number(e.target.id))
    ? 'Add to ' + svg
    : 'Remove';

  getSetLS(Number(e.target.id));
};
gallery?.addEventListener('click', onAddClick);
//export of all functions as an object
export default {
  fetchCoctails,
  itemsPerPage,
  clearGallery,
  resolutionQuery,
  itemsPerPage,
  createMarkup,
};
