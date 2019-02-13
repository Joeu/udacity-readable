import React from 'react';
import CommentContainer from '../container/CommentContainer';

const Post = (props) => {
  return (
    <div>
      I'm a Post component, and I display Comments
      <CommentContainer></CommentContainer>
      <CommentContainer></CommentContainer>
    </div>
  )
}

export default Post;