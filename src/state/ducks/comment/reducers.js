import * as types from './types';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS_BEGIN:
      return {
        ...state,
      }
    case types.FETCH_COMMENTS_SUCCESS:
      const { comments } = action;
      return {
        ...state,
        ...comments
      }
    case types.FETCH_COMMENTS_ERROR:
      return {
        ...state,
        error: action.error,
        comments: []
      }
    default:
      return state
  }
}

export default commentsReducer;