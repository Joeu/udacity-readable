import React from 'react';
import TextContentContent from '../container/TextContentContainer';
import '../../styles/Comment.css';

const Comment = (props) => {
  return (
    <div className='comment'>
      <TextContentContent post={props.comment}></TextContentContent>
    </div>
  )
}

export default Comment;