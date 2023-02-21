import axios from 'axios';
import renderFunc from '../js/renderFunc';
renderFunc.resolutionQuery;
const perPage = renderFunc.itemsPerPage;

const instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

const fetchCocktailByName = async s => {
  return makeRequest('/search.php', { s });
};

const fetchCocktailByLetter = async f => {
  return makeRequest('/search.php', { f });
};

const fetchIngredientByName = async i => {
  return makeRequest('/search.php', { i });
};

const fetchCocktailDetailsById = async i => {
  return makeRequest('/lookup.php', { i });
};

const fetchIngredientyId = async iid => {
  return makeRequest('/lookup.php', { iid });
};

const fetchRandomCocktail = async () => {
  const response = {
    drinks: [],
  };
  for (let i = 0; i < perPage; i++) {
    const arr = await makeRequest('/random.php');
    response.drinks.push(arr.drinks[0]);
  }
  return response;
};

const makeRequest = async (url, params = {}) => {
  try {
    const { data } = await instance.get(url, { params });
    return data;
  } catch {
    return [];
  }
};

export default {
  fetchCocktailByName,
  fetchCocktailByLetter,
  fetchIngredientByName,
  fetchCocktailDetailsById,
  fetchIngredientyId,
  fetchRandomCocktail,
};
