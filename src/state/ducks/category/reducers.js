import { combineReducers } from 'redux';
import * as types from './types';

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_BEGIN:
      return {
        ...state,
      }
    case types.FETCH_CATEGORIES_SUCCESS:
      const { categories } = action;
      return {
        ...state,
        categories
      }
    case types.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        error: action.error,
        categories: []
      }
    default:
      return state
  }
}

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORY_BEGIN:
      return {
        ...state,
        error: null
      }
    case types.FETCH_CATEGORY_SUCCESS:
      const { posts } = action;
      return {
        ...state,
        posts
      }
    case types.FETCH_CATEGORY_ERROR:
      return {
        ...state,
        error: action.error,
        posts: []
      }
    default:
      return state
  }
}

export default combineReducers({
  categoriesReducer: categoriesReducer,
  categoryReducer: categoryReducer
}); 