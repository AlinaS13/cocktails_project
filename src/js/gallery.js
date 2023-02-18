import renderFunc from '../js/renderFunc';
import fetchData from '../js/fetch';

// clear gallery markup
renderFunc.clearGallery();

//render random images depending on client viewport
for (let i = 0; i < renderFunc.itemsPerPage; i++)
  renderFunc.renderCocktails(fetchData.fetchRandomCocktail, 'q');
