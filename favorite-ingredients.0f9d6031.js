var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},c=e.parcelRequiref932;null==c&&((c=function(e){if(e in t)return t[e].exports;if(e in r){var c=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,c.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequiref932=c),c("cyIMT"),c("lJXXB"),c("aJrzc"),c("6tYD7");var l=c("6tYD7"),o=c("cyIMT");l.default.clearGallery(),l.default.fetchCoctails(o.default.fetchRandomCocktail);o=c("cyIMT"),o=c("cyIMT"),l=c("6tYD7");const a={form:document.querySelector(".search"),formBurger:document.querySelector(".burger__search"),searchByLetter:document.querySelector(".hero-search"),letterBtn:document.querySelector(".hero-btn"),overlayArrow:document.querySelector(".hero-btn--arrow"),errorPicture:document.querySelector(".sorry"),gallerySection:document.querySelector(".gallery"),titleSearchLetter:document.querySelector(".gallery__headling")};a.form.addEventListener("submit",d),a.formBurger.addEventListener("submit",d);let n="";async function d(e){e.preventDefault(),n=e.target.elements[1].value,l.default.fetchCoctails(o.default.fetchCocktailByName,n);null!==(await o.default.fetchCocktailByName(n))?.drinks?(a.gallerySection.classList.remove("hidden"),a.errorPicture.classList.add("hidden"),a.titleSearchLetter.textContent="Searching results"):(l.default.clearGallery(),a.gallerySection.classList.add("hidden"),a.errorPicture.classList.remove("hidden")),e.target.elements[1].value=""}o=c("cyIMT"),o=c("cyIMT"),l=c("6tYD7");const u={searchByLetter:document.querySelector(".hero-search"),letterBtn:document.querySelector(".hero-btn"),overlayArrow:document.querySelector(".hero-btn--arrow"),errorPicture:document.querySelector(".sorry"),gallerySection:document.querySelector(".gallery"),titleSearchLetter:document.querySelector(".gallery__headling")};u.searchByLetter.addEventListener("click",(async function(e){i=e.target.textContent,u.letterBtn.innerHTML=`${i}<span class="hero-btn--arrow"></span>`,u.letterBtn.classList.add("active-btn"),l.default.fetchCoctails(o.default.fetchCocktailByLetter,i);null!==(await o.default.fetchCocktailByLetter(i))?.drinks?(u.gallerySection.classList.remove("hidden"),u.errorPicture.classList.add("hidden"),u.titleSearchLetter.textContent="Searching results"):(l.default.clearGallery(),u.gallerySection.classList.add("hidden"),u.errorPicture.classList.remove("hidden"))}));let i="";(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),searchInput:document.querySelector("#search-input")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.searchInput.addEventListener("keydown",(e=>{"Enter"===e.key&&t()}))})();const s=document.querySelector("#toggle-theme"),m=document.querySelector("#toggle-burger");function h(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}s.addEventListener("change",h,!1),m.addEventListener("change",h,!1),"dark"===localStorage.getItem("theme")?(document.documentElement.setAttribute("data-theme","dark"),s.checked=!0,m.checked=!0):(document.documentElement.setAttribute("data-theme","light"),s.checked=!1,m.checked=!1);
//# sourceMappingURL=favorite-ingredients.0f9d6031.js.map
