import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextForm from '../presentational/TextForm';
import { postComment } from '../../../state/ducks/comment/actions';
import { addPost } from '../../../state/ducks/post/actions';

class TextFormContainer extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      id: this.uuidv4(),
      author: '',
      body: '',
      timestamp: Date.now(),
      category: props.category,
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
    this.handleClearForm();
    this.props.isPost
      ? this.props.addPost(this.state)
      : this.props.postComment(this.state);
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
        isPost={this.props.isPost}
        handleSubmit={this.handleSubmit} 
        handleInputChange={this.handleInputChange}>
      </TextForm>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (content) => dispatch(postComment(content)),
  addPost: (post) => dispatch(addPost(post)),
})

export default connect(null, mapDispatchToProps)(TextFormContainer);