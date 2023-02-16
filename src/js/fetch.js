import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

const fetchCocktailByName = async s => {
  try {
    const { data } = await instance.get('/search.php', {
      params: {
        s,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCocktailByLetter = async f => {
  try {
    const { data } = await instance.get('/search.php', {
      params: {
        f,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchIngredientByName = async i => {
  try {
    const { data } = await instance.get('/search.php', {
      params: {
        i,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCocktailDetailsById = async i => {
  try {
    const { data } = await instance.get('/lookup.php', {
      params: {
        i,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchIngredientyId = async iid => {
  try {
    const { data } = await instance.get('/lookup.php', {
      params: {
        iid,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchRandomCocktail = async () => {
  try {
    const { data } = await instance.get('/random.php');
    return data;
  } catch (error) {
    console.log(error);
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
