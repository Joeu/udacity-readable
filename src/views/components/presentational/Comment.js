import React from 'react';
import TextContentContainer from '../container/TextContentContainer';
import '../../styles/Comment.css';

const Comment = (props) => {
  return (
    <div className='comment'>
      <TextContentContainer post={props.comment}></TextContentContainer>
    </div>
  )
}

export default Comment;