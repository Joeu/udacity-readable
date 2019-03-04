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
    // ADD A POST
    case types.ADD_POST_BEGIN:
      return {
        ...state
      }
    case types.ADD_POST_SUCCESS:
      let _posts = Object.values(state)[0].concat(action.post)
      return {
        ...state,
        posts: _posts
      }
    case types.ADD_POST_ERROR:
      return {
        ...state,
        error: action.error,
      }
    // EDIT A POST
    case types.EDIT_POST_BEGIN:
      return {
        ...state
      }
    case types.EDIT_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => 
          post.id === action.post.id
          ? post = action.post
          : post = post
        )
      }
    case types.EDIT_POST_ERROR:
      return {
        ...state,
        error: action.error,
      }
    // DELETE A POST
    case types.DELETE_POST_BEGIN:
      let _remainingPosts = Object.values(state.posts).filter(post => post.id !== action.id);
      return {
        ...state,
        posts: _remainingPosts
      }
    case types.DELETE_POST_SUCCESS:
      return {
        ...state
      }
    case types.DELETE_POST_ERROR:
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