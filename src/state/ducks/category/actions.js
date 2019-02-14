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

export const fetchCategoryPosts = (category) => {
  return dispatch => {
    dispatch(fetchCategoryPostsBegin());
    return apiServie.fetchCategoryPosts(category)
      .then(response => {
        dispatch(fetchCategoryPostsSuccess(response));
        return response;
      }).catch(error =>
        dispatch(fetchCategoryPostsError(error)
      ));
  }
}

export const fetchCategoryPostsBegin = () => {
  return {
    type: types.FETCH_CATEGORY_BEGIN
  }
}

export const fetchCategoryPostsSuccess = (posts) => {
  return {
    type: types.FETCH_CATEGORY_SUCCESS,
    payload: { 
      posts
    }
  }
}

export const fetchCategoryPostsError = (error) => {
  return {
    type: types.FETCH_CATEGORY_ERROR,
    payload: {
      error
    }
  }
}