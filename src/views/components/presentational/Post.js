import React from 'react';
import '../../styles/Post.css';
import TextContent from './TextContent';
import Comment from './Comment';

const Post = (props) => {
  console.log("POST PROPS", props);
  return (
    <div className='post-container'>
      <TextContent post={props.post}></TextContent>
      {props.comments && props.comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)}
    </div>
  )
}

export default Post;