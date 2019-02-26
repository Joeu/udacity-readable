import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextForm from '../presentational/TextForm';
import { postComment, deleteComment } from '../../../state/ducks/comment/actions';

class TextFormContainer extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      id: this.uuidv4(),
      author: '',
      body: '',
      timestamp: Date.now(),
      parentId: props.parentId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postComment(this.state);
    this.handleClearForm();
  }

  handleClearForm = () => {
    this.setState({
      author: '',
      body: '',
      timestamp: ''
    })
  }

  render() {
    return (
      <TextForm 
        handleSubmit={this.handleSubmit} 
        handleInputChange={this.handleInputChange}>
      </TextForm>
    )
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   // state,
// });

const mapDispatchToProps = (dispatch, ownProps) => ({
  postComment: (content) => dispatch(postComment(content)),
  deleteComment: (content) => dispatch(deleteComment(content)),
})

export default connect(null, mapDispatchToProps)(TextFormContainer);