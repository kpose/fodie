import {createSelector} from 'reselect';
import _ from 'lodash';

export const getRecipes = state => state.getRecipes.recipes;
export const getsimilarRecipes = state => state.similarRecipes.similar;
