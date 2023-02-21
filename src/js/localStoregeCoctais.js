import fetchData from './fetch';
import renderFunc from './renderFunc';

const favCoctailsList = document.querySelector('.coctails__list');
console.log('asfasd');
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

const onRemoveBtn = event => {
  if (event.target.className !== 'button-add') {
    return;
  }
  drinksObject.splice(drinksObject.indexOf(Number(event.target.id)), 1);
  localStorage.setItem(keys.localCoctailsKey, JSON.stringify(drinksObject));
  console.log(event.target.id);

  renderFavoriteCoctails();
};

favCoctailsList?.addEventListener('click', onRemoveBtn);
