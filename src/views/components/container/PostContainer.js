import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../presentational/Post';

class PostContainer extends Component {
  render() {
    return (
      <Post post={this.props.post} comments={this.props.comments}></Post>
    )
  }
}

const filterComments = (comments, post) => {
  return comments.filter(comment => comment.parentId === post.id)
}


const mapStateToProps = (state, ownProps) => ({
  state,
  comments: filterComments(Object.values(state.comments.commentsReducer), ownProps.post)
});

export default connect(mapStateToProps)(PostContainer);