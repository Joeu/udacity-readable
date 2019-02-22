import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextForm from '../presentational/TextForm';
import { postComment } from '../../../state/ducks/comment/actions';

class TextFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newComent: {
        author: '',
        body: '',
        timestamp: '',
        parentId: ''
      },

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.values);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.values);
  }

  handleClearForm = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.values);
  }

  render() {
    return (
      <TextForm newComment={this.state.newComent} handleSubmit={this.handleSubmit}></TextForm>
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