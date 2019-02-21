import React from 'react';
import '../../styles/Comment.css';

const NewTextContent = (props) => {
  const handleSubmit = (content) => {
    console.log(content);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Content:
          <textarea />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewTextContent;