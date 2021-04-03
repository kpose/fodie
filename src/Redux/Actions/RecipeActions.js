import axios from 'axios';
import Config from 'react-native-config';
import {
  FETCH_RECIPES_FAIL,
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
} from '../Constants/Constants';

const SPOON_API_KEY = Config.SPOON_API_KEY;
const recipesEndpoint = 'https://api.spoonacular.com/recipes/random?';

export default listAllRecipes = limit => async dispatch => {
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
