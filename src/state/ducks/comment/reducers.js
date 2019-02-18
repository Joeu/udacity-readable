import * as types from './types';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS_BEGIN:
      return {
        ...state,
        error: null
      }
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.comments
      }
    case types.FETCH_COMMENTS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        comments: []
      }
    default:
      return state
  }
}

export default commentsReducer;