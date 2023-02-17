import fetchData from './js/fetch';
import gallery from './js/gallery';

// For testing fetch function (it's object with fetch methods on it)
fetchData
  .fetchCocktailByName('margarita')
  .then(res => console.log('Cocktail Name', res));
// fetchData
//   .fetchCocktailByLetter('a')
//   .then(res => console.log('Cocktail letter', res));
// fetchData
//   .fetchIngredientByName('vodka')
//   .then(res => console.log('Ïng y Name', res));
// fetchData
//   .fetchCocktailDetailsById('11007')
//   .then(res => console.log('Detail by ID', res));
// fetchData
//   .fetchIngredientyId('552')
//   .then(res => console.log('Ingredient by ID', res));
// fetchData.fetchRandomCocktail().then(res => console.log('Random', res));
