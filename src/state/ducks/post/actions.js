import * as types from './types';
import * as apiServie from '../../utils/apiService';

export const fetchAllPosts = () => {
  return dispatch => {
    dispatch(fetchAllPostsBegin());
    return apiServie.fetchAllPosts()
      .then(response => {
        dispatch(fetchAllPostsSuccess(response));
        return response;
      }).catch(error =>
        dispatch(fetchAllPostsError(error)
      ));
  }
}

export const fetchAllPostsBegin = () => {
  return {
    type: types.FETCH_POSTS_BEGIN
  }
}

export const fetchAllPostsSuccess = (posts) => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: { 
      posts
    }
  }
}

export const fetchAllPostsError = (error) => {
  return {
    type: types.FETCH_POSTS_ERROR,
    payload: {
      error
    }
  }
}