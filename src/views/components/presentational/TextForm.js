import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../styles/TextForm.css';

const TextForm = (props) => {
  return (
    <Form className='form-container' onSubmit={props.handleSubmit}>
      {props.isPost
        &&
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            name='title' 
            placeholder="Title" 
            value={props.edit ? props.post.title : ''}
            onChange={props.handleInputChange} />
        </Form.Group>
      }
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control 
          type="text" 
          name='author' 
          placeholder="Author" 
          value={props.edit ? props.post.author : ''}
          onChange={props.handleInputChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control 
          as='textarea' 
          name='body' 
          type="text" 
          value={props.edit ? props.post.body : ''}
          onChange={props.handleInputChange} />
      </Form.Group>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default TextForm;