import React from 'react';
// import { Form, Button } from 'react-bootstrap';
import '../../styles/TextForm.css';

const TextForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Author:
          <input type="text" 
            value={props.author} 
            name="author" 
            onChange={props.handleAuthorChange} />
        </label>
        <label>
          Body:
          <textarea type="text" 
            value={props.body} 
            name="body" 
            onChange={props.handleContentChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default TextForm;