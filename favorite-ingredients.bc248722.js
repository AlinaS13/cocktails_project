var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},l=e.parcelRequiref932;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in r){var l=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},e.parcelRequiref932=l),l("cyIMT"),l("lJXXB"),l("aJrzc"),l("6tYD7");var o=l("6tYD7"),c=l("cyIMT");o.default.clearGallery(),o.default.fetchCoctails(c.default.fetchRandomCocktail);c=l("cyIMT"),c=l("cyIMT"),o=l("6tYD7");const a={form:document.querySelector(".search"),formBurger:document.querySelector(".burger__search"),searchByLetter:document.querySelector(".hero-search"),letterBtn:document.querySelector(".hero-btn"),overlayArrow:document.querySelector(".hero-btn--arrow"),errorPicture:document.querySelector(".sorry"),gallerySection:document.querySelector(".gallery"),titleSearchLetter:document.querySelector(".gallery__headling")};a.form.addEventListener("submit",d),a.formBurger.addEventListener("submit",d);let n="";async function d(e){e.preventDefault(),n=e.target.elements[1].value,o.default.fetchCoctails(c.default.fetchCocktailByName,n);const t=await c.default.fetchCocktailByName(n);console.log(t),null!==t?.drinks?(a.gallerySection.classList.remove("hidden"),a.errorPicture.classList.add("hidden"),a.titleSearchLetter.textContent="Searching results"):(o.default.clearGallery(),a.gallerySection.classList.add("hidden"),a.errorPicture.classList.remove("hidden")),e.target.elements[1].value=""}c=l("cyIMT"),c=l("cyIMT"),o=l("6tYD7");const i={searchByLetter:document.querySelector(".hero-search"),letterBtn:document.querySelector(".hero-btn"),overlayArrow:document.querySelector(".hero-btn--arrow"),errorPicture:document.querySelector(".sorry"),gallerySection:document.querySelector(".gallery"),titleSearchLetter:document.querySelector(".gallery__headling")};i.searchByLetter.addEventListener("click",(async function(e){u=e.target.textContent,i.letterBtn.innerHTML=`${u}<span class="hero-btn--arrow"></span>`,i.letterBtn.classList.add("active-btn"),o.default.fetchCoctails(c.default.fetchCocktailByLetter,u);null!==(await c.default.fetchCocktailByLetter(u))?.drinks?(i.gallerySection.classList.remove("hidden"),i.errorPicture.classList.add("hidden"),i.titleSearchLetter.textContent="Searching results"):(o.default.clearGallery(),i.gallerySection.classList.add("hidden"),i.errorPicture.classList.remove("hidden"))}));let u="";(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),console.log(e.openModalBtn)})();const s=document.querySelector("#toggle-theme"),m=document.querySelector("#toggle-burger");function h(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}s.addEventListener("change",h,!1),m.addEventListener("change",h,!1),"dark"===localStorage.getItem("theme")?(document.documentElement.setAttribute("data-theme","dark"),s.checked=!0,m.checked=!0):(document.documentElement.setAttribute("data-theme","light"),s.checked=!1,m.checked=!1);
//# sourceMappingURL=favorite-ingredients.bc248722.js.map
