import { combineReducers } from 'redux';
import * as types from './types';

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_BEGIN:
      return {
        ...state,
        error: null
      }
    case types.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories
      }
    case types.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        error: action.payload.error,
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
      return {
        ...state,
        posts: action.payload.posts
      }
    case types.FETCH_CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload.error,
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