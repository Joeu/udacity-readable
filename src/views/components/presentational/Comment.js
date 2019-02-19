import React from 'react';
import TextContent from './TextContent';
import '../../styles/Comment.css';

const Comment = (props) => {
  return (
    <div className='comment'>
      <TextContent post={props.comment}></TextContent>
    </div>
  )
}

export default Comment;