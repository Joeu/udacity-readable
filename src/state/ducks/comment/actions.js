import * as types from './types';
import * as apiService from '../../utils/apiService';

export const fetchPostComments = (postId) => {
  return dispatch => {
    dispatch(fetchPostCommentsBegin());
    return apiService.fetchPostComments(postId)
      .then(response => {
        dispatch(fetchPostCommentsSuccess(response));
        return response;
      }).catch(error =>
        dispatch(fetchPostCommentsError(error)
    ));
  }
}

export const fetchPostCommentsBegin = () => {
  return {
    type: types.FETCH_COMMENTS_BEGIN
  }
}

export const fetchPostCommentsSuccess = (comments) => {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    comments
  }
}

export const fetchPostCommentsError = (error) => {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    error
  }
}

export const updateVoteScore = (post, option) => {
  return dispatch => {
    dispatch(updateVoteScoreBegin(post, option));
    return apiService.updateVoteScore(post, option)
      .then(response => {
        dispatch(updateVoteScoreSuccess(response));
      }).catch(error => 
        dispatch(updateVoteScoreError(error)
    ));
  }
}

export const updateVoteScoreBegin = (post, option) => {
  return {
    type: types.UPDATE_VOTE_SCORE_BEGIN,
    post,
    option
  }
}

export const updateVoteScoreSuccess = (comments) => {
  return {
    type: types.UPDATE_VOTE_SCORE_SUCCESS,
    comments
  }
}

export const updateVoteScoreError = (error) => {
  return {
    type: types.UPDATE_VOTE_SCORE_ERROR,
    error
  }
}