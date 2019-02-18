import * as types from './types';
import * as apiServie from '../../utils/apiService';

export const fetchPostComments = (postId) => {
  return dispatch => {
    dispatch(fetchPostCommentsBegin());
    return apiServie.fetchPostComments(postId)
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
    payload: { 
      comments
    }
  }
}

export const fetchPostCommentsError = (error) => {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    payload: {
      error
    }
  }
}