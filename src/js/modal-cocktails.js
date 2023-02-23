import fetch from './fetch';
import { getSetLS } from './localStorege/localStoregeaAddRemowe';
import { keys } from './localStorege/localStoregeKeys';
const fetchCocktailDetailsById = fetch.fetchCocktailDetailsById;
import { createIngredientContentsMarkup } from './modal-ingredients';
const svgLink = require('../img/icons.svg');

const svg = ` &nbsp<svg class="icon" width="21" height="19">
<use href="${svgLink}#icon-heart-empty"></use>
</svg>`;
//

const refs = {
  ingridienrsModal: document.querySelector('.coctail-igredient-modal'),
  galleryContainer: document.querySelector('.gallery__list'),
  coctailsContainer: document.querySelector('.coctails__list'),
  closeModalBtn: document.querySelector('[data-coctail-info-modal-close]'),
  modal: document.querySelector('[data-coctail-info-modal]'),
  modalBackdrop: document.querySelector('.backdrop-coctail-info-modal'),
  modalInnerContainer: document.querySelector('.cocktail-info-modal-contents'),
};

refs.galleryContainer?.addEventListener('click', onGalleryClick);
refs.closeModalBtn?.addEventListener('click', closeModal);
refs.modalBackdrop?.addEventListener('click', e => {
  closeModal();
});

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}
export function onGalleryClick(e) {
  if (!e.target.matches('.button-more')) {
    return;
  }

  let drinkId = e.target.dataset.idDrink;

  let cocktailPromise = fetchCocktailDetailsById(drinkId);
  cocktailPromise.then(function (cocktailInfo) {
    // console.log(cocktailInfo);
    refs.modalInnerContainer.innerHTML = createCoctailInfoMarkup(
      cocktailInfo.drinks[0]
    );

    //add to local storege
    const addTofav = document.querySelector('.modal-add');
    addTofav.addEventListener('click', e => {
      const ls = localStorage.getItem('Favorit Coctails');
      e.target.textContent = ls?.includes(drinkId)
        ? 'Add to favorit'
        : 'Remove';

      getSetLS(Number(e.target.id));

      document.querySelector(`[data-id='${e.target.id}']`);
      document.getElementById(`${e.target.id}`).innerHTML = `${
        ls.includes(drinkId) ? 'Add to ' + svg : 'Remove'
      }`;
    });
    const ingredientModal = document.querySelectorAll('.JSIngridients');
    ingredientModal.forEach(item => {
      item.addEventListener('click', async e => {
        e.preventDefault();

        // this is the name of ingridient
        const data = e.target.dataset.name;
        // here we call fetch (www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka) by name above
        const resp = await fetch.fetchIngredientByName(data);
        const finalResp = resp.ingredients[0];
        const keys = Object.keys(finalResp);
        for (const key of keys) {
          if (finalResp[key] === null || finalResp[key] === undefined) {
            finalResp[key] = '';
          }
        }
        const markupFF = createIngredientContentsMarkup(finalResp);
        refs.ingridienrsModal.querySelector(
          '.cocktail-ingredients-modal-contents'
        ).innerHTML = markupFF;
        // parse response data and put/replace! them to modal (refs.ingridienrsModal)
        // then show the modal
        refs.ingridienrsModal.classList.remove('is-hidden');

        // console.log(refs.ingridienrsModal);
        // console.log(e.target.textContent);
      });
    });
  });
  document.body.classList.add('modal-open');
  refs.modal.classList.remove('is-hidden');
}

function createCoctailInfoMarkup({
  strDrink,
  strInstructions,
  strDrinkThumb,
  idDrink,
  ...rest
}) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (rest[`strIngredient` + i]) {
      ingredients.push({
        measure: rest[`strMeasure` + i],
        name: rest[`strIngredient` + i],
      });
    } else break;
  }

  //   console.log(ingredients);
  const localStorageFM = localStorage.getItem('Favorit Coctails');
  return `
    <h1 class="modal-cocktail-name">${strDrink}</h1>
    <div class="modal-cocktail-instructions">
        <h2 class="modal-cocktail-instructions-title">Instructions:</h2>
        <p class="modal-cocktail-instructions-text">
            ${strInstructions}
        </p>
    </div>
    <img src="${strDrinkThumb}" alt="" class="modal-cocktail-picture">
    <div class="modal-cocktail-ingredients">
        <h2 class="modal-cocktail-ingredients-title">INGREDIENTS</h2>
        <h3 class="modal-per-cocktail">Per cocktail</h3>
        <ul class="modal-cocktail-ingredients-list">
            ${ingredients
              .map(function ({ measure, name }) {
                return `
                <li>
                    <a href="" class = "JSIngridients" data-name="${name}" role="show-ing-modal">✶ ${measure} ${name}</a>
                </li>`;
              })
              .join('')}
        </ul>
        </div>
        <div class ="button-wrap"><button type="button" class="button-more modal-add" id=${idDrink} >${
    localStorageFM?.includes(idDrink) ? 'Remove' : 'Add to favorit'
  }</button></div>`;
}
