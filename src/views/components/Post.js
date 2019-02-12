import React from 'react';
import CommentContainer from './CommentContainer';

const Post = (props) => {
  return (
    <div>
      Thats a post component, and I display Comments
      <CommentContainer></CommentContainer>
      <CommentContainer></CommentContainer>
    </div>
  )
}

export default Post;