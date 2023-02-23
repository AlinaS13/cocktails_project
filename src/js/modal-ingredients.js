import fetch from './fetch';
import './modal-cocktails';
import { setIdIngridient } from './addRemoveIngredients';
import { keys } from './localStoregeKeys';

const test = document.querySelector('.test');

const refs = {
  modal: document.querySelector('.coctail-igredient-modal'),
  modalCoctailInfoContents: document.querySelector(
    '.cocktail-info-modal-contents'
  ),
  modalIngredientsContents: document.querySelector(
    '.cocktail-ingredients-modal-contents'
  ),
  closeModalBtn: document.querySelector('[data-coctail-igredient-modal-close]'),
  modalBackdrop: document.querySelector('.backdrop-coctail-igredient-modal'),
};
refs.closeModalBtn.addEventListener('click', closeModal);
refs.modalBackdrop.addEventListener('click', e => {
  closeModal();
});
function closeModal() {
  refs.modal.classList.add('is-hidden');
}

refs.modalCoctailInfoContents.addEventListener('click', function (e) {
  if (!e.target.matches('.modal-cocktail-ingredients-item')) {
    return;
  }

  e.preventDefault();
  let ingredientName = e.target.dataset.ingredientName;
  if (!ingredientName) return;
  openIngredientModal(ingredientName);
});

export async function openIngredientModal(ingredientName) {
  console.log(ingredientName);
  let ingredients = (await fetch.fetchIngredientByName(ingredientName))
    .ingredients;

  if (!ingredients.length) return;

  let ingredient = ingredients[0];
  let markup = createIngredientContentsMarkup(ingredient);
  refs.modalIngredientsContents.innerHTML = markup;

  refs.modal.classList.remove('is-hidden');
}

export function createIngredientContentsMarkup({
  strIngredient,
  strAlcohol,
  strType,
  strDescription,
  idIngredient,
}) {
  setTimeout(() => {
    const addIngregientBtn = document.querySelector(
      '.button-more__ingridients'
    );
    addIngregientBtn?.addEventListener('click', e => {
      setIdIngridient(Number(e.target.id));
      const ls = localStorage.getItem(keys.localIngredientsKey);
      e.target.textContent = ls?.includes(idIngredient)
        ? 'Remove'
        : 'Add to favorit';
    });
    console.log(addIngregientBtn);
  }, 100);
  const ls = localStorage.getItem(keys.localIngredientsKey);
  return `
  <div data-ingredient=${idIngredient}></div>
  <h1 class="modal-cocktail-ingredients-name">${strIngredient}</h1>
  <h2 class="modal-cocktail-ingredients-title">${strType}</h2>
  <div class="modal-cocktail-ingredients-line"></div>
  <p class="modal-cocktail-ingredients-text">${
    strDescription === null ? '' : strDescription
  }</p>
  <ul class="modal-cocktail-ingredients-description-list">
  ${strType ? '<li>Type:&nbsp ' + strType + '</li>' : ''}
  ${strAlcohol ? '<li>Alcohol by volume:&nbsp ' + strAlcohol + '</li>' : ''}
            <li></li>
            </ul>
            <button type="button" class="button-more modal-add button-more__ingridients" id=${idIngredient}>
            ${ls?.includes(idIngredient) ? 'Remove' : 'Add to favorit'}
          </button>
            `;
}
