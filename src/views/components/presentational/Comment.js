import React from 'react';
import TextContent from './TextContent';

const Comment = (props) => {
  return (
    <div>
      <TextContent post={props.comment}></TextContent>
    </div>
  )
}

export default Comment;