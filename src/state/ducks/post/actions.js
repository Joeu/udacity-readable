import * as types from './types';
import * as apiService from '../../utils/apiService';
import { fetchPostComments } from '../comment/actions';

export const fetchAllPosts = () => {
  return dispatch => {
    dispatch(fetchAllPostsBegin());
    return apiService.fetchAllPosts()
      .then(posts => {
        dispatch(fetchAllPostsSuccess(posts));
        return posts.map(post => 
          dispatch(fetchPostComments(post.id))
        )
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
    posts
  }
}

export const fetchAllPostsError = (error) => {
  return {
    type: types.FETCH_POSTS_ERROR,
    error
  }
}

export const updatePostVoteScore = (post, option) => {
  return (dispatch) => {
    dispatch(updatePostVoteScoreBegin(post, option));
    return apiService.updateVoteScore('posts', post, option)
      .then(response => {
        dispatch(updatePostVoteScoreSuccess(response));
      }).catch(error => 
        dispatch(updatePostVoteScoreError(error)
    ));
  }
}

export const updatePostVoteScoreBegin = (post, option) => {
  return {
    type: types.UPDATE_POST_VOTE_SCORE_BEGIN,
    post,
    option
  }
}

export const updatePostVoteScoreSuccess = (post) => {
  return {
    type: types.UPDATE_POST_VOTE_SCORE_SUCCESS,
    post
  }
}

export const updatePostVoteScoreError = (error) => {
  return {
    type: types.UPDATE_POST_VOTE_SCORE_ERROR,
    error
  }
}

export const deletePost = (commentId) => {
  return dispatch => {
    dispatch(deletePostBegin(commentId));
    return apiService.deletePost(commentId)
      .then(response => {
        dispatch(deletePostSuccess(response));
        return response;
      }).catch(error =>
        dispatch(deletePostError(error)
    ));
  }
}

export const deletePostBegin = (commentId) => {
  return {
    type: types.DELETE_POST_BEGIN,
    id: commentId
  }
}

export const deletePostSuccess = (commentId) => {
  return {
    type: types.DELETE_POST_SUCCESS,
    id: commentId
  }
}

export const deletePostError = () => {
  return {
    type: types.DELETE_POST_ERROR,
  }
}