import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../presentational/Comment';

class CommentContainer extends Component {
  render() {
    return (
      <Comment post={this.props.post}></Comment>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);