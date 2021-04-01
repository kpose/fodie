import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAIL,
} from '../Constants/Constants';

export const getRecipesReducer = (
  state = {loading: false, recipes: []},
  action,
) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload,
      };

    case FETCH_RECIPES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
