// import { combineReducers } from 'redux';
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

export default categoriesReducer;