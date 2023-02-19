import fetch from "./fetch";
import '../sass/main.scss'

const fetchCocktailDetailsById = fetch.fetchCocktailDetailsById;

const constants = {
    GALLERY_CONTAINER_SELECTOR: '.gallery', ///TODO: проверить класс контейнера коктейлей
    LEARN_MORE_BUTTON_SELECTOR: '.learn-more-button',
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

    let cocktailPromise = fetchCocktailDetailsById(11003);
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
    <h2 class="modal-cocktail-instructions">Instructions:</h2>
    <p class="modal-cocktail-instructions-text">
                ${strInstructions}
            </p>
    <img src="${strDrinkThumb}" alt="" class="modal-cocktail-picture">
    <h2 class="modal-cocktail-ingredients">INGREDIENTS</h2>
    <h3 class="modal-per-cocktail">Per cocktail</h3>
    <ul class="modal-cocktail-ingredients-list">
            ${ingredients.map(function (ingredient) {
                return  `<li>
                    <a href="">✶ ${ingredient}</a>
                </li>`
            }).join('')}
            </ul>`
}

// {/* <img src="${strDrinkThumb}" alt="" class="modal-cocktail-picture">
//             <h1 class="modal-cocktail-name">${strDrink}</h1>
//             <h2 class="modal-cocktail-ingredients">INGREDIENTS</h2>
//             <h3 class="modal-per-cocktail">Per cocktail</h3>
//             <ul class="modal-cocktail-ingredients-list">
//             ${ingredients.map(function (ingredient) {
//                 return  `<li>
//                     <a href="">✶ ${ingredient}</a>
//                 </li>`
//             }).join('')}
//             </ul>
//             <h2 class="modal-cocktail-instructions">Instructions:</h2>
//             <p class="modal-cocktail-instructions-text">
//                 ${strInstructions}
//             </p> */}





