import fetchData from './fetch';
import renderFunc from './renderFunc';
import { onGalleryClick } from './modal-cocktails';
import { keys } from './localStoregeKeys';
import { getSetLS } from './localStoregeaAddRemowe';

const modal = document.querySelector('.coctail-info-modal ');

const favCoctailsList = document.querySelector('.coctails__list');
const buttonMore = document.querySelector('.button-more');
const soryCoctail = document.querySelector('.coctails-sorry');

let drinksObject = [];
const getLocalStorege = () => {
  const savedCoctaisGalery = localStorage.getItem('Favorit Coctails');
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
  console.log(response);
  const result = response.map(({ drinks }) => drinks).flat(1);
  favCoctailsList?.insertAdjacentHTML(
    'afterbegin',
    renderFunc.createMarkup(result)
  );
}

const onBtnClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  if (event.target.className === 'button-more') {
    onGalleryClick(event);
  }
  if (event.target.className === 'button-add') {
    const a = localStorage.getItem(keys.localCoctailsKey);
    if (a.includes(Number(event.target.id))) {
      drinksObject.splice(drinksObject.indexOf(Number(event.target.id)), 1);
      localStorage.setItem('Favorit Coctails', JSON.stringify(drinksObject));
      console.log(event.target.id);

      renderFavoriteCoctails();
    } else {
      getSetLS(Number(event.target.id));
      renderFavoriteCoctails();
    }
  }
};

favCoctailsList?.addEventListener('click', onBtnClick);
