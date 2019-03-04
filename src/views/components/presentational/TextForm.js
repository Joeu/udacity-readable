import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../styles/TextForm.css';
import * as constants from '../../utils/textConstants';

const TextForm = (props) => {
  return (
    <Form className='form-container' onSubmit={props.handleSubmit}>
      {props.type === constants.TEXT_TYPE_POST
        &&
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            name='title' 
            placeholder="Title" 
            defaultValue={props.edit ? props.post.title : ''}
            onChange={props.handleInputChange} />
        </Form.Group>
      }
      {!props.edit 
      && <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control 
            type="text" 
            name='author' 
            placeholder="Author" 
            defaultValue={props.edit ? props.post.author : ''}
            onChange={props.handleInputChange} />
        </Form.Group>
      }
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control 
          as='textarea' 
          name='body' 
          type="text" 
          defaultValue={props.edit ? props.post.body : ''}
          onChange={props.handleInputChange} />
      </Form.Group>

      <Button variant="dark" type="submit">
        {props.edit ? 'Edit' : 'Add'}
      </Button>
    </Form>
  )
}

export default TextForm;