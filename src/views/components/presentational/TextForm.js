import React from 'react';
// import { Form, Button } from 'react-bootstrap';
import '../../styles/TextForm.css';

const TextForm = (props) => {
  // console.log(props);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        {props.isPost
        && <label>
          Title:
          <input type="text" 
            value={props.author} 
            name="author" 
            onChange={props.handleInputChange} />
        </label>}
        <label>
          Author:
          <input type="text" 
            value={props.author} 
            name="author" 
            onChange={props.handleInputChange} />
        </label>
        <label>
          Body:
          <textarea type="text" 
            value={props.body} 
            name="body" 
            onChange={props.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default TextForm;