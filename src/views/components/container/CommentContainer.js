import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../presentational/Comment';
import { fetchPostComments } from '../../../state/ducks/comment/actions';

class CommentContainer extends Component {
  componentDidMount() {
    this.props.fetchPostComments(this.props.postId);
  }

  render() {
    return (
      <Comment></Comment>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => ({
  fetchPostComments: () => dispatch(fetchPostComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);