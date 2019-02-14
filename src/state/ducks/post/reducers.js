import * as types from './types';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_BEGIN:
      return {
        ...state,
        error: null
      }
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts
      }
    case types.FETCH_POSTS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        posts: []
      }
    default:
      return state
  }
}

export default postsReducer;