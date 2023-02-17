const favCoctailsList = document.querySelector('.coctails__list');
import drinks from '../js/ingredients.json';

function onRemoveClick(e) {
  console.log(e.target.id);
}
export default function renderFavoriteCoctails(localCoctails) {
  const savedCoctaisGalery = localStorage.getItem(localCoctails);
  const parsedCoctails = JSON.parse(savedCoctaisGalery);

  if (parsedCoctails) {
    const { drinks } = parsedCoctails;
    const content = drinks.map(({ strDrink, strDrinkThumb, idDrink }) => {
      return `<li class="coctails-card">
    <img class="coctails__image" src="${strDrinkThumb}" alt="" />
    <div class="coctails__desc">
    <h3 class="coctails-card__title">${strDrink}</h3>
    <div class="buttons">
    <button type="button" class="button__more">Learn more</button>
    <button type="button" class="button__remove" id=${idDrink}>Remove</button>
    </div>
    </div>
    </li>`;
    });
    favCoctailsList.insertAdjacentHTML('beforeend', content.join(''));
  }
}
const removeBtn = document.querySelectorAll('.button__remove');

// removeBtn.addEventListener('click', onRemoveClick);

// const newDrink = { ...drinks };
// newDrink.drinks.push('ads');
// console.log('newDrink :', newDrink.drinks);
