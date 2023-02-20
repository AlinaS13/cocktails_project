import fetchData from './fetch';
import renderFunc from './renderFunc';
//
// console.log('sasdfdasf');
// fetchData.fetchCocktailDetailsById(17225).then(res => console.log(res));
//

const favCoctailsList = document.querySelector('.coctails__list');
// const gallary = document.querySelector('.gallary');

const addBtn = document.querySelector('.add-btn');
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
console.log(drinksObject);

async function renderFavoriteCoctails() {
  const getFotoByLSID = getLocalStorege().map(num => {
    return fetchData.fetchCocktailDetailsById(num);
  });
  const response = await Promise.all(getFotoByLSID);
  console.log(response);
  const result = response.map(({ drinks }) => drinks).flat(1);
  favCoctailsList.insertAdjacentHTML(
    'afterbegin',
    renderFunc.createMarkup(result)
  );
}
// favCoctailsList.insertAdjacentHTML('beforeend', renderContent());

function setLS() {
  localStorage.setItem(keys.localCoctailsKey, JSON.stringify(drinksObject));
}

const onAddBtn = event => {
  console.log(event.target.id);
  const num = Number(event.target.id);

  if (drinksObject.includes(num)) {
    return;
  }
  fetchData
    .fetchCocktailDetailsById(num)
    .then(data => console.log('дата на кнопке', data));
  drinksObject.push(num);

  favCoctailsList.innerHTML = '';
  setLS();
  renderFavoriteCoctails(getLocalStorege());
};
const onRemoveBtn = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(event.target.id);

  drinksObject.splice(drinksObject.indexOf(Number(event.target.id)), 1);

  setLS();
  favCoctailsList.innerHTML = '';
  renderFavoriteCoctails();
};

favCoctailsList.addEventListener('click', onRemoveBtn);
addBtn.addEventListener('click', onAddBtn);
