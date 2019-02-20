import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextContent from '../presentational/TextContent';
import { updateVoteScore } from '../../../state/ducks/comment/actions';


class TextContentContainer extends Component {
  render() {
    return (
      <TextContent updateVoteScore={this.props.updateVoteScore} post={this.props.post}></TextContent>
    )
  }
}




const mapStateToProps = (state, ownProps) => ({
  state,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateVoteScore: (post, option) => dispatch(updateVoteScore(post, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(TextContentContainer);