import fetchData from './fetch';
import renderFunc from './renderFunc';
import { onGalleryClick } from './modal-cocktails';
const modal = document.querySelector('.coctail-info-modal ');
const favCoctailsList = document.querySelector('.coctails__list');
const buttonMore = document.querySelector('.button-more');
const soryCoctail = document.querySelector('.coctails-sorry');

const keys = {
  localCoctailsKey: 'Favorit Coctails',
  localIngredientsKey: 'Favorite ingredients',
  localStorageTheme: 'Theme',
};
let drinksObject = [];
const getLocalStorege = () => {
  const savedCoctaisGalery = localStorage.getItem(keys.localCoctailsKey);
  return JSON.parse(savedCoctaisGalery);
};
if (getLocalStorege()) {
  drinksObject = [...getLocalStorege()];

  renderFavoriteCoctails(getLocalStorege());
}
function emptyCoctails() {
  return `<p class="sorry__title-coctails ">You haven't added any favorite cocktails yet</p>`;
}

if (!getLocalStorege() || getLocalStorege().length === 0) {
  soryCoctail.insertAdjacentHTML('afterbegin', emptyCoctails());
}

async function renderFavoriteCoctails() {
  favCoctailsList.innerHTML = '';

  const getFotoByLSID = getLocalStorege().map(num => {
    return fetchData.fetchCocktailDetailsById(num);
  });
  const response = await Promise.all(getFotoByLSID);
 
  const result = response.map(({ drinks }) => drinks).flat(1);
  favCoctailsList?.insertAdjacentHTML(
    'afterbegin',
    renderFunc.createMarkup(result)
  );
}

const onRemoveBtn = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  if (event.target.className === 'button-more') {
    onGalleryClick(event);
  }
  if (event.target.className === 'button-add') {
    drinksObject.splice(drinksObject.indexOf(Number(event.target.id)), 1);
    localStorage.setItem(keys.localCoctailsKey, JSON.stringify(drinksObject));

    renderFavoriteCoctails();
  }
};

favCoctailsList?.addEventListener('click', onRemoveBtn);
