!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequiref932;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequiref932=o),o.register("cZ2Ha",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}})),o("5g02X");var a=o("bpxeT"),c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){if(null==e)return{};var n,r,o=i.default(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o};var l,i=(l=o("cZ2Ha"))&&l.__esModule?l:{default:l};var d=o("2TvXO"),s=o("5g02X"),u=o("2Up7T"),m=o("h8ehG"),f=(a=o("bpxeT"),d=o("2TvXO"),s=o("5g02X"),document.querySelector(".test"),{modal:document.querySelector(".coctail-igredient-modal"),modalCoctailInfoContents:document.querySelector(".cocktail-info-modal-contents"),modalIngredientsContents:document.querySelector(".cocktail-ingredients-modal-contents"),closeModalBtn:document.querySelector("[data-coctail-igredient-modal-close]"),modalBackdrop:document.querySelector(".backdrop-coctail-igredient-modal")});function h(){f.modal.classList.add("is-hidden")}function g(){return(g=e(a)(e(d).mark((function t(n){var r,o,a;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.default.fetchIngredientByName(n);case 2:if((r=e.sent.ingredients).length){e.next=5;break}return e.abrupt("return");case 5:o=r[0],a=v(o),f.modalIngredientsContents.innerHTML=a,f.modal.classList.remove("is-hidden");case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function v(e){var t=e.strIngredient,n=e.strAlcohol,r=e.strType,o=e.strDescription;return'\n    <h1 class="modal-cocktail-ingredients-name">'.concat(t,'</h1>\n            <h2 class="modal-cocktail-ingredients-title">').concat(r,'</h2>\n            <div class="modal-cocktail-ingredients-line"></div>\n            <p class="modal-cocktail-ingredients-text">').concat(o,'</p>\n            <ul class="modal-cocktail-ingredients-description-list">\n            ').concat(r?"<li>Type:&nbsp "+r+"</li>":"","\n            ").concat(n?"<li>Alcohol by volume:&nbsp "+n+"</li>":"","\n            <li></li>\n            </ul>\n            ")}f.closeModalBtn.addEventListener("click",h),f.modalBackdrop.addEventListener("click",(function(e){h()})),console.log(f.modal),f.modalCoctailInfoContents.addEventListener("click",(function(e){if(e.target.matches(".modal-cocktail-ingredients-item")){e.preventDefault();var t=e.target.dataset.ingredientName;t&&function(e){g.apply(this,arguments)}(t)}}));var y=s.default.fetchCocktailDetailsById,p={ingridienrsModal:document.querySelector(".coctail-igredient-modal"),galleryContainer:document.querySelector(".gallery__list"),closeModalBtn:document.querySelector("[data-coctail-info-modal-close]"),modal:document.querySelector("[data-coctail-info-modal]"),modalBackdrop:document.querySelector(".backdrop-coctail-info-modal"),modalInnerContainer:document.querySelector(".cocktail-info-modal-contents")};function k(){p.modal.classList.add("is-hidden")}p.galleryContainer.addEventListener("click",(function(t){if(!t.target.matches(".button-more"))return;var n=t.target.dataset.idDrink;y(n).then((function(t){p.modalInnerContainer.innerHTML=function(t){for(var n=t.strDrink,r=t.strInstructions,o=t.strDrinkThumb,a=t.idDrink,l=e(c)(t,["strDrink","strInstructions","strDrinkThumb","idDrink"]),i=[],d=1;d<=15&&l["strIngredient"+d];d++)i.push({measure:l["strMeasure"+d],name:l["strIngredient"+d]});var s=localStorage.getItem(m.keys.localCoctailsKey);return'\n    <h1 class="modal-cocktail-name">'.concat(n,'</h1>\n    <div class="modal-cocktail-instructions">\n        <h2 class="modal-cocktail-instructions-title">Instructions:</h2>\n        <p class="modal-cocktail-instructions-text">\n            ').concat(r,'\n        </p>\n    </div>\n    <img src="').concat(o,'" alt="" class="modal-cocktail-picture">\n    <div class="modal-cocktail-ingredients">\n        <h2 class="modal-cocktail-ingredients-title">INGREDIENTS</h2>\n        <h3 class="modal-per-cocktail">Per cocktail</h3>\n        <ul class="modal-cocktail-ingredients-list">\n            ').concat(i.map((function(e){var t=e.measure,n=e.name;return'\n                <li>\n                    <a href="" class = "JSIngridients" data-name="'.concat(n,'" role="show-ing-modal">✶ ').concat(t," ").concat(n,"</a>\n                </li>")})).join(""),'\n        </ul>\n        </div>\n        <div class ="button-wrap"><button type="button" class="button-more modal-add" id=').concat(a," >").concat((null==s?void 0:s.includes(a))?"Remove":"Add to favorit","</button></div>")}(t.drinks[0]),document.querySelector(".modal-add").addEventListener("click",(function(e){var t=localStorage.getItem(m.keys.localCoctailsKey);e.target.textContent=(null==t?void 0:t.includes(n))?"Add to favorit":"Remove",(0,u.getSetLS)(Number(e.target.id))})),document.querySelectorAll(".JSIngridients").forEach((function(t){var n;t.addEventListener("click",(n=e(a)(e(d).mark((function t(n){var r,o,a,c,l,i,u,m,f,h,g;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target.dataset.name,console.log(r),e.next=5,s.default.fetchIngredientByName(r);case 5:for(o=e.sent,a=o.ingredients[0],c=Object.keys(a),l=!0,i=!1,u=void 0,e.prev=9,m=c[Symbol.iterator]();!(l=(f=m.next()).done);l=!0)h=f.value,null!==a[h]&&void 0!==a[h]||(a[h]="");e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),i=!0,u=e.t0;case 17:e.prev=17,e.prev=18,l||null==m.return||m.return();case 20:if(e.prev=20,!i){e.next=23;break}throw u;case 23:return e.finish(20);case 24:return e.finish(17);case 25:console.log(a),g=v(a),console.log(g),p.ingridienrsModal.querySelector(".cocktail-ingredients-modal-contents").innerHTML=g,p.ingridienrsModal.classList.remove("is-hidden");case 30:case"end":return e.stop()}}),t,null,[[9,13,17,25],[18,,20,24]])}))),function(e){return n.apply(this,arguments)}))}))})),p.modal.classList.remove("is-hidden")})),p.closeModalBtn.addEventListener("click",k),p.modalBackdrop.addEventListener("click",(function(e){k()})),o("5qF9o");var S=o("5qF9o");s=o("5g02X");S.default.clearGallery(),S.default.fetchCoctails(s.default.fetchRandomCocktail);a=o("bpxeT"),d=o("2TvXO"),s=o("5g02X"),s=o("5g02X"),S=o("5qF9o");var b={form:document.querySelector(".search"),formBurger:document.querySelector(".burger__search"),searchByLetter:document.querySelector(".hero-search"),letterBtn:document.querySelector(".hero-btn"),overlayArrow:document.querySelector(".hero-btn--arrow"),errorPicture:document.querySelector(".sorry"),gallerySection:document.querySelector(".gallery"),titleSearchLetter:document.querySelector(".gallery__headling")};b.form.addEventListener("submit",q),b.formBurger.addEventListener("submit",q);var L="";function q(e){return x.apply(this,arguments)}function x(){return(x=e(a)(e(d).mark((function t(n){var r;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),L=n.target.elements[1].value,S.default.fetchCoctails(s.default.fetchCocktailByName,L),e.next=5,s.default.fetchCocktailByName(L);case 5:r=e.sent,console.log(r),null!==(null==r?void 0:r.drinks)?(b.gallerySection.classList.remove("hidden"),b.errorPicture.classList.add("hidden"),b.titleSearchLetter.textContent="Searching results"):B(),n.target.elements[1].value="";case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function B(){S.default.clearGallery(),b.gallerySection.classList.add("hidden"),b.errorPicture.classList.remove("hidden")}a=o("bpxeT"),d=o("2TvXO"),s=o("5g02X"),s=o("5g02X"),S=o("5qF9o");var C={searchByLetter:document.querySelector(".hero-search"),letterBtn:document.querySelector(".hero-btn"),overlayArrow:document.querySelector(".hero-btn--arrow"),errorPicture:document.querySelector(".sorry"),gallerySection:document.querySelector(".gallery"),titleSearchLetter:document.querySelector(".gallery__headling")};C.searchByLetter.addEventListener("click",(function(e){return I.apply(this,arguments)}));var E="";function I(){return(I=e(a)(e(d).mark((function t(n){var r;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E=n.target.textContent,C.letterBtn.innerHTML="".concat(E,'<span class="hero-btn--arrow"></span>'),C.letterBtn.classList.add("active-btn"),S.default.fetchCoctails(s.default.fetchCocktailByLetter,E),e.next=6,s.default.fetchCocktailByLetter(E);case 6:null!==(null==(r=e.sent)?void 0:r.drinks)?(C.gallerySection.classList.remove("hidden"),C.errorPicture.classList.add("hidden"),C.titleSearchLetter.textContent="Searching results"):w();case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function w(){S.default.clearGallery(),C.gallerySection.classList.add("hidden"),C.errorPicture.classList.remove("hidden")}!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),console.log(e.openModalBtn)}();var M=document.querySelector("#toggle-theme"),T=document.querySelector("#toggle-burger");function O(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}M.addEventListener("change",O,!1),T.addEventListener("change",O,!1),"dark"===localStorage.getItem("theme")?(document.documentElement.setAttribute("data-theme","dark"),M.checked=!0,T.checked=!0):(document.documentElement.setAttribute("data-theme","light"),M.checked=!1,T.checked=!1)}();
//# sourceMappingURL=favorite-ingredients.8637ddd7.js.map