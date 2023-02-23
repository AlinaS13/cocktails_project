let inredientsObj = [];
import { keys } from './localStoregeKeys';

// localStorage.setItem(keys.localCoctailsKey, JSON.stringify(inredientsObj));
export function setIdIngridient(num) {
  const savedCoctaisGalery = localStorage.getItem(keys.localIngredientsKey);

  const coctails = JSON.parse(savedCoctaisGalery);

  if (coctails) {
    inredientsObj = [...coctails];
  }
  if (inredientsObj.includes(num)) {
    inredientsObj.splice(inredientsObj.indexOf(num), 1);
    localStorage.setItem(
      keys.localIngredientsKey,
      JSON.stringify(inredientsObj)
    );
    return;
  }
  inredientsObj.unshift(num);
  localStorage.setItem(keys.localIngredientsKey, JSON.stringify(inredientsObj));
  //   localStorage.setItem(keys.localCoctailsKey, drinksObject);
}
