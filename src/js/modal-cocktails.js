import fetch from './fetch';
import { getSetLS } from './localStoregeaAddRemowe';
import { keys } from './localStoregeKeys';
const fetchCocktailDetailsById = fetch.fetchCocktailDetailsById;
//
//

// const constants = {
//   GALLERY_CONTAINER_SELECTOR: '.gallery__list', ///TODO: проверить класс контейнера коктейлей
//   LEARN_MORE_BUTTON_SELECTOR: '.button-more',
// };
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
      const ls = localStorage.getItem(keys.localCoctailsKey);
      e.target.textContent = ls?.includes(drinkId)
        ? 'Add to favorit'
        : 'Remove';

      getSetLS(Number(e.target.id));
    });
    const ingredientModal = document.querySelectorAll('.JSIngridients');
    ingredientModal.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        refs.ingridienrsModal.classList.remove('.is-hidden');
        console.log(refs.ingridienrsModal);

        console.log(e.target.textContent);
      });
    });
  });

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
      ingredients.push(rest[`strMeasure` + i] + rest[`strIngredient` + i]);
    } else break;
  }

  //   console.log(ingredients);
  const localStorageFM = localStorage.getItem(keys.localCoctailsKey);
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
              .map(function (ingredient) {
                return `
                <li>
                    <a href="" class = "JSIngridients">✶ ${ingredient}</a>
                </li>`;
              })
              .join('')}
        </ul>
        </div>
        <button type="button" class="button-more modal-add" id=${idDrink} >${
    localStorageFM?.includes(idDrink) ? 'Remove' : 'Add to favorit'
  }</button>`;
}
console.log('afsdf');
