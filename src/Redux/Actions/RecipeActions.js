import axios from 'axios';
import Config from 'react-native-config';
import {
  FETCH_RECIPES_FAIL,
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  SIMILAR_RECIPES_FAIL,
  SIMILAR_RECIPES_REQUEST,
  SIMILAR_RECIPES_SUCCESS,
} from '../Constants/Constants';

const SPOON_API_KEY = Config.SPOON_API_KEY;
const recipesEndpoint = 'https://api.spoonacular.com/recipes/random?';
const similarRecipesEndpoint = 'https://api.spoonacular.com/recipes/';

export const listAllRecipes = limit => async dispatch => {
  try {
    dispatch({
      type: FETCH_RECIPES_REQUEST,
    });

    const {data} = await axios.get(
      recipesEndpoint + `apiKey=${SPOON_API_KEY}&number=${limit}`,
    );

    dispatch({
      type: FETCH_RECIPES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_RECIPES_FAIL,
      payload: error.message,
    });
  }
};

export const similarRecipes = id => async dispatch => {
  try {
    dispatch({
      type: SIMILAR_RECIPES_REQUEST,
    });

    const {data} = await axios.get(
      similarRecipesEndpoint + `${id}&number=${4}`,
    );

    dispatch({
      type: SIMILAR_RECIPES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SIMILAR_RECIPES_FAIL,
      payload: error.message,
    });
  }
};
