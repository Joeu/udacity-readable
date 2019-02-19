import * as types from './types';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_BEGIN:
      return {
        ...state,
      }
    case types.FETCH_POSTS_SUCCESS:
      const { posts } = action;
      return {
        ...state,
        posts
      }
    case types.FETCH_POSTS_ERROR:
      return {
        ...state,
        error: action.error,
        posts: []
      }
    default:
      return state
  }
}

export default postsReducer;