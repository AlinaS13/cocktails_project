import fetchData from './fetch';
import { openIngredientModal } from './modal-ingredients';
// import { onGalleryClick } from './modal-cocktails';
import { keys } from './localStoregeKeys';
// const modal = document.querySelector('.coctail-info-modal ');

const favoritIngredientsGallery = document.querySelector('.ingredients-list');
//
console.log(favoritIngredientsGallery);
const soryIngredients = document.querySelector('.ingredients-sorry');
//todo add classlist

let ingredientsObj = [];
const getLocalStorege = () => {
  const savedIngredientsGalery = localStorage.getItem(keys.localIngredientsKey);
  return JSON.parse(savedIngredientsGalery);
};
console.log(getLocalStorege());
if (getLocalStorege()) {
  ingredientsObj = [...getLocalStorege()];

  renderFavoriteIngredients(getLocalStorege());
}
function emptyIngredients() {
  return `<p class="sorry__title-coctails ">You haven't added any favorite ingridients yet</p>`;
}

if (!getLocalStorege() || getLocalStorege().length === 0) {
  soryIngredients.insertAdjacentHTML('afterbegin', emptyIngredients());
}

//
function createGalleryIngredients(arr) {
  console.log(arr);
  let markup = arr.map(
    ({ strIngredient, strAlcohol, strType, strDescription, idIngredient }) => {
      return `<li class="ingredient__card" data-id=${idIngredient}>
      <h3 class="ingredient-card__title">${strIngredient}</h3>
      <p class="ingredient-card__description">${
        strType === null ? strIngredient : strType
      }</p>
      <div class="button__container">
        <button type="button" class="button-more" id=${strIngredient}>Learn more</button>
        <button type="button" class="button-remove" id=${idIngredient} >Remove</button>
      </div>
      </li>`;
    }
  );
  return markup.join('');
  //
}
async function renderFavoriteIngredients() {
  favoritIngredientsGallery.innerHTML = '';

  const getFotoByLSID = getLocalStorege().map(num => {
    return fetchData.fetchIngredientyId(num);
  });

  const response = await Promise.all(getFotoByLSID);

  const result = response.map(({ ingredients }) => ingredients).flat(1);

  favoritIngredientsGallery?.insertAdjacentHTML(
    'afterbegin',
    createGalleryIngredients(result)
  );
}

const onBtnClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  if (event.target.className === 'button-more') {
    openIngredientModal(event.target.id);
  }
  if (event.target.className === 'button-remove') {
    ingredientsObj.splice(ingredientsObj.indexOf(Number(event.target.id)), 1);
    localStorage.setItem(
      keys.localIngredientsKey,
      JSON.stringify(ingredientsObj)
    );
    console.log(event.target.id);

    renderFavoriteIngredients();
  }
};

favoritIngredientsGallery?.addEventListener('click', onBtnClick);
