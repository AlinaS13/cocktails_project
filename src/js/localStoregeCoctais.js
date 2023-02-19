import fetchData from './fetch';
const favCoctailsList = document.querySelector('.coctails__list');
const addBtn = document.querySelector('.addBtn');
const keys = {
  localCoctailsKey: 'Favorit Coctails',
  localIngredientsKey: 'Favorite ingredients',
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

function createMarkup(arr) {
  let markup = arr.map(
    ({ strDrinkThumb, strDrink }) => `
        <li class="gallery__card">
            <img src='${strDrinkThumb}' alt='${strDrink}' class="gallery__photo" loading='lazy'/>
             <div class="gallery__info">
                <h5 class="gallery__title">${strDrink}</h5>
                <div class="button__container">
                  <button class="button-more">Learn more</button>
                  <button class="button-add">Remove <span class="button-add__icon")">
                  </span></button>
                </div>
             </div>
            </li>
      `
  );
  return markup.join('');
}

async function renderFavoriteCoctails() {
  const getFotoByLSID = getLocalStorege().map(num => {
    return fetchData.fetchCocktailDetailsById(num);
  });
  const response = await Promise.all(getFotoByLSID);
  const result = response.map(({ drinks }) => drinks).flat(1);
  favCoctailsList.insertAdjacentHTML('afterbegin', createMarkup(result));
}
// favCoctailsList.insertAdjacentHTML('beforeend', renderContent());
function setLS() {
  localStorage.setItem(keys.localCoctailsKey, JSON.stringify(drinksObject));
}

const onAddBtn = event => {
  const num = Number(event.target.id);
  console.log(num);
  if (drinksObject.includes(num)) {
    return;
  }
  fetchData.fetchCocktailDetailsById(num).then(data => console.log(data));
  drinksObject.push(num);

  favCoctailsList.innerHTML = '';
  setLS();
  renderFavoriteCoctails(getLocalStorege());
};
const onRemoveBtn = event => {
  console.log();
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  drinksObject.splice(drinksObject.indexOf(Number(event.target.id)), 1);

  setLS();
  favCoctailsList.innerHTML = '';
  renderFavoriteCoctails();
};

favCoctailsList.addEventListener('click', onRemoveBtn);

addBtn.addEventListener('click', onAddBtn);
