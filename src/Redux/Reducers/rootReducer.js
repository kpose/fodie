import {combineReducers} from 'redux';

import {getRecipesReducer, similarRecipesReducer} from './RecipeReducers';

export default combineReducers({
  getRecipes: getRecipesReducer,
  similarRecipes: similarRecipesReducer,
});
