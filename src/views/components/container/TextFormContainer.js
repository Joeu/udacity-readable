import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextForm from '../presentational/TextForm';
import { postComment } from '../../../state/ducks/comment/actions';

class TextFormContainer extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.values);
  }

  render() {
    return (
      <TextForm handleSubmit={this.handleSubmit}></TextForm>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  state,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  postComment: (content) => dispatch(postComment(content)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TextFormContainer);