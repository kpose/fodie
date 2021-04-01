import {combineReducers} from 'redux';

import {getRecipesReducer} from './RecipeReducers';

export default combineReducers({
  getRecipes: getRecipesReducer,
});
