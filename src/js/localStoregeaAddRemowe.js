let drinksObject = [];
import { keys } from './localStoregeKeys';

// localStorage.setItem(keys.localCoctailsKey, JSON.stringify(drinksObject));
export function getSetLS(num) {
  const savedCoctaisGalery = localStorage.getItem(keys.localCoctailsKey);

  const coctails = JSON.parse(savedCoctaisGalery);

  if (coctails) {
    drinksObject = [...coctails];
  }
  if (drinksObject.includes(num)) {
    drinksObject.splice(drinksObject.indexOf(num), 1);
    localStorage.setItem(keys.localCoctailsKey, JSON.stringify(drinksObject));
    return;
  }
  drinksObject.unshift(num);
  localStorage.setItem(keys.localCoctailsKey, JSON.stringify(drinksObject));
  //   localStorage.setItem(keys.localCoctailsKey, drinksObject);
}
