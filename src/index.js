import fetchData from './js/fetch';

import './js/modal-cocktails';
import renderFunc from './js/renderFunc';
import gallery from './js/gallery';

import heroLetter from './js/hero';

// For testing fetch function (it's object with fetch methods on it)
// fetchData.fetchCocktailByName('margarita').then(res => console.log(res));
// fetchData.fetchCocktailByLetter('a').then(res => console.log(res));
// fetchData.fetchIngredientByName('vodka').then(res => console.log(res));
// fetchData.fetchCocktailDetailsById('11007').then(res => console.log(res));
// fetchData.fetchIngredientyId('552').then(res => console.log(res));
// fetchData.fetchRandomCocktail().then(res => console.log(res));

import renderFavoriteCoctails from './js/localStoregeCoctais';
import drinks from './js/ingredients.json';
console.log(drinks);
import { keys } from './js/localStoregeKeys';
console.log(keys.localCoctailsKey);

function setLS() {
  localStorage.setItem(keys.localCoctailsKey, JSON.stringify(drinks));
}
// setLS();
//TODO need fix for Andrey
// renderFavoriteCoctails(keys.localCoctailsKey);

import './js/modal';
