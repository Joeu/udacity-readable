import { combineReducers } from 'redux';
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
    case types.UPDATE_COMMENT_VOTE_SCORE_BEGIN:
      const _value = action.option.option === 'upVote' ? 1 : - 1;
      return Object.values(state).map(
        (comment) => comment.id === action.comment.id 
          ? Object.assign({}, comment, {voteScore: comment.voteScore + _value})
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
    default:
      return state
  }
}

export default combineReducers({
  commentsReducer,
});