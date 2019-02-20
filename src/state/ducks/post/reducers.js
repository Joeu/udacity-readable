import { combineReducers } from 'redux';
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

    case types.UPDATE_POST_VOTE_SCORE_BEGIN:
      const _value = action.option.option === 'upVote' ? 1 : - 1;
      return {
        ...state,
        posts: state.posts.map(
          (post) => post.id === action.post.id 
            ? {...post, voteScore: post.voteScore + _value}
            : post
        )
      }
    case types.UPDATE_POST_VOTE_SCORE_SUCCESS:
      return {
        ...state,
      }
    case types.UPDATE_POST_VOTE_SCORE_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export default combineReducers({
  postsReducer
});