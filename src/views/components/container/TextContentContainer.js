import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextContent from '../presentational/TextContent';
import { updatePostVoteScore } from '../../../state/ducks/post/actions';
import { updateCommentVoteScore } from '../../../state/ducks/comment/actions';


class TextContentContainer extends Component {
  render() {
    return (
      <TextContent 
        updatePostVoteScore={this.props.updatePostVoteScore}
        updateCommentVoteScore={this.props.updateCommentVoteScore}
        post={this.props.post}>
      </TextContent>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  state,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePostVoteScore: (post, option) => dispatch(updatePostVoteScore(post, option)),
  updateCommentVoteScore: (comment, option) => dispatch(updateCommentVoteScore(comment, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(TextContentContainer);