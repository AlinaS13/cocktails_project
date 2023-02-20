import fetch from "./fetch";

const fetchCocktailDetailsById = fetch.fetchCocktailDetailsById;

const constants = {
    GALLERY_CONTAINER_SELECTOR: '.gallery__list', ///TODO: проверить класс контейнера коктейлей
    LEARN_MORE_BUTTON_SELECTOR: '.button-more',
};


const refs = {
    galleryContainer: document.querySelector(constants.GALLERY_CONTAINER_SELECTOR),
    closeModalBtn: document.querySelector("[data-coctail-info-modal-close]"),
    modal: document.querySelector("[data-coctail-info-modal]"),
    modalBackdrop: document.querySelector(".backdrop-coctail-info-modal"),
    modalInnerContainer: document.querySelector(".cocktail-info-modal-contents")
};

refs.galleryContainer.addEventListener('click', onGalleryClick);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.modalBackdrop.addEventListener('click', (e) => {
    closeModal();
});

function closeModal() {
    refs.modal.classList.add('is-hidden');
}
function onGalleryClick(e) {
    if (!e.target.matches(constants.LEARN_MORE_BUTTON_SELECTOR)) { 
        return;
    }

    let drinkId = e.target.dataset.idDrink;

    let cocktailPromise = fetchCocktailDetailsById(drinkId);
    cocktailPromise.then(function (cocktailInfo) {
        console.log(cocktailInfo)
        refs.modalInnerContainer.innerHTML = createCoctailInfoMarkup(cocktailInfo.drinks[0]);
    })

    refs.modal.classList.remove('is-hidden');
}

function createCoctailInfoMarkup({ strDrink, strInstructions, strDrinkThumb, ...rest }) {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) { 
        if (rest[`strIngredient` + i])
            ingredients.push(rest[`strMeasure` + i] + rest[`strIngredient` + i]);
        else break;
    }
    
    console.log(ingredients)
    return `
    <h1 class="modal-cocktail-name">${strDrink}</h1>
    <div class="modal-cocktail-instructions">
        <h2 class="modal-cocktail-instructions-title">Instructions:</h2>
        <p class="modal-cocktail-instructions-text">
            ${strInstructions}
        </p>
    </div>
    <img src="${strDrinkThumb}" alt="" class="modal-cocktail-picture">
    <div class="modal-cocktail-ingredients">
        <h2 class="modal-cocktail-ingredients-title">INGREDIENTS</h2>
        <h3 class="modal-per-cocktail">Per cocktail</h3>
        <ul class="modal-cocktail-ingredients-list">
            ${ingredients.map(function (ingredient) {
                return  `
                <li>
                    <a href="">✶ ${ingredient}</a>
                </li>`
            }).join('')}
        </ul>
    </div>`
}







