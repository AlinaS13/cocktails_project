import renderFunc from '../js/renderFunc';
import fetchData from '../js/fetch';

// clear gallery markup
renderFunc.clearGallery();

//render random images depending on client viewport

// renderFunc.fetchCoctails(fetchData.fetchCocktailByLetter, 'a')
// fetchData.fetchCocktailByName('margarita').then((a) => console.log(a))

// function fetchCoctailsApi() {
//   renderFunc.fetchCoctails(fetchData.fetchCocktailByLetter, 'a');
// }

    renderFunc.fetchCoctails(fetchData.fetchRandomCocktail);

