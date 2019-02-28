import { combineReducers } from 'redux';
import * as types from './types';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    // GET COMMENTS
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
    // UP/DOWN VOTE A COMMENT
    case types.UPDATE_COMMENT_VOTE_SCORE_BEGIN:
      const _value = action.option.option === 'upVote' ? 1 : - 1;
      return Object.values(state).map(
        (comment) => comment.id === action.comment.id
          ? Object.assign({}, comment, { voteScore: comment.voteScore + _value })
          : comment
      )
    case types.UPDATE_COMMENT_VOTE_SCORE_SUCCESS:
      return {
        ...state,
      }
    case types.UPDATE_COMMENT_VOTE_SCORE_ERROR:
      return {
        ...state,
        error: action.error,
      }
    // POST A COMMENT
    case types.POST_COMMENT_BEGIN:
      return {
        ...state
      }
    case types.POST_COMMENT_SUCCESS:
      return Object.values(state).concat([action.comment])
    case types.POST_COMMENT_ERROR:
      return {
        ...state,
        error: action.error,
      }
    // EDIT A COMMENT
    case types.EDIT_COMMENT_BEGIN:
      return {
        ...state
      }
    case types.EDIT_COMMENT_SUCCESS:
      return {
        ...state
      }
    case types.EDIT_COMMENT_ERROR:
      return {
        ...state,
        error: action.error,
      }
    // DELETE A COMMENT
    case types.DELETE_COMMENT_BEGIN:
      return Object.values(state).filter(comment => comment.id !== action.id);
    case types.DELETE_COMMENT_SUCCESS:
      return {
        ...state
      }
    case types.DELETE_COMMENT_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export default combineReducers({
  commentsReducer,
});