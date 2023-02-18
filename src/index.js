import fetchData from './js/fetch';

// For testing fetch function (it's object with fetch methods on it)
fetchData.fetchCocktailByName('margarita').then(res => console.log(res));
fetchData.fetchCocktailByLetter('a').then(res => console.log(res));
fetchData.fetchIngredientByName('vodka').then(res => console.log(res));
fetchData.fetchCocktailDetailsById('11007').then(res => console.log(res));
fetchData.fetchIngredientyId('552').then(res => console.log(res));
fetchData.fetchRandomCocktail().then(res => console.log(res));


import './js/modal';