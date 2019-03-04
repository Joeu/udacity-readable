import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextForm from '../presentational/TextForm';
import { addComment, editComment } from '../../../state/ducks/comment/actions';
import { addPost, editPost } from '../../../state/ducks/post/actions';
import * as helper from '../../../state/utils/helpers';

class TextFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.edit ? props.post.id : helper.uuidv4(),
      title: props.edit ? props.post.title : '',
      author: props.edit ? props.post.author : '',
      body: props.edit ? props.post.body : '',
      timestamp: props.edit ? props.post.timestamp : Date.now(),
      category: props.category,
      parentId: props.parentId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
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
    this.props.edit
      ? this._handleEdit()
      : this._handleAdd()
  }

  _handleEdit = () => {
    this.props.isPost
      ? this.props.editPost(this.state, this.props.post.title)
      : this.props.editComment(this.state);
  }

  _handleAdd = () => {
    this.props.isPost
    ? this.props.addPost(this.state)
    : this.props.addComment(this.state);
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
        type={this.props.type}
        isPost={this.props.isPost}
        handleSubmit={this.handleSubmit} 
        handleInputChange={this.handleInputChange}
        edit={this.props.edit}
        post={this.state}>
      </TextForm>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (content) => dispatch(addComment(content)),
  addPost: (post) => dispatch(addPost(post)),
  editComment: (content) => dispatch(editComment(content)),
  editPost: (post, title) => dispatch(editPost(post, title))
})

export default connect(null, mapDispatchToProps)(TextFormContainer);