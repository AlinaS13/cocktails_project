import fetchData from '../js/fetch';

import fetchCocktailByName from '../js/fetch';

import renderCocktails from '../js/renderFunc';

// ============ Elements ===========
const refsForm = {
  form: document.querySelector(".search"),
  searchByLetter: document.querySelector('.hero-search'),
  letterBtn: document.querySelector('.hero-btn'),
  overlayArrow: document.querySelector('.hero-btn--arrow'),
  errorPicture: document.querySelector('.sorry'),
  gallerySection: document.querySelector('.gallery'),
  titleSearchLetter: document.querySelector('.gallery__headling'),
};
// console.log(refsForm.form)
refsForm.form.addEventListener('submit', onSubmit);
// ============ Choise letter ==========
let searchName = '';

async function onSubmit(e) {
  e.preventDefault()

  searchName = e.target.elements[1].value;
  // console.log(searchName)
  renderCocktails.fetchCoctails(fetchData.fetchCocktailByName, searchName);
  const resData = await fetchData.fetchCocktailByName(searchName);
console.log(resData)
  if (resData?.drinks !== null) {
    refsForm.gallerySection.classList.remove('hidden');
    refsForm.errorPicture.classList.add('hidden');
    refsForm.titleSearchLetter.textContent = 'Searching results';
  } else {
    onError();
  }
}

// ========= Sorry Section =========
function onError() {
  renderCocktails.clearGallery();
  refsForm.gallerySection.classList.add('hidden');
  refsForm.errorPicture.classList.remove('hidden');
}


// !           burger search
// ============ Elements ===========
const refsFormMob = {
  form: document.querySelector(".burger__search"),
  searchByLetter: document.querySelector('.hero-search'),
  letterBtn: document.querySelector('.hero-btn'),
  overlayArrow: document.querySelector('.hero-btn--arrow'),
  errorPicture: document.querySelector('.sorry'),
  gallerySection: document.querySelector('.gallery'),
  titleSearchLetter: document.querySelector('.gallery__headling'),
};
// console.log(refsForm.form)
refsFormMob.form.addEventListener('submit', onSubmit);
// ============ Choise letter ==========
let searchNameMob = '';

async function onSubmit(e) {
  e.preventDefault()

  searchNameMob = e.target.elements[1].value;
  // console.log(searchNameMob)
  renderCocktails.fetchCoctails(fetchData.fetchCocktailByName, searchNameMob);
  const resData = await fetchData.fetchCocktailByName(searchNameMob);
console.log(resData)
  if (resData?.drinks !== null) {
    refsFormMob.gallerySection.classList.remove('hidden');
    refsFormMob.errorPicture.classList.add('hidden');
    refsFormMob.titleSearchLetter.textContent = 'Searching results';
  } else {
    onErrorMob();
  }
}

// ========= Sorry Section =========
function onErrorMob() {
  renderCocktails.clearGallery();
  refsFormMob.gallerySection.classList.add('hidden');
  refsFormMob.errorPicture.classList.remove('hidden');
}
