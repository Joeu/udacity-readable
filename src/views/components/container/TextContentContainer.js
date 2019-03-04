import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextContent from '../presentational/TextContent';
import { updatePostVoteScore, deletePost } from '../../../state/ducks/post/actions';
import { updateCommentVoteScore, deleteComment } from '../../../state/ducks/comment/actions';


class TextContentContainer extends Component {
  state = {
    active: false,
    edit: false
  }

  toggleNewTextContent = (type) => {
    this.setState(() => ({
      active: !this.state.active,
      edit: false,
      type: type
    }));
  }

  toggleEditTextContent = (type) => {
    this.setState(() => ({
      edit: !this.state.edit,
      active: !this.state.edit,
      type: type
    }))
  }

  deactivateForm = () => {
    this.setState(() => ({
      active: false
    }))
  }

  render() {
    return (
      <TextContent 
        updatePostVoteScore={this.props.updatePostVoteScore}
        updateCommentVoteScore={this.props.updateCommentVoteScore}
        deletePost={this.props.deletePost}
        deleteComment={this.props.deleteComment}
        toggleNewTextContent={this.toggleNewTextContent}
        toggleEditTextContent={this.toggleEditTextContent}
        deactivateForm={this.deactivateForm}
        type={this.state.type}
        active={this.state.active}
        edit={this.state.edit}
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
  updateCommentVoteScore: (comment, option) => dispatch(updateCommentVoteScore(comment, option)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TextContentContainer);