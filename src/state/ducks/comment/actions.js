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

export const updateCommentVoteScore = (post, option) => {
  return dispatch => {
    dispatch(updateCommentVoteScoreBegin(post, option));
    return apiService.updateVoteScore('comments', post, option)
      .then(response => {
        dispatch(updateCommentVoteScoreSuccess(response));
      }).catch(error => 
        dispatch(updateCommentVoteScoreError(error)
    ));
  }
}

export const updateCommentVoteScoreBegin = (comment, option) => {
  return {
    type: types.UPDATE_COMMENT_VOTE_SCORE_BEGIN,
    comment,
    option
  }
}

export const updateCommentVoteScoreSuccess = (comments) => {
  return {
    type: types.UPDATE_COMMENT_VOTE_SCORE_SUCCESS,
    comments
  }
}

export const updateCommentVoteScoreError = (error) => {
  return {
    type: types.UPDATE_COMMENT_VOTE_SCORE_ERROR,
    error
  }
}

export const postComment = (comment) => {
  return dispatch => {
    dispatch(postCommentBegin());
    return apiService.postComment(comment)
      .then(response => {
        dispatch(postCommentSuccess(response));
        return response;
      }).catch(error =>
        dispatch(postCommentError(error)
    ));
  }
}

export const postCommentBegin = (comment) => {
  return {
    type: types.POST_COMMENT_BEGIN,
    comment,
  }
}

export const postCommentSuccess = (comment) => {
  return {
    type: types.POST_COMMENT_SUCCESS,
    comment
  }
}

export const postCommentError = () => {
  return {
    type: types.POST_COMMENT_ERROR,
  }
}

export const deleteComment = (commentId) => {
  return dispatch => {
    dispatch(deleteCommentBegin(commentId));
    return apiService.deleteComment(commentId)
      .then(response => {
        dispatch(deleteCommentSuccess(response));
        return response;
      }).catch(error =>
        dispatch(deleteCommentError(error)
    ));
  }
}

export const deleteCommentBegin = (commentId) => {
  return {
    type: types.DELETE_COMMENT_BEGIN,
    id: commentId
  }
}

export const deleteCommentSuccess = (commentId) => {
  return {
    type: types.DELETE_COMMENT_SUCCESS,
    id: commentId
  }
}

export const deleteCommentError = () => {
  return {
    type: types.DELETE_COMMENT_ERROR,
  }
}