!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequiref932;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequiref932=o);var a=o("bpxeT"),i=o("8nrFW"),l=o("2TvXO"),c=o("5g02X"),u=o("5qF9o"),s=o("keUzR"),d=(document.querySelector(".coctail-info-modal "),document.querySelector(".coctails__list")),f=(document.querySelector(".button-more"),document.querySelector(".coctails-sorry")),p="Favorit Coctails",m=[],g=function(){var e=localStorage.getItem(p);return JSON.parse(e)};function y(){return v.apply(this,arguments)}function v(){return(v=e(a)(e(l).mark((function t(){var n,r,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.innerHTML="",n=g().map((function(e){return c.default.fetchCocktailDetailsById(e)})),e.next=4,Promise.all(n);case 4:r=e.sent,o=r.map((function(e){return e.drinks})).flat(1),null==d||d.insertAdjacentHTML("afterbegin",u.default.createMarkup(o));case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}g()&&(m=e(i)(g()),y(g())),g()&&0!==g().length||f.insertAdjacentHTML("afterbegin",'<p class="sorry__title-coctails ">You haven\'t added any favorite cocktails yet</p>');null==d||d.addEventListener("click",(function(e){"BUTTON"===e.target.nodeName&&("button-more"===e.target.className&&(0,s.onGalleryClick)(e),"button-add"===e.target.className&&(m.splice(m.indexOf(Number(e.target.id)),1),localStorage.setItem(p,JSON.stringify(m)),y()))}))}();
//# sourceMappingURL=favorite-cocktails.79768aff.js.map
