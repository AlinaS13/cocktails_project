var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequiref932;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequiref932=o);var l=o("cyIMT"),r=o("6tYD7");const i=document.querySelector(".coctails__list"),a=document.querySelector(".add-btn"),c="Favorit Coctails";let s=[];const d=()=>{const e=localStorage.getItem(c);return JSON.parse(e)};async function f(){const e=d().map((e=>l.default.fetchCocktailDetailsById(e))),t=await Promise.all(e);console.log(t);const n=t.map((({drinks:e})=>e)).flat(1);i.insertAdjacentHTML("afterbegin",r.default.createMarkup(n))}function u(){localStorage.setItem(c,JSON.stringify(s))}d()&&(s=[...d()],f(d())),console.log(s);i.addEventListener("click",(e=>{"BUTTON"===e.target.nodeName&&(console.log(e.target.id),s.splice(s.indexOf(Number(e.target.id)),1),u(),i.innerHTML="",f())})),a.addEventListener("click",(e=>{console.log(e.target.id);const t=Number(e.target.id);s.includes(t)||(l.default.fetchCocktailDetailsById(t).then((e=>console.log("дата на кнопке",e))),s.push(t),i.innerHTML="",u(),f(d()))}));
//# sourceMappingURL=favorite-cocktails.70a2fabf.js.map
