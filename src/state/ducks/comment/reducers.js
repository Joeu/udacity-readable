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
    default:
      return state
  }
}

const voteScoreReducer = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_VOTE_SCORE_BEGIN:
      return {
        ...state,
      }
    case types.UPDATE_VOTE_SCORE_SUCCESS:
      return {
        ...state,
      }
    case types.UPDATE_VOTE_SCORE_ERROR:
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
  voteScoreReducer
});