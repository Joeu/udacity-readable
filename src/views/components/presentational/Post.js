import React from 'react';
import '../../styles/Post.css';
import TextContent from './TextContent';
// import CommentContainer from './CommentContainer';

const Post = (props) => {
  if (props.post) {
    return (
      <div className='post-container'>
        <TextContent post={props.post}></TextContent>
      </div>
    )
  } else {
    return (<div>NO POSTS</div>)
  }
}

export default Post;