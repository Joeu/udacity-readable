import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../presentational/Post';

class PostContainer extends Component {
  
  // Toggle display comments
  state = {
    displayComments: false
  }

  toggleComments = () => {
    this.setState(() => ({
      displayComments: !this.state.displayComments
    }));
  }

  render() {
    return (
      <Post post={this.props.post} toggleComments={this.toggleComments} displayComments={this.state.displayComments} comments={this.props.comments}></Post>
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