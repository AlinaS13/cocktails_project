import fetchData from '../js/fetch';

import fetchCocktailByLetter from '../js/fetch';

import renderCocktails from '../js/renderFunc';

// ============ Elements ===========
const refsHero = {
  searchByLetter: document.querySelector('.hero-search'),
  letterBtn: document.querySelector('.hero-btn'),
  overlayArrow: document.querySelector('.hero-btn--arrow'),
  errorPicture: document.querySelector('.sorry'),
  gallerySection: document.querySelector('.gallery'),
  titleSearchLetter: document.querySelector('.gallery__headling'),
};

refsHero.searchByLetter.addEventListener('click', onSearch);

// ============ Choise letter ==========
export let heroLetter = '';

async function onSearch(e) {
  heroLetter = e.target.textContent;
  refsHero.letterBtn.innerHTML = `${heroLetter}<span class="hero-btn--arrow"></span>`;
  refsHero.letterBtn.classList.add('active-btn');

  renderCocktails.renderCocktails(fetchData.fetchCocktailByLetter, heroLetter);
  const resData = await fetchData.fetchCocktailByLetter(heroLetter);

  if (resData?.drinks !== null) {
    refsHero.gallerySection.classList.remove('hidden');
    refsHero.errorPicture.classList.add('hidden');
    refsHero.titleSearchLetter.textContent = 'Searching results';
  } else {
    onError();
  }
}

// ========= Sorry Section =========
function onError() {
  renderCocktails.clearGallery();
  refsHero.gallerySection.classList.add('hidden');
  refsHero.errorPicture.classList.remove('hidden');
}
