import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../presentational/Comment';

class CommentContainer extends Component {
  componentDidMount() {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);