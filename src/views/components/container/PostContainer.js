import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../presentational/Post';

class PostContainer extends Component {
  componentDidMount() {
    // this.props.fetchPostComments(this.props.post.id);
  }

  render() {
    return (
      <Post post={this.props.post}></Post>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => ({
  // fetchPostComments: (postId) => dispatch(fetchPostComments(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);