import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../presentational/Post';
import { fetchPostComments } from '../../../state/ducks/comment/actions';


class PostContainer extends Component {
  componentDidMount() {
    this.props.fetchPostComments(this.props.post.id);
  }

  render() {
    return (
      <Post post={this.props.post} comments={this.props.comments}></Post>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments && state.comments.comments
});

const mapDispatchToProps = dispatch => ({
  fetchPostComments: (postId) => dispatch(fetchPostComments(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);