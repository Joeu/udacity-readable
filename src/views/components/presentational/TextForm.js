import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../styles/TextForm.css';

const TextForm = (props) => {
  return (
    <div>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group>
          <Form.Text className="text-muted">
            Create new Comment
          </Form.Text>
          {/* <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" /> */}
          <Form.Text>Author</Form.Text>
          <Form.Control type="text" placeholder="Author" value={props.newComment.author} />
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <div className="submit-button">
          <Button variant="outline-dark" type="submit">
            Post
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default TextForm;