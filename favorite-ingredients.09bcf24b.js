var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequiref932;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequiref932=n),n("cyIMT");const l=(c=n("cyIMT")).default.fetchCocktailDetailsById,s=".gallery__list",i=".button-more",a={galleryContainer:document.querySelector(s),closeModalBtn:document.querySelector("[data-coctail-info-modal-close]"),modal:document.querySelector("[data-coctail-info-modal]"),modalBackdrop:document.querySelector(".backdrop-coctail-info-modal"),modalInnerContainer:document.querySelector(".cocktail-info-modal-contents")};function o(){a.modal.classList.add("is-hidden")}a.galleryContainer.addEventListener("click",(function(e){if(!e.target.matches(i))return;let t=e.target.dataset.idDrink;l(t).then((function(e){console.log(e),a.modalInnerContainer.innerHTML=function({strDrink:e,strInstructions:t,strDrinkThumb:r,...n}){const l=[];for(let e=1;e<=15&&n["strIngredient"+e];e++)l.push(n["strMeasure"+e]+n["strIngredient"+e]);return console.log(l),`\n    <h1 class="modal-cocktail-name">${e}</h1>\n    <div class="modal-cocktail-instructions">\n        <h2 class="modal-cocktail-instructions-title">Instructions:</h2>\n        <p class="modal-cocktail-instructions-text">\n            ${t}\n        </p>\n    </div>\n    <img src="${r}" alt="" class="modal-cocktail-picture">\n    <div class="modal-cocktail-ingredients">\n        <h2 class="modal-cocktail-ingredients-title">INGREDIENTS</h2>\n        <h3 class="modal-per-cocktail">Per cocktail</h3>\n        <ul class="modal-cocktail-ingredients-list">\n            ${l.map((function(e){return`\n                <li>\n                    <a href="">✶ ${e}</a>\n                </li>`})).join("")}\n        </ul>\n    </div>`}(e.drinks[0])})),a.modal.classList.remove("is-hidden")})),a.closeModalBtn.addEventListener("click",o),a.modalBackdrop.addEventListener("click",(e=>{o()})),n("6tYD7");var u=n("6tYD7"),c=n("cyIMT");u.default.clearGallery(),u.default.fetchCoctails(c.default.fetchRandomCocktail);c=n("cyIMT"),c=n("cyIMT"),u=n("6tYD7");const d={form:document.querySelector(".search"),formBurger:document.querySelector(".burger__search"),searchByLetter:document.querySelector(".hero-search"),letterBtn:document.querySelector(".hero-btn"),overlayArrow:document.querySelector(".hero-btn--arrow"),errorPicture:document.querySelector(".sorry"),gallerySection:document.querySelector(".gallery"),titleSearchLetter:document.querySelector(".gallery__headling")};d.form.addEventListener("submit",m),d.formBurger.addEventListener("submit",m);let g="";async function m(e){e.preventDefault(),g=e.target.elements[1].value,u.default.fetchCoctails(c.default.fetchCocktailByName,g);const t=await c.default.fetchCocktailByName(g);console.log(t),null!==t?.drinks?(d.gallerySection.classList.remove("hidden"),d.errorPicture.classList.add("hidden"),d.titleSearchLetter.textContent="Searching results"):(u.default.clearGallery(),d.gallerySection.classList.add("hidden"),d.errorPicture.classList.remove("hidden"))}c=n("cyIMT"),c=n("cyIMT"),u=n("6tYD7");const h={searchByLetter:document.querySelector(".hero-search"),letterBtn:document.querySelector(".hero-btn"),overlayArrow:document.querySelector(".hero-btn--arrow"),errorPicture:document.querySelector(".sorry"),gallerySection:document.querySelector(".gallery"),titleSearchLetter:document.querySelector(".gallery__headling")};h.searchByLetter.addEventListener("click",(async function(e){I=e.target.textContent,h.letterBtn.innerHTML=`${I}<span class="hero-btn--arrow"></span>`,h.letterBtn.classList.add("active-btn"),u.default.fetchCoctails(c.default.fetchCocktailByLetter,I);null!==(await c.default.fetchCocktailByLetter(I))?.drinks?(h.gallerySection.classList.remove("hidden"),h.errorPicture.classList.add("hidden"),h.titleSearchLetter.textContent="Searching results"):(u.default.clearGallery(),h.gallerySection.classList.add("hidden"),h.errorPicture.classList.remove("hidden"))}));let I="";JSON.parse('{"drinks":[{"idDrink":"17222","strDrink":"A1","strDrinkAlternate":null,"strTags":null,"strVideo":null,"strCategory":"Cocktail","strIBA":null,"strAlcoholic":"Alcoholic","strGlass":"Cocktail glass","strInstructions":"Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.","strInstructionsES":"Vierta todos los ingredientes en una coctelera, mezcle y sirva con hielo en un vaso frío.","strInstructionsDE":"Alle Zutaten in einen Cocktailshaker geben, mischen und über Eis in ein gekühltes Glas servieren.","strInstructionsFR":null,"strInstructionsIT":"Versare tutti gli ingredienti in uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo.","strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg","strIngredient1":"Gin","strIngredient2":"Grand Marnier","strIngredient3":"Lemon Juice","strIngredient4":"Grenadine","strIngredient5":null,"strIngredient6":null,"strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"1 3/4 shot ","strMeasure2":"1 Shot ","strMeasure3":"1/4 Shot","strMeasure4":"1/8 Shot","strMeasure5":null,"strMeasure6":null,"strMeasure7":null,"strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,"strImageSource":null,"strImageAttribution":null,"strCreativeCommonsConfirmed":"No","dateModified":"2017-09-07 21:42:09"},{"idDrink":"13501","strDrink":"ABC","strDrinkAlternate":null,"strTags":null,"strVideo":null,"strCategory":"Shot","strIBA":null,"strAlcoholic":"Alcoholic","strGlass":"Shot glass","strInstructions":"Layered in a shot glass.","strInstructionsES":"Coloque todos los ingredientes en un vaso de chupito.","strInstructionsDE":"Schichtaufbau in einem Schnapsglas.","strInstructionsFR":null,"strInstructionsIT":"Versa in ordine di lettera i vari ingredienti. 1/3 del bicchiere va riempito con l\'Amaretto, 1/3 di Baileys e il restante di Cognac.","strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg","strIngredient1":"Amaretto","strIngredient2":"Baileys irish cream","strIngredient3":"Cognac","strIngredient4":null,"strIngredient5":null,"strIngredient6":null,"strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"1/3 ","strMeasure2":"1/3 ","strMeasure3":"1/3 ","strMeasure4":null,"strMeasure5":null,"strMeasure6":null,"strMeasure7":null,"strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,"strImageSource":null,"strImageAttribution":null,"strCreativeCommonsConfirmed":"No","dateModified":"2016-08-31 19:32:08"},{"idDrink":"17225","strDrink":"Ace","strDrinkAlternate":null,"strTags":null,"strVideo":null,"strCategory":"Cocktail","strIBA":null,"strAlcoholic":"Alcoholic","strGlass":"Martini Glass","strInstructions":"Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.","strInstructionsES":"Agite todos los ingredientes en una coctelera con hielo y entonces cuélelos sobre un vaso enfriado.","strInstructionsDE":"Alle Zutaten in einem Cocktailshaker mit Eis schütteln und dann in einem kalten Glas abseihen.","strInstructionsFR":null,"strInstructionsIT":"Shakerare tutti gli ingredienti in uno shaker e ghiaccio, quindi filtrare in un bicchiere freddo.","strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg","strIngredient1":"Gin","strIngredient2":"Grenadine","strIngredient3":"Heavy cream","strIngredient4":"Milk","strIngredient5":"Egg White","strIngredient6":null,"strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"2 shots ","strMeasure2":"1/2 shot ","strMeasure3":"1/2 shot ","strMeasure4":"1/2 shot","strMeasure5":"1/2 Fresh","strMeasure6":null,"strMeasure7":null,"strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,"strImageSource":null,"strImageAttribution":null,"strCreativeCommonsConfirmed":"No","dateModified":"2017-09-07 22:05:06"},{"idDrink":"14610","strDrink":"ACID","strDrinkAlternate":null,"strTags":null,"strVideo":null,"strCategory":"Shot","strIBA":null,"strAlcoholic":"Alcoholic","strGlass":"Shot glass","strInstructions":"Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.","strInstructionsES":"Vierta primero el Bacardi 151, seguido del Wild Turkey 101 y sirva con Coca-Cola o Dr Pepper.","strInstructionsDE":"Gering den 151 gefolgt von der 101, die mit einer Cola oder Dr. Pepper Chaser serviert wird.","strInstructionsFR":null,"strInstructionsIT":"Versa prima il Bacardi 151 seguito dal 101, servito con una Coca-Cola.","strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg","strIngredient1":"151 proof rum","strIngredient2":"Wild Turkey","strIngredient3":null,"strIngredient4":null,"strIngredient5":null,"strIngredient6":null,"strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"1 oz Bacardi ","strMeasure2":"1 oz ","strMeasure3":null,"strMeasure4":null,"strMeasure5":null,"strMeasure6":null,"strMeasure7":null,"strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,"strImageSource":null,"strImageAttribution":null,"strCreativeCommonsConfirmed":"No","dateModified":"2016-11-15 11:28:37"}]}');const k={localCoctailsKey:"Favorit Coctails",localIngredientsKey:"Favorite ingredients"};(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const M=document.querySelector(".switcher"),y=document.querySelector(".switcher__mob");function f(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}M.addEventListener("change",f,!1),y.addEventListener("change",f,!1),"dark"===localStorage.getItem("theme")?(document.documentElement.setAttribute("data-theme","dark"),M.checked=!0):(document.documentElement.setAttribute("data-theme","light"),M.checked=!1),console.log(k.localCoctailsKey);
//# sourceMappingURL=favorite-ingredients.09bcf24b.js.map
