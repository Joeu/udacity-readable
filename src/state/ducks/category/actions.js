import * as types from './types';
import * as apiServie from '../../utils/apiService';

export const fetchCategories = () => {
  return dispatch => {
    dispatch(fetchCategoriesBegin());
    return apiServie.fetchCategories()
      .then(response => {
        dispatch(fetchCategoriesSuccess(response.categories));
        return response.categories;
      }).catch(error =>
        dispatch(fetchCategoriesError(error)
      ));
  }
}

export const fetchCategoriesBegin = () => {
  return {
    type: types.FETCH_CATEGORIES_BEGIN
  }
}

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: types.FETCH_CATEGORIES_SUCCESS,
    payload: { 
      categories
    }
  }
}

export const fetchCategoriesError = (error) => {
  return {
    type: types.FETCH_CATEGORIES_ERROR,
    payload: {
      error
    }
  }
}