import { GET_RECIPES, DETAIL_RECIPE, CLEAR_DETAIL, GET_DIETS, CREATE_RECIPE, FILTER_BY_DIETS, ORDER_ALPHABETIC, ORDER_HEALTHSCORE, FILTER_BY_ORIGIN, GET_RECIPE_NAME, DELETE_FILTERS } from "./actions";

const initialState = {
    recipes: [],
    detailRecipes: {},
    diets: [], 
    filteredRecipe: [],
   
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_RECIPES:
        return {
            ...state,
            recipes: payload,
            filteredRecipe: payload
        }
    case GET_RECIPE_NAME:
      return {
        ...state,
       //recipes: payload,
       filteredRecipe: payload

      }    
    case CREATE_RECIPE:
      return{
        ...state,
        recipes: payload
      } 
    
    case DETAIL_RECIPE:
      return {
        ...state,
        detailRecipes: payload,
      }
    case CLEAR_DETAIL:
        return {
            ...state,
            detailRecipes: {}
        } 
    case GET_DIETS:
        return {
            ...state,
            diets: payload
        }
        case FILTER_BY_DIETS:
  console.log("Payload:", payload);
  console.log("Recipes:", state.recipes);
  const allRecipesFiltered = state.recipes.filter(
    (recipe) => recipe.diets.some(diet => diet.name.toLowerCase() === payload.toLowerCase())
  );
  console.log("Filtered Recipes:", allRecipesFiltered);
  return {
    ...state,
    //filteredRecipe: allRecipesFiltered
    recipes: allRecipesFiltered
  };


  case ORDER_ALPHABETIC:
    console.log("Payload:", payload); 
    const sortedRecipes = payload === "asc"
      ? state.recipes.slice().sort((a, b) => a.name.localeCompare(b.name))
      : state.recipes.slice().sort((a, b) => b.name.localeCompare(a.name));
  
    return {
      ...state,
      //filteredRecipe: sortedRecipes,
      recipes: sortedRecipes
    };
  
    case ORDER_HEALTHSCORE:
        return {
            ...state,
            recipes:
              payload === "Ascendente"
                ? state.recipes.sort((a, b) => (a.healthScore < b.healthScore ? -1 : 1))
                : state.recipes.sort((a, b) => (a.healthScore > b.healthScore ? -1 : 1)),
          };

case FILTER_BY_ORIGIN:
  const filteredRecipes = state.recipes.filter((recipe) => {
    const regExp = /^[0-9]+$/;
    if (payload === 'Api' && regExp.test(recipe.id)) {
      return true;
    } else if (payload === 'DataBase' && !regExp.test(recipe.id)) {
      return true;
    } else if (payload === 'All') {
      return true;
    }
    return false;
  });

  return {
    ...state,
    recipes: filteredRecipes,
  };

    case DELETE_FILTERS:
        return {
          ...state,
          recipes: state.recipes
        }                     

    default:
        return {
            ...state
        }
      
  }
}

export default reducer;